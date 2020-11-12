import { useRouter } from 'next/router'
import { createContext, useCallback, useContext, useEffect, useReducer } from 'react'

// context
const TrackingContext = createContext()

const initialState = {
  hasInit: false,
  enabled: false
}

const reducer = (state, action) => {
  switch (action.type) {
  case 'toggle':
    return { ...state, enabled: !state.enabled }

  case 'init':
    return { ...state, hasInit: true }

  case 'enable':
    return { ...state, enabled: true }

  case 'disable':
    return { ...state, enabled: false }
  }

  return state
}

const TrackingContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }

  return (
    <TrackingContext.Provider value={value}>
      {props.children}
    </TrackingContext.Provider>
  )
}

const TrackingContextConsumer = TrackingContext.Consumer

// tracking component
const Tracking = () => {
  const router = useRouter()

  const { state, dispatch } = useContext(TrackingContext)

  // track pageview
  const trackPageview = useCallback((url, force = false) => {
    if (state.enabled || force) {
      console.log('tracking pageview for', url)
    } else {
      console.log('not tracking pageview, tracking disabled')
    }
  }, [state])

  // init
  useEffect(() => {
    if (!state.hasInit) {
      dispatch({ type: 'init' })

      if (!localStorage.getItem('pingit_e')) {
        dispatch({ type: 'enable' })
        trackPageview(router.pathname, true)
      }
    }
  }, [state, dispatch, router, trackPageview])

  // route change
  useEffect(() => {
    router.events.on('routeChangeStart', trackPageview)

    return () => {
      router.events.off('routeChangeStart', trackPageview)
    }
  }, [state, router, trackPageview])

  return (<></>)
}

export { TrackingContext, TrackingContextProvider, TrackingContextConsumer, Tracking }

import { createContext, useCallback, useContext, useEffect, useReducer } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'next/head'

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
      if (window.umami) {
        console.debug('tracking pageview for', url)
        window.umami.trackView(url)
      }
    }
  }, [state])

  // init
  useEffect(() => {
    if (!state.hasInit) {
      dispatch({ type: 'init' })

      if (!localStorage.getItem('pingitto_e')) {
        console.debug('tracking initialised')
        dispatch({ type: 'enable' })
        trackPageview(router.pathname, true)
      } else {
        console.debug('tracking disabled due to opt-out')
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

  return (
    <NextHead>
      { process.env.umamiId && process.env.umamiUrl &&
        <script
          async
          defer
          data-website-id={process.env.umamiId}
          src={process.env.umamiUrl}
          data-auto-track="false"
          data-do-not-track="true"
        ></script>
      }
    </NextHead>
  )
}

export { TrackingContext, TrackingContextProvider, TrackingContextConsumer, Tracking }

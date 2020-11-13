import { useContext } from 'react'
import { TrackingContext } from 'components/Tracking'

import Page from 'layouts/Content'

const Privacy = () => {
  const { state, dispatch } = useContext(TrackingContext)

  const toggleAnalytics = () => {
    dispatch({ type: 'toggle' })

    if (localStorage.getItem('pingitto_e')) {
      localStorage.removeItem('pingitto_e')
    } else {
      localStorage.setItem('pingitto_e', true)
    }
  }

  return (
    <Page>
      <h1 className="align-center">Privacy</h1>

      <h2 className="flow-space-600">What info we collect</h2>
      <p>Ping It To collects the following data so we&apos;re aware of how our service is being used:</p>
      <ul>
        <li>Pages visited (like this one)</li>
        <li>Browser and Operating System Versions (eg. Google Chrome on Windows 10)</li>
        <li>Country of origin and system language</li>
      </ul>

      <h2 className="flow-space-600">What we do not collect</h2>
      <ul>
        <li>Cookies (except for the tracking opt-out below)</li>
        <li>Personal data</li>
        <li>Anything that could identify you or your device</li>
      </ul>

      <h2 className="flow-space-600">Opt-out of tracking</h2>
      <p>Although we would appreciate you leaving this minimal tracking enabled so we can better understand our users, we respect your wishes to not be tracked at all. That is why you can opt-out of tracking below.</p>
      <button className="button" onClick={toggleAnalytics}>
        { state.enabled &&
          'Opt out of tracking'
        }
        { !state.enabled &&
          'Opt in to tracking'
        }
      </button>
    </Page>
  )
}

export default Privacy

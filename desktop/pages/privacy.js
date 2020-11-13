import { useContext } from 'react'
import { TrackingContext } from 'components/Tracking'

import Page from 'layouts/Default.js'

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
    <Page meta={{
      title: 'Privacy - Ping It To'
    }}>

      <h1>Privacy</h1>
      <p>Ping It To only tracks how many people visit our app or website and doesn&apos;t track or save any links you send. In actual fact it&apos;s built specifically so that&apos;s impossible.</p>
      <p>I (Alistair) became sick of solutions that required you to sign-up and hand over your data, tracked every link you sent, or were insecure so the whole world could see.</p>

      <h2 className="flow-space-900">What info we collect</h2>
      <p>Ping It To collects the following data so we&apos;re aware of how our service is being used:</p>
      <ul>
        <li>Pages visited (like this one)</li>
        <li>Browser and Operating System Versions (eg. Google Chrome on Windows 10)</li>
        <li>Country of origin and system language</li>
      </ul>

      <h2 className="flow-space-900">What we do not collect</h2>
      <ul>
        <li>Cookies (except for the tracking opt-out below)</li>
        <li>Personal data</li>
        <li>Anything that could identify you or your computer</li>
      </ul>

      <h2 className="flow-space-900">Opt-out of tracking</h2>
      <p>Although we would appreciate you leaving this minimal tracking enabled so we can better understand our users, we respect your wishes to not be tracked at all. That is why this website will respect the Do-Not-Track setting of your browser (<a href="https://allaboutdnt.com">more info on DNT and how to enable</a>), and you can also opt-out of tracking below.</p>
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

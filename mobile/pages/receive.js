import { useContext, useState } from 'react'

import { validUrl } from '@common'

import { TrackingContext } from 'components/Tracking'

import Page from 'layouts/Default'

import QRReader from 'components/QRReader.js'

const REDIRECT = true

const Receive = () => {
  const { state } = useContext(TrackingContext)

  const [ cooldown, setCooldown ] = useState(false)

  const qrScan = url => {
    if (!cooldown && url && validUrl(url)) {
      trigger(url)
    }
  }

  const trigger = url => {
    if (state.enabled && window.umami) {
      console.debug('tracking event: qr received')
      window.umami('qr-received')
    }

    setCooldown(true)
    setTimeout(() => {
      setCooldown(false)
    }, 2000)

    if (REDIRECT) {
      window.open(url)
    } else {
      alert(url)
    }
  }

  return (
    <Page>
      <QRReader
        onScan={qrScan}
        className="qr"
      />
    </Page>
  )
}

export default Receive

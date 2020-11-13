import { useContext } from 'react'

import { validUrl } from '@common'

import { TrackingContext } from 'components/Tracking'

import Page from 'layouts/Default'

import QRReader from 'components/QRReader.js'

const REDIRECT = true

const Receive = () => {
  const { state } = useContext(TrackingContext)

  const qrScan = url => {
    if (url && validUrl(url)) trigger(url)
  }

  const trigger = url => {
    if (state.enabled && window.umami) {
      console.debug('tracking event: qr received')
      window.umami('qr-received')
    }

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

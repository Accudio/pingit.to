import { validUrl } from '@common'

import Page from 'layouts/Default'

import QRReader from 'components/QRReader.js'

const REDIRECT = true

const Receive = () => {
  const qrScan = url => {
    if (url && validUrl(url)) trigger(url)
  }

  const trigger = url => {
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

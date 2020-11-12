import { validUrl } from '@common'

import Page from 'layouts/Content'

import QRReader from 'components/QRReader.js'

// import styles from 'styles/pages/receive.module.scss'

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

import { validUrl } from '@common'

import QRReader from 'components/QRReader.js'

// import styles from 'styles/pages/receive.module.scss'

const REDIRECT = true

const Receive = () => {
  const qrScan = url => {
    if (url && validUrl(url)) trigger(url)
  }

  const trigger = url => {
    if (REDIRECT) {
      window.location.href = url
    } else {
      alert(url)
    }
  }

  return (
    <>
      <QRReader
        onScan={qrScan}
        className="qr"
      />
    </>
  )
}

export default Receive

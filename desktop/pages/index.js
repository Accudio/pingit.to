import React, { useState, useEffect } from 'react'

import usePeer from '../../common/hooks/usePeer'
import validUrl from '../../common/hooks/validUrl'

import QRCode from 'components/QRCode'

// import styles from 'styles/pages/index.module.scss'

const REDIRECT = true

const dataReceived = (data) => {
  if (data.key !== 'qr_share' || !validUrl(data.url)) {
    console.warn('provided data not valid', data)
    return
  }

  if (REDIRECT) {
    window.location.href = data.url
  } else {
    alert(data.url)
  }
}

const Home = () => {
  const [ myPeer, myPeerID ] = usePeer()

  const [ qrValue, setQrValue ] = useState()

  useEffect(() => {
    setQrValue(myPeerID)

    if (myPeer) {
      myPeer.on('connection', (conn) => {
        conn.on('data', dataReceived)
      })
    }
  })

  return (
    <main>
      <QRCode value={qrValue} />
    </main>
  )
}

export default Home

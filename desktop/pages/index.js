import React, { useState, useEffect } from 'react'

import usePeer from '../../common/usePeer'
import verify from '../../common/verify'

import QRCode from 'components/qrcode'

import styles from 'styles/pages/index/index.module.scss'

const REDIRECT = false

const dataReceived = (data) => {
  if (!verify(data)) {
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
    <div className={styles.app}>
      <img src="https://source.unsplash.com/random/1920x1080?landscape" className={styles.bg} alt="" width="1920" height="1080" loading="lazy" />
      <main className={styles.main}>
        <QRCode value={qrValue} />
        <input type="text" value={qrValue} onChange={e => setQrValue(e.target.value)} />
      </main>
    </div>
  )
}

export default Home

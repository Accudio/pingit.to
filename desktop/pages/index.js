import React, { useState, useEffect } from 'react'

import usePeer from '../../common/hooks/usePeer'
import validUrl from '../../common/hooks/validUrl'

import QRCode from 'components/qrcode'

import styles from 'styles/pages/index/index.module.scss'

const REDIRECT = false

const dataReceived = (data) => {
  if (data.key !== process.env.NEXT_PUBLIC_PEER_KEY || !validUrl(data.url)) {
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
      </main>
    </div>
  )
}

export default Home

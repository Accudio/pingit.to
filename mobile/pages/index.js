import React, { useState, useEffect } from 'react'

import usePeer from '../../common/usePeer'

import styles from 'styles/pages/index/index.module.scss'

const Home = () => {
  const [ myPeer, myPeerID ] = usePeer()

  const [ remoteID, setRemoteID ] = useState()
  const [ sendData, setSendData ] = useState()

  useEffect(() => {
    if (myPeer) {
      myPeer.on('connection', (conn) => {
        conn.on('data', dataReceived)
      })
    }
  })

  const send = (e) => {
    e.preventDefault()
    console.debug('sending', sendData, 'to', remoteID)
    const conn = myPeer.connect(remoteID)
    conn.on('open', () => {
      conn.send({
        key: process.env.NEXT_PUBLIC_PEER_KEY,
        peer: myPeerID,
        url: sendData
      })
    })
  }

  return (
    <main className={styles.main}>
      <form onSubmit={send}>
        <label>Remote ID: <input type="text" value={remoteID} onChange={e => setRemoteID(e.target.value)} /></label>
        <label>Data: <input type="text" value={sendData} onChange={e => setSendData(e.target.value)} /></label>
        <button type="submit">Send</button>
      </form>
    </main>
  )
}

export default Home

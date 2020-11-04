import React, { useState } from 'react'

import { usePeer, validUrl } from '@common'

import QRReader from 'components/QRReader.js'

import styles from 'styles/pages/index.module.scss'

const Send = () => {
  const [ myPeer, myPeerID ] = usePeer()

  const [ remoteID, setRemoteID ] = useState(null)
  const [ sendUrl, setSendUrl ] = useState(null)
  const [ isUrlSet, setIsUrlSet ] = useState(false)

  const send = () => {
    console.debug('sending', sendUrl, 'to', remoteID)
    const conn = myPeer.connect(remoteID)
    conn.on('open', () => {
      conn.send({
        key: 'qr_share',
        peer: myPeerID,
        url: sendUrl
      })
      setRemoteID(null)
      setSendUrl(null)
      setIsUrlSet(false)
    })
  }

  const qrScan = data => {
    if (data) {
      setRemoteID(data)
      send()
    }
  }

  return (
    <>
      { !isUrlSet &&
        <form
          className={styles.form}
          onSubmit={e => {
            e.preventDefault()
            if (sendUrl && validUrl(sendUrl)) {
              setIsUrlSet(true)
            }
          }}>
          <label htmlFor="url" className={styles.label}>Enter URL</label>
          <input type="text" id="url" className={styles.input} value={sendUrl} onChange={e => setSendUrl(e.target.value)} />
          <button type="submit">Send</button>
        </form>
      }
      { isUrlSet &&
        <div className="qr">
          <button
            className="qr__back"
            onClick={() => setIsUrlSet(false)}>
            Back
          </button>
          <QRReader
            onScan={qrScan}
            className="qr__el"
          />
        </div>
      }
    </>
  )
}

export default Send

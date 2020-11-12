import { useState, useEffect } from 'react'

import { usePeer, validUrl } from '@common'

import QRCode from '../QRCode'

import styles from 'styles/components/sidebar/qrshare.module.scss'

const REDIRECT = true

export default function QRShare() {
  const [ mode, setMode ] = useState('receive')
  const [ myPeer, myPeerID ] = usePeer()
  const [ qrValue, setQrValue ] = useState()

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

  useEffect(() => {
    if (mode === 'receive') setQrValue(myPeerID)

    if (myPeer) {
      myPeer.on('connection', conn => {
        console.debug('connection from ' + conn.peer)

        conn.on('data', data => {
          console.debug('received dara from ' + conn.peer, data)
          dataReceived(data)
          conn.close()
        })
      })
    }
  }, [mode, myPeerID, myPeer])

  return (
    <div className={`align-center flow flow-space-500 ${styles.wrap}`}>
      <div className={styles.code}>
        <QRCode value={qrValue} />
      </div>
      <div className={`${styles.form} ${mode === 'send' ? styles.show : ''}`}>
        <label htmlFor="qr-value">
          <span className="sr-text">URL to send</span>
        </label>
        <input
          className={styles.input}
          id="qr-value"
          type={mode === 'receive' ? 'text' : 'url'}
          value={qrValue}
          onChange={e => setQrValue(e.target.value)}
          readOnly={mode === 'receive'}
          placeholder="URL to send"
        />
      </div>
      <footer className={styles.controls}>
        <button className={`button ${styles.button} ${mode === 'receive' ? styles.buttonActive : ''}`} onClick={() => setMode('receive')}>Receive</button>
        <button className={`button ${styles.button} ${mode === 'send' ? styles.buttonActive : ''}`} onClick={() => {
          setQrValue('')
          setMode('send')
        }}>Send</button>
      </footer>
    </div>
  )
}

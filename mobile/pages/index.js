import React, { useCallback, useEffect, useState } from 'react'

import { usePeer, validUrl } from '@common'

import Page from 'layouts/Default.js'

import { ArrowRightIcon, ArrowLeftIcon } from '@common/components/Icons'

import QRReader from 'components/QRReader.js'

import styles from 'styles/pages/index.module.scss'

const Send = () => {
  const [ myPeer, myPeerID ] = usePeer()

  const [ remoteID, setRemoteID ] = useState(null)
  const [ sendUrl, setSendUrl ] = useState(null)
  const [ isUrlSet, setIsUrlSet ] = useState(false)
  const [ hasReceivedUrl, setHasReceivedUrl ] = useState(false)

  const receiveShare = useCallback(e => {
    if (!hasReceivedUrl) {
      const parsedUrl = new URL(window.location)

      const url = parsedUrl.searchParams.get('url')
      const text = parsedUrl.searchParams.get('text')
      const title = parsedUrl.searchParams.get('title')

      const actualUrl = validUrl(url) ? url : (validUrl(text) ? text : (validUrl(title) ? title : false))

      if (actualUrl) {
        setSendUrl(actualUrl)
        setHasReceivedUrl(true)
        setIsUrlSet(true)
      }
    }
  }, [hasReceivedUrl, setSendUrl, setHasReceivedUrl, setIsUrlSet])

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
      window.close()
    })
  }

  const qrScan = data => {
    if (data) {
      setRemoteID(data)
      send()
    }
  }

  useEffect(() => {
    receiveShare()
  })

  return (
    <Page>
      { !isUrlSet &&
        <form
          className={styles.form}
          onSubmit={e => {
            e.preventDefault()
            if (sendUrl && validUrl(sendUrl)) {
              setIsUrlSet(true)
            }
          }}>
          <label htmlFor="url" className={styles.label}>Enter URL to send</label>
          <div className={styles.formgroup}>
            <input type="url" id="url" className={styles.input} value={sendUrl} onChange={e => setSendUrl(e.target.value)} />
            <button type="submit" className={`button ${styles.button}`}>
              <ArrowRightIcon />
              <span className="sr-text">Send</span>
            </button>
          </div>
        </form>
      }
      { isUrlSet &&
        <div className="qr">
          <button
            className="button qr__back"
            onClick={() => setIsUrlSet(false)}>
            <ArrowLeftIcon />
            <span className="sr-text">Back</span>
          </button>
          <QRReader
            onScan={qrScan}
            className="qr__el"
          />
        </div>
      }
    </Page>
  )
}

export default Send

import React, { useState, useEffect } from 'react'

import validUrl from '../../common/hooks/validUrl.js'

import QRReader from 'components/QRReader.js'

import styles from 'styles/pages/receive.module.scss'

const REDIRECT = false

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
    <main className="app">
      <QRReader
        onScan={qrScan}
        className="qr"
      />
    </main>
  )
}

export default Receive

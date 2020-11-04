import React, { useState } from 'react'

import { validUrl } from '@common'

import QRCode from 'components/QRCode'

import styles from 'styles/pages/send.module.scss'

const Send = () => {
  const [ sendUrl, setSendUrl ] = useState(null)
  const [ isUrlSet, setIsUrlSet ] = useState(false)

  return (
    <main aria-live="polite">
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
          <button type="submit">Generate</button>
        </form>
      }
      { isUrlSet &&
        <button
          className={styles.back}
          onClick={() => setIsUrlSet(false)}>
          Back
        </button>
      }
      { isUrlSet &&
        <QRCode value={sendUrl} />
      }
    </main>
  )
}

export default Send

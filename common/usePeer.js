import React, { useState, useEffect } from 'react'

export default function usePeer() {
  const [ myPeer, setPeer ] = useState(null)
  const [ myPeerID, setPeerID ] = useState(null)

  const cleanup = () => {
    if (myPeer) {
      myPeer.disconnect()
      myPeer.destroy()
    }
    setPeer(null)
    setPeerID(null)
  }

  useEffect(() => {
    import('peerjs').then(() => {
      const peer = myPeer ? myPeer : new Peer({
        host: 'localhost',
        port: 9000
      })

      peer.on('open', () => {
        setPeer(peer)
        setPeerID(peer.id)
        console.debug('Peer ID: ' + peer.id)
      })

      peer.on('connection', (conn) => {
        conn.on('data', (data) => {
          console.log(data)
        })
      })

      peer.on('disconnected', () => {
        console.log('Peer disconnected')
        cleanup()
      })

      peer.on('close', () => {
        console.log('Peer closed remotetly')
        cleanup()
      })

      peer.on('error', (error) => {
        console.log('Peer error', error)
        cleanup()
      })
    })
  })

  return [ myPeer, myPeerID ]
}

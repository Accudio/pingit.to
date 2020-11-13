import { useState, useEffect, useCallback } from 'react'

export default function usePeer() {
  const [ myPeer, setPeer ] = useState(null)
  const [ myPeerID, setPeerID ] = useState(null)

  const cleanup = useCallback(() => {
    if (myPeer) {
      myPeer.disconnect()
      myPeer.destroy()
    }
    setPeer(null)
    setPeerID(null)
  }, [myPeer])

  useEffect(() => {
    import('peerjs').then(({ peerjs }) => {
      const peer = myPeer || new peerjs.Peer({
        host: process.env.NEXT_PUBLIC_PEER_HOST,
        port: process.env.NEXT_PUBLIC_PEER_PORT,
        secure: true
      })

      peer.on('open', () => {
        setPeer(peer)
        setPeerID(peer.id)
        console.debug('Peer ID: ' + peer.id)
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
  }, [myPeer, myPeerID, cleanup])

  return [ myPeer, myPeerID ]
}

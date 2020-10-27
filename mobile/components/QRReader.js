import dynamic from 'next/dynamic'

const QrReader = dynamic(
  () => import('react-qr-reader'),
  { ssr: false }
)

export default function User({onScan, className}) {
  if (!process.browser) return ''

  const onError = (err) => {
    console.error(err)
  }

  return (
    <QrReader
      delay={300}
      onError={onError}
      onScan={onScan}
      className={className}
    />
  )
}

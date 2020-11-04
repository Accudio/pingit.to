import QrCodeReact from 'qrcode.react'

export default function User({ value }) {
  if (!value) return ''

  return (
    <QrCodeReact
      value={value}
      size={400}
      includeMargin={true}
    />
  )
}

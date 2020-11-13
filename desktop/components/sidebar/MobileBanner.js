import styles from 'styles/components/sidebar/mobile-banner.module.scss'

export default function MobileBanner() {
  return (
    <div className={`bg-primary color-white text-400 leading-tight weight-bold ${styles.wrap}`}>
      This page is designed for your desktop device, whilst there is a seperate companion page for mobiles.<br />
      <a href="https://m.pingit.to">Ping It To Mobile</a>.
    </div>
  )
}

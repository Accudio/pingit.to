import NextHead from 'next/head'
import { useRouter } from 'next/router'

import GoogleFonts from 'next-google-fonts'

const APPNAME = 'Ping It To'
const DOMAIN = 'https://m.pingit.to'

const Head = ({ children, meta }) => {
  const router = useRouter()

  const title = meta?.title || 'Ping It To - Share links between mobile and desktop'
  const description = meta?.description || 'Share links between mobile and desktop with no login using QR Codes!'

  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" />
      <NextHead>
        <meta charSet="UTF-8" />
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />

        <title>{title}</title>
        <meta name="description" content={description} />

        <meta name="application-name" content={APPNAME} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={APPNAME} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#5d8fff" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#5d8fff" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5d8fff" />
        <link rel="shortcut icon" href="/icons/favicon.ico" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={`${DOMAIN}${router.pathname}`} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${DOMAIN}/icons/android-chrome-192x192.png`} />
        <meta name="twitter:creator" content="@accudio" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={APPNAME} />
        <meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
        <meta property="og:image" content={`${DOMAIN}/icons/apple-touch-icon.png`} />

        {children}
      </NextHead>
    </>
  )
}

export default Head

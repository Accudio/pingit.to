import Page from 'layouts/Content'

const Info = () => (
  <Page>
    <h1 className="align-center">Ping It To</h1>
    <p>Ping It To allows you to send URLs between a mobile and desktop device using QR Codes. There is no need for an account and no unnecessary bells-and-whistles.</p>
    <h2 className="flow-space-900">How to Use</h2>
    <p>On your desktop, open <a href="https://www.PingIt.link">Ping It To</a> or install the Chrome Extension (coming soon). Enter a URL on your mobile or desktop to send, and simply point your mobile at the QR code to see the magic!</p>
    <h2 className="flow-space-600">Install</h2>
    <p>Using Google Chrome on Android you can install this app to your device and share URLs directly to it using the normal &apos;Share&apos; dialog! Simply tap the three dots in the top-right and tap &quot;Add to Home Screen&quot;. From any other app on your phone, select &quot;Share&quot; and tap Ping It To!</p>
    <h2 className="flow-space-900">Privacy</h2>
    <p>Ping It To only tracks how many people visit our app or website and doesn&apos;t track or save any links you send. In actual fact it&apos;s built specifically so that&apos;s impossible! I (Alistair) became sick of solutions that required you to sign-up and hand over your data, tracked every link you sent, or were insecure so the whole world could see. The only thing we are able to see is how many people use the service and rough statistics on country of origin and screen size&mdash;and that&apos;s how it should be.</p>
    <footer className="flow-space-900">
      Built by <a href="https://accudio.com">Alistair Shepherd</a>. Copyright 2020
    </footer>
  </Page>
)

export default Info

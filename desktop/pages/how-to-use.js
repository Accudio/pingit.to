import Page from 'layouts/Default.js'

const HowToUse = () => (
  <Page meta={{
    title: 'How to Use - Ping It To'
  }}>
    <h1>How to Use</h1>

    <h2 className="flow-space-900">Mobile to Desktop</h2>
    <ol>
      <li>Visit the <a href="https://m.pingit.to">Mobile Website</a> on your smartphone in Google Chrome on Android or Safari on iOS.</li>
      <li>Install the app by tapping &quot;Add to Home Screen&quot;. On Chrome this is in the three dots in the top-right corner, and for Safari tap the &quot;Share&quot; button.</li>
      <li>On other apps, select &quot;Share&quot; and choose Ping It To</li>
      <li>Ensure &quot;RECEIVE&quot; is selected on the left and a QR Code is visible</li>
      <li>Scan the QR Code on your mobile device. You&apos;ll then be redirected to the link you shared</li>
    </ol>
    <p>You can also directly insert links within the mobile app instead of sharing them from another app.</p>

    <h2 className="flow-space-900">Desktop to Mobile</h2>
    <ol>
      <li>Click &quot;SEND&quot; on the left and type/paste the link into the input that appears</li>
      <li>Scan the QR Code shown on your moble device with the <a href="https://m.pingit.to">Ping It To mobile app</a> (installation instructions above)</li>
    </ol>
    <p>You can also use any other QR Code reader should you prefer using an alternate app.</p>
  </Page>
)

export default HowToUse

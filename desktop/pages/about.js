import Page from 'layouts/Default.js'

const About = () => (
  <Page meta={{
    title: 'About - Ping It To'
  }}>
    <h1>About Ping It To</h1>
    <p>Ping It To allows you to send URLs between a mobile and desktop device using QR codes. There is no need for an account and no unnecessary bells and whistles.</p>
    <p>We also include useful features including a search bar and clock, and also a stunning background image so Ping It To can function as a  great start page/new tab page replacement.</p>
    <p>The <a href="https://github.com/Accudio/PingIt">source is available on GitHub</a> and you are welcome to fork, modify and even contribute back.</p>

    <h2 className="flow-space-900">About the Creator</h2>
    <p>Hi, I&apos;m <a href="https://alistairshepherd.uk/">Alistair Shepherd</a>, a frontend web developer from the Highlands of Scotland and currently living in Edinburgh.</p>
    <p>I built Ping It To as I have used similar QR-based URL sharing solutions for a couple of years and none have been quite what I wanted from them. Between them they suffered from reliability problems, lack of SSL security, slow load times, poor apps and also required a fair chunk of userscripts and userstyles to look good enough to be my start page.</p>
    <p>Ping It To aims to fix all of those problems.</p>

    <h2 className="flow-space-900">Credits</h2>
    <ul>
      <li>Background images from <a href="https://unsplash.com">Unsplash</a></li>
      <li>Website powered by <a href="https://nextjs.org">Next.js</a> and <a href="https://preactjs.com">Preact</a></li>
      <li>Hosted with <a href="https://www.netlify.com">Netlify</a></li>
      <li><a href="https://peerjs.com">PeerJS</a> for Mobile to Desktop Communication</li>
      <li>PeerJS server hosted with <a href="https://cloud.google.com">Google Cloud Compute</a></li>
    </ul>
  </Page>
)

export default About

import Head from 'components/Head'

import DefaultLayout from 'layouts/Default.js'

import '@common/styles/global.scss'
import 'styles/global/global.scss'

function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || DefaultLayout

  return (
    <>
      <Head />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp

import Nav from 'components/Nav.js'

import layoutStyles from 'styles/layouts/all.module.scss'

const DefaultLayout = ({ children }) => {
  return (
    <div className={layoutStyles.wrap}>
      <main className="app">
        {children}
      </main>
      <Nav />
    </div>
  )
}

export default DefaultLayout

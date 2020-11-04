import Nav from 'components/Nav.js'

import layoutStyles from 'styles/layouts/all.module.scss'
import contentStyles from 'styles/layouts/content.module.scss'

const ContentLayout = ({ children }) => {
  return (
    <div className={layoutStyles.wrap}>
      <main className={`app ${contentStyles.main}`}>
        {children}
      </main>
      <Nav />
    </div>
  )
}

export default ContentLayout

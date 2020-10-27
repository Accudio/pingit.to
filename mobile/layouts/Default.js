import Header from 'components/Header.js'

const DefaultLayout = ({ children }) => {

  return (
    <div className="layout layout--default">
      <Header />
      {children}
    </div>
  )
}

export default DefaultLayout

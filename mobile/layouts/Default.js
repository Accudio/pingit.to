import Nav from 'components/Nav.js'

const DefaultLayout = ({ children }) => {
  return (
    <div className="layout layout--default">
      {children}
      <Nav />
    </div>
  )
}

export default DefaultLayout

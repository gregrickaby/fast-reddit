import config from '@/functions/config'
import PropTypes from 'prop-types'
import DisplayOptions from './DisplayOptions'
import Footer from './Footer'
import Header from './Header'
import Meta from './Meta'

export default function Layout({children}) {
  return (
    <>
      <Meta />
      <Header title={config?.siteTitle} description={config?.siteDescription} />
      <main className="container p-8 max-w-prose">{children}</main>
      <Footer author={config?.siteAuthor} url={config?.authorUrl} />
      <DisplayOptions />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.any.isRequired
}

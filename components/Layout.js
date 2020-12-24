import config from '@/functions/config'
import PropTypes from 'prop-types'
import Meta from './Meta'

export default function Layout({children}) {
  return (
    <>
      <Meta />
      <h1 className="text-4xl font-bold text-center">{config.siteTitle}</h1>
      <p className="text-center">{config.siteDescription}</p>
      <main className="container p-8 max-w-prose">{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.any.isRequired
}

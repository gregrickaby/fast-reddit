import Meta from './Meta'
import PropTypes from 'prop-types'

export default function Layout({children}) {
  return (
    <>
      <Meta
        author="Greg Rickaby"
        title="Fast Reddit"
        description="Display a subreddit, fast!"
        siteUrl="https://fast-reddit.vercel.app"
      />
      <main className="container p-8 max-w-prose">{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.any.isRequired
}

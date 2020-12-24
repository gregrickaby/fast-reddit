import Head from 'next/head'
import PropTypes from 'prop-types'

export default function Meta(props) {
  const {author, description, title, siteUrl} = props
  return (
    <Head>
      <title>
        {title} - {description}
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content={description} />
      <meta name="msapplication-TileColor" content="#fffff" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#fff" />
      <link rel="preconnect" href="//www.reddit.com" crossOrigin="anonymous" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/favicon/android-icon-192x192.png" />
      <meta name="twitter:creator" content={author} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content="/favicon/apple-icon.png" />
    </Head>
  )
}

Meta.propTypes = {
  author: PropTypes.string,
  description: PropTypes.string,
  siteUrl: PropTypes.string,
  title: PropTypes.string
}

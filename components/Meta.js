import config from '@/functions/config'
import Head from 'next/head'

export default function Meta() {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>
        {config?.siteTitle} - {config?.siteDescription}
      </title>
      <meta name="description" content={config?.siteDescription} />
      <meta name="msapplication-TileColor" content="#fffff" />
      <meta name="msapplication-config" content="/favicon/browserconfig?.xml" />
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
      <meta name="twitter:url" content={config?.siteUrl} />
      <meta name="twitter:title" content={config?.siteTitle} />
      <meta name="twitter:description" content={config?.siteDescription} />
      <meta name="twitter:image" content="/favicon/apple-icon.png" />
      <meta name="twitter:creator" content={config?.siteAuthor} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={config?.siteTitle} />
      <meta property="og:description" content={config?.siteDescription} />
      <meta property="og:site_name" content={config?.siteTitle} />
      <meta property="og:url" content={config?.siteUrl} />
      <meta property="og:image" content="/favicon/apple-icon.png" />
    </Head>
  )
}

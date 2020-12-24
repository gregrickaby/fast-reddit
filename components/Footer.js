import PropTypes from 'prop-types'

export default function Footer({author, url}) {
  return (
    <footer className="mb-8 text-center">
      <p className="text-sm">
        by{' '}
        <a href={url} target="_blank" rel="noreferrer">
          {author}
        </a>
      </p>
    </footer>
  )
}

Footer.propTypes = {
  author: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

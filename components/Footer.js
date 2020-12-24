import PropTypes from 'prop-types'

export default function Footer({author, url}) {
  return (
    <footer>
      <p className="text-sm text-center">
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

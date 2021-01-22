import PropTypes from 'prop-types'

export default function Header({title, description}) {
  return (
    <header className="mt-8 text-center">
      <h1 className="text-5xl font-bold mb-2">{title}</h1>
      <p>{description}</p>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

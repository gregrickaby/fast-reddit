import PropTypes from 'prop-types'

export default function Header({title, description}) {
  return (
    <header className="mt-8 text-center">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-sm">{description}</p>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

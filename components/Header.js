import PropTypes from 'prop-types'

export default function Header({title, description}) {
  return (
    <header>
      <h1 className="text-4xl mt-8 font-bold text-center">{title}</h1>
      <p className="text-center">{description}</p>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

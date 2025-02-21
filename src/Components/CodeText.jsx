import PropTypes from "prop-types"

export default function CodeText({children}) {
  return (
    <span className='text-mypurple'>
        {children}
    </span>
  )
}

CodeText.propTypes = {
    children : PropTypes.node
}


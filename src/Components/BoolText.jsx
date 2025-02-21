import PropTypes from "prop-types"

export default function BoolText({ children }) {
  return (
    <span className='text-myteal'>
    {children}
    </span>
  )
}

BoolText.propTypes = {
    children : PropTypes.node
}

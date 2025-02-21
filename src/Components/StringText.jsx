import PropTypes from "prop-types"

export default function StringText({ children }) {
  return (
          <span className='text-mygreen'>
            {children}
          </span>
  )
}
StringText.propTypes = {
    children: PropTypes.node
}

import PropTypes from "prop-types"

export default function GreyText({ children }) {
    return (
      <span className='text-gray-600'>
        {children}
      </span>
    )
  }

GreyText.propTypes= { children : PropTypes.node }

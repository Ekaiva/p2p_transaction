import React from 'react'

const ErrorMessage = (props) => {
  return (
    <div>
       <span className="error">{props?.msg}</span>
    </div>
  )
}

export default ErrorMessage

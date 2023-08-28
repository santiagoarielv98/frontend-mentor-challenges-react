import React from 'react'

import './IconButton.css'

const IconButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...rest }) => {
  return (
    <button className="icon-button" {...rest}>
      {children}
    </button>
  )
}

export default IconButton

import React from 'react'

const IconButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return <button {...props}>{props.children}</button>
}

export default IconButton

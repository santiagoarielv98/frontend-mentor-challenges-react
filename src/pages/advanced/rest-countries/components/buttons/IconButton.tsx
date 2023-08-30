import React from 'react'

import './IconButton.css'

const IconButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...rest }) => {
  return (
    <button
      className="inline-flex items-center gap-2 p-1.5 rounded-full hover:bg-gray-100 focus:ring-2 focus:ring-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      {...rest}
    >
      {children}
    </button>
  )
}

export default IconButton

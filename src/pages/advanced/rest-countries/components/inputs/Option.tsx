import React from 'react'

interface OptionProps extends React.HTMLProps<HTMLLIElement> {}

const Option: React.FC<OptionProps> = ({ children, value, ...rest }) => {
  return (
    <li
      {...rest}
      className="px-6 py-1 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-100"
      data-value={value}
      tabIndex={0}
      role="option"
    >
      <span className="pointer-events-none">{children}</span>
    </li>
  )
}

export default Option

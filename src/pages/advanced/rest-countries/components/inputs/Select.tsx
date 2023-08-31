import React from 'react'

import ChevronDown from '../icons/ChevronDown'

interface SelectProps extends React.HTMLProps<HTMLSelectElement> {}

const options = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']

const Select: React.FC<SelectProps> = () => {
  return (
    <label className="inline-flex w-full max-w-[12.5rem] relative h-max shadow-md rounded-md dark:bg-gray-800">
      <input id="filter" hidden className="peer" type="checkbox" />
      <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
        <ChevronDown className="w-5 h-5" />
      </div>
      <label
        className="w-full px-6 py-4 text-sm rounded-md cursor-pointer peer-checked:ring-2 peer-checked:ring-gray-300 hover:ring-2 hover:ring-gray-300"
        htmlFor="filter"
      >
        Filter by Region
      </label>
      <ul className="invisible absolute inset-x-0 top-full mt-2 py-3 peer-checked:visible shadow-2xl bg-white cursor-pointer dark:bg-gray-800 rounded-md z-10">
        {options.map((option) => (
          <li
            key={option}
            className="px-6 py-1 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-100"
            data-value={option}
          >
            {option}
          </li>
        ))}
      </ul>
    </label>
  )
}

export default Select

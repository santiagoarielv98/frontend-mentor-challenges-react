import React from 'react'

import SearchIcon from '../icons/SearchIcon'

interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Search: React.FC<SearchProps> = (props) => {
  return (
    <div className="inline-flex w-full max-w-[30rem] min-w-[15rem] relative">
      <div className="absolute inset-y-0 left-0 flex items-center px-6 pointer-events-none">
        <SearchIcon className="w-5 h-5" />
      </div>
      <input
        {...props}
        className="w-full px-6 py-4 pl-[73px] text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 hover:ring-2 hover:ring-gray-300 dark:bg-gray-800 shadow-md"
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  )
}

export default Search

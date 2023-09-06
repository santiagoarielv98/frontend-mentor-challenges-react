import React from 'react'
import { Link } from 'react-router-dom'

import useAppContext from '../../hooks/useAppContext'

import IconButton from '../buttons/IconButton'
import GlobeAmericas from '../icons/GlobeAmericas'
import MoonIcon from '../icons/MoonIcon'
import SunIcon from '../icons/SunIcon'

const Navbar: React.FC = () => {
  const { toggleTheme, theme } = useAppContext()

  return (
    <header className="px-7 h-20 p-6 bg-white shadow-md fixed top-0 inset-x-0 z-50 dark:bg-gray-800 dark:text-white dark:shadow-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="#" className="inline-flex items-center gap-2">
          <GlobeAmericas width={30} height={30} />
          <h1 className="text-2xl font-semibold leading-tight">SV ~ Countries</h1>
        </Link>
        <IconButton onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
        </IconButton>
      </div>
    </header>
  )
}

export default Navbar

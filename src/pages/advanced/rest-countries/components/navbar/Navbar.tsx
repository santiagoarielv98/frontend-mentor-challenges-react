import React from 'react'
import GlobeAmericas from '../icons/GlobeAmericas'
import IconButton from '../buttons/IconButton'
import MoonIcon from '../icons/MoonIcon'
import useAppContext from '../../hooks/useAppContext'
import SunIcon from '../icons/SunIcon'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  const { toggleTheme, theme } = useAppContext()

  return (
    <nav className="navbar">
      <div>
        <Link to="#">
          <GlobeAmericas />
          <span>SV ~ Countries</span>
        </Link>
        <IconButton onClick={toggleTheme}>{theme === 'light' ? <MoonIcon /> : <SunIcon />}</IconButton>
      </div>
    </nav>
  )
}

export default Navbar

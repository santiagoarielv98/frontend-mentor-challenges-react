import React from 'react'
import GlobeAmericas from '../icons/GlobeAmericas'
import IconButton from '../buttons/IconButton'
import MoonIcon from '../icons/MoonIcon'
import useAppContext from '../../hooks/useAppContext'
import SunIcon from '../icons/SunIcon'
import { Link } from 'react-router-dom'

import './Navbar.css'

const Navbar: React.FC = () => {
  const { toggleTheme, theme } = useAppContext()

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="#" className="navbar__logo">
          <GlobeAmericas width="48" height="48" />
          <span>
            SV <b>~</b> Countries
          </span>
        </Link>
        <IconButton onClick={toggleTheme}>{theme === 'light' ? <MoonIcon /> : <SunIcon />}</IconButton>
      </div>
    </nav>
  )
}

export default Navbar

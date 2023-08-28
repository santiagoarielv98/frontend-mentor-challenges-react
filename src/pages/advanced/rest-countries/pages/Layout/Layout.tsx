import { Outlet } from 'react-router-dom'
import { AppProvider } from '../../context/AppContext'
import Navbar from '../../components/navbar/Navbar'

import './Layout.css'

const Layout: React.FC = () => {
  return (
    <AppProvider>
      <Navbar />
      <div className="layout">
        <Outlet />
      </div>
    </AppProvider>
  )
}

export default Layout

import { Outlet } from 'react-router-dom'
import { AppProvider } from '../../context/AppContext'
import Navbar from '../../components/navbar/Navbar'

import './Layout.css'

const Layout: React.FC = () => {
  return (
    <AppProvider>
      <Navbar />
      <main className="px-7 pt-20">
        <div className="max-w-7xl mx-auto py-12">
          <Outlet />
        </div>
      </main>
    </AppProvider>
  )
}

export default Layout

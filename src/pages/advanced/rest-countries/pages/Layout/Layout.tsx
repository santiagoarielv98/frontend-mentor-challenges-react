import { Outlet } from 'react-router-dom'

import { AppProvider } from '../../context/AppContext'

import Navbar from '../../components/navbar/Navbar'

import './Layout.css'

const Layout: React.FC = () => {
  return (
    <AppProvider>
      <Navbar />
      <main className="px-7 pt-20 pb-10 dark:bg-gray-900 dark:text-white min-h-screen">
        <div className="max-w-7xl mx-auto py-12">
          <Outlet />
        </div>
      </main>
    </AppProvider>
  )
}

export default Layout

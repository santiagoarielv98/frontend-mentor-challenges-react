import { Outlet } from 'react-router-dom'
import { AppProvider } from '../../context/AppContext'
import Navbar from '../../components/navbar/Navbar'

const Layout: React.FC = () => {
  return (
    <AppProvider>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </AppProvider>
  )
}

export default Layout

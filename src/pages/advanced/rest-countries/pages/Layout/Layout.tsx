import { Outlet } from 'react-router-dom'
import { AppProvider } from '../../context/AppContext'
import Navbar from '../../components/navbar/Navbar'

const Layout: React.FC = () => {
  return (
    <AppProvider>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh'
        }}
      >
        <Navbar />
        <Outlet />
      </div>
    </AppProvider>
  )
}

export default Layout

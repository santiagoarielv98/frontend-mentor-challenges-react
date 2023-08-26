import { Outlet } from 'react-router-dom'
import { AppProvider } from '../../context/AppContext'

const Layout: React.FC = () => {
  return (
    <AppProvider>
      <div>
        <h1>Layout</h1>
        <Outlet />
      </div>
    </AppProvider>
  )
}

export default Layout

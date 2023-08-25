import { createBrowserRouter } from 'react-router-dom'
import { advancedRoutes } from '../pages/advanced/routes'

const router = createBrowserRouter([
  {
    path: '/',
    children: [advancedRoutes]
  }
])

export default router

import { Navigate, createHashRouter } from 'react-router-dom'
import { restCountriesPath } from '../pages/advanced/rest-countries/route'
import { advancedPath, advancedRoutes } from '../pages/advanced/routes'

const defaultPath = `${advancedPath}/${restCountriesPath}`

const router = createHashRouter([
  {
    path: '/',
    children: [advancedRoutes]
  },
  {
    path: '*',
    children: [
      {
        index: true,
        element: <Navigate to={defaultPath} replace={true} />
      }
    ]
  }
])

export default router

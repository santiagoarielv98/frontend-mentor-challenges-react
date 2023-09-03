import { Navigate, createBrowserRouter } from 'react-router-dom'
import { advancedPath, advancedRoutes } from '../pages/advanced/routes'
import { restCountriesPath } from '../pages/advanced/rest-countries/route'

const defaultPath = `${advancedPath}/${restCountriesPath}`

const router = createBrowserRouter(
  [
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
  ],
  {
    basename: import.meta.env.DEV ? '/' : '/frontend-mentor-challenges-react/'
  }
)

export default router

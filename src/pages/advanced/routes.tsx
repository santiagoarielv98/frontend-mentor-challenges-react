import type { RouteObject } from 'react-router-dom'
import restCountriesRoute from './rest-countries/route'

export const advancedPath = 'advanced'

export const advancedRoutes: RouteObject = {
  path: advancedPath,
  children: [restCountriesRoute]
}

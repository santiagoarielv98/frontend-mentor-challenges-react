import type { RouteObject } from 'react-router-dom'
import restCountriesRoute from './rest-countries/route'

export const advancedRoutes: RouteObject = {
  path: 'advanced',
  children: [restCountriesRoute]
}

import type { RouteObject } from 'react-router-dom'

export const restCountriesPath = 'rest-countries'

const restCountriesRoute: RouteObject = {
  path: restCountriesPath,
  lazy: async () => {
    const { default: Layout } = await import('./pages/Layout/Layout')
    return {
      element: <Layout />
    }
  },
  children: [
    {
      index: true,
      lazy: async () => {
        const { default: Home } = await import('./pages/Home/Home')
        return {
          element: <Home />
        }
      }
    },
    {
      path: ':countryName',
      lazy: async () => {
        const { default: Detail } = await import('./pages/Detail/Detail')
        return {
          element: <Detail />
        }
      }
    }
  ]
}

export default restCountriesRoute

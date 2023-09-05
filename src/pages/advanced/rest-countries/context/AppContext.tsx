import React from 'react'

import { initialCountries, initialTheme } from '../utils'

import { Theme } from '../constants/app'
import { type Country } from '../types/api'

export interface AppContextProps {
  theme: Theme
  countries: Country[]
  toggleTheme: () => void
}

export const AppContext = React.createContext<AppContextProps>({
  theme: Theme.Light,
  countries: [],
  toggleTheme: () => {}
})

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [countries, setCountries] = React.useState<Country[]>(initialCountries)
  const [theme, setTheme] = React.useState<Theme>(initialTheme)

  const toggleTheme = React.useCallback((): void => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === Theme.Light ? Theme.Dark : Theme.Light
      localStorage.theme = newTheme
      return newTheme
    })
  }, [])

  React.useEffect(() => {
    if (countries.length === 0) {
      fetch('https://restcountries.com/v3.1/all')
        .then(async (response) => await response.json())
        .then((data) => {
          localStorage.setItem('countries', JSON.stringify(data))
          setCountries(data)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }, [countries])

  React.useEffect(() => {
    document.documentElement.classList.toggle(Theme.Dark, theme === Theme.Dark)
  }, [theme])

  const value = React.useMemo(
    () => ({
      theme,
      countries,
      toggleTheme
    }),
    [theme, countries, toggleTheme]
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

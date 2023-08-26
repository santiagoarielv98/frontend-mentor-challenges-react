import React from 'react'
import { useParams } from 'react-router-dom'

export enum Theme {
  Light = 'light',
  Dark = 'dark'
}

export interface AppContextProps {
  country: Country | null
  theme: Theme
  countries: Country[]
  toggleTheme: () => void
}

export const AppContext = React.createContext<AppContextProps>({
  theme: Theme.Light,
  countries: [],
  country: null,
  toggleTheme: () => {}
})

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [countries, setCountries] = React.useState<Country[]>(initialCountries)
  const [theme, setTheme] = React.useState<Theme>(initialTheme)
  const [country, setCountry] = React.useState<Country | null>(initialCountry)

  const { countryName } = useParams<{ countryName: string }>()

  const toggleTheme = React.useCallback((): void => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === Theme.Light ? Theme.Dark : Theme.Light
      localStorage.theme = newTheme
      return newTheme
    })
  }, [])

  React.useEffect(() => {
    if (countryName !== undefined && countryName !== country?.name.common) {
      const country = countries.find((country) => country.name.common === countryName) ?? null
      setCountry(country)
      localStorage.setItem('country', JSON.stringify(country))
    }
  }, [countryName, country, countries])

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
      toggleTheme,
      theme,
      countries,
      country
    }),
    [toggleTheme, theme, countries, country]
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

const initialTheme = (): Theme => {
  const isDark = localStorage.theme === Theme.Dark
  const matches = !('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches
  if (isDark || matches) {
    return Theme.Dark
  } else {
    return Theme.Light
  }
}

const initialCountry = (): Country | null => {
  const data = localStorage.getItem('country')
  const parsedData = JSON.parse(data ?? 'null')
  return parsedData
}

const initialCountries = (): Country[] => {
  const data = localStorage.getItem('countries')
  const parsedData = JSON.parse(data ?? '[]')
  return Array.isArray(parsedData) ? parsedData : []
}

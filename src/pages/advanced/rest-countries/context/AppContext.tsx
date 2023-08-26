import React from 'react'

interface Country {
  name: {
    common: string
  }
}

enum Theme {
  Light = 'light',
  Dark = 'dark'
}

export interface AppContextProps {
  theme: Theme
  countries: Country[]
  toggleTheme?: () => void
}

export const AppContext = React.createContext<AppContextProps>({
  theme: Theme.Light,
  countries: []
})

const initialTheme = (): Theme => {
  const isDark = localStorage.theme === Theme.Dark
  const matches = !('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches
  if (isDark || matches) {
    return Theme.Dark
  } else {
    return Theme.Light
  }
}

const initialCountries = (): Country[] => {
  const data = localStorage.getItem('countries')
  const parsedData = JSON.parse(data ?? '[]')
  return Array.isArray(parsedData) ? parsedData : ([] as Country[])
}

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [countries, setCountries] = React.useState<Country[]>(initialCountries)
  const [theme, setTheme] = React.useState<Theme>(initialTheme)

  const toggleTheme = (): void => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === Theme.Light ? Theme.Dark : Theme.Light
      localStorage.theme = newTheme
      return newTheme
    })
  }

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
  }, [])

  return (
    <AppContext.Provider
      value={{
        toggleTheme,
        theme,
        countries
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

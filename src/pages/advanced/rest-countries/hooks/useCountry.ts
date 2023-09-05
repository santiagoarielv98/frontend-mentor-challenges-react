import React from 'react'
import { useParams } from 'react-router-dom'
import type { Country } from '../types/api'
import useAppContext from './useAppContext'

const useCountry = (): Country | null => {
  const { countries } = useAppContext()
  const [country, setCountry] = React.useState<Country | null>(null)
  const { countryName } = useParams<{ countryName: string }>()

  React.useEffect(() => {
    if (countryName !== undefined && countryName !== country?.name.common) {
      const country = countries.find((country) => country.name.common === countryName) ?? null
      setCountry(country)
    }
  }, [countryName, country, countries])

  return country
}

export default useCountry

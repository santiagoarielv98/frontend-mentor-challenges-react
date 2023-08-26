import React from 'react'
import { useParams } from 'react-router-dom'
import useAppContext from './useAppContext'

export const useCountry = (): any => {
  const { countries } = useAppContext()
  const [country, setCountry] = React.useState<any>(null)
  const { name } = useParams<{ name: string }>()

  React.useEffect(() => {
    const country = countries.find((country) => country.name.common === name)
    setCountry(country)
  }, [countries, name])

  return { country }
}

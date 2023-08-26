import React from 'react'
import { useCountry } from '../../hooks/useCountry'

const Detail: React.FC = () => {
  const country = useCountry()

  if (country === null) {
    return <div>Country not found</div>
  }

  return <div>{country.name.common}</div>
}

export default Detail

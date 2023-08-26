import React from 'react'
import useAppContext from '../../hooks/useAppContext'

const Detail: React.FC = () => {
  const { country } = useAppContext()

  if (country === null) {
    return <div>Country not found</div>
  }

  return <div>{country.name.common}</div>
}

export default Detail

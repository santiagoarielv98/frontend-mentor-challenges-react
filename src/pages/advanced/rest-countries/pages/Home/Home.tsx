import React from 'react'
import useAppContext from '../../hooks/useAppContext'

const Home: React.FC = () => {
  const { countries } = useAppContext()

  return (
    <div>
      <h1>Home</h1>
      <div>
        {countries.map((country) => (
          <div key={country.name.common}>{country.name.common}</div>
        ))}
      </div>
    </div>
  )
}

export default Home

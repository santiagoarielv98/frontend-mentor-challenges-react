import React from 'react'
import useAppContext from '../../hooks/useAppContext'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  const { countries } = useAppContext()

  return (
    <div>
      <h1>Home</h1>
      <div>
        {countries.map((country) => (
          <Link to={country.name.common} key={country.name.common}>
            {country.name.common}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home

import React from 'react'
import useAppContext from '../../hooks/useAppContext'
import { Link } from 'react-router-dom'
import MainCard from '../../components/card/MainCard'

const Home: React.FC = () => {
  const { countries } = useAppContext()

  return (
    <div>
      <h1>Home</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
        }}
      >
        {countries.map((country) => (
          <Link to={country.name.common} key={country.name.common}>
            <MainCard country={country} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home

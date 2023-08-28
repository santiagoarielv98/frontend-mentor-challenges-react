import React from 'react'
import { Link } from 'react-router-dom'
import MainCard from '../../components/card/MainCard'
import useAppContext from '../../hooks/useAppContext'

import './Home.css'

const Home: React.FC = () => {
  const { countries } = useAppContext()
  const [search, setSearch] = React.useState<string>('')
  const [region, setRegion] = React.useState<string>('')

  return (
    <div className="home">
      <form>
        <input
          type="text"
          placeholder="Search for a country..."
          value={search}
          onChange={(event) => {
            setSearch(event.target.value)
          }}
        />
        <select
          value={region}
          onChange={(event) => {
            setRegion(event.target.value)
          }}
        >
          <option hidden value="">
            Filter by Region
          </option>
          <option value="">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </form>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem'
        }}
      >
        {countries.slice(0, 20).map((country) => (
          <Link key={country.name.common} to={country.name.common}>
            <MainCard country={country} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home

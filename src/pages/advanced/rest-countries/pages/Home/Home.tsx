import React from 'react'
import { Link } from 'react-router-dom'

import useAppContext from '../../hooks/useAppContext'

import MainCard from '../../components/card/MainCard'
import Select from '../../components/inputs/Select'
import Search from '../../components/inputs/Search'

const Home: React.FC = () => {
  const { countries } = useAppContext()
  const [search, setSearch] = React.useState<string>('')
  const [region, setRegion] = React.useState<string>('')

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value)
  }

  const handleRegion = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setRegion(e.target.value)
  }

  return (
    <div>
      <form className="flex justify-between gap-4 flex-wrap">
        <Search value={search} onChange={handleSearch} />
        <Select value={region} onChange={handleRegion} />
      </form>
      <div className="mt-12 grid gap-[4.625rem] grid-cols-[repeat(auto-fit,_minmax(16.5rem,_1fr))]">
        {countries.map((country) => (
          <Link key={country.name.common} to={country.name.common}>
            <MainCard country={country} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home

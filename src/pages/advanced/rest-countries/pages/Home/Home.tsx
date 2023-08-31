import React from 'react'
import { Link } from 'react-router-dom'

import useAppContext from '../../hooks/useAppContext'

import MainCard from '../../components/card/MainCard'
import Select from '../../components/inputs/Select'
import Search from '../../components/inputs/Search'
import Option from '../../components/inputs/Option'

const Home: React.FC = () => {
  const { countries } = useAppContext()
  const [search, setSearch] = React.useState<string>('')
  const [region, setRegion] = React.useState<string>('')

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value)
  }

  const handleRegion = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setRegion(e.target.value)
  }

  return (
    <div>
      <form className="flex justify-between gap-4 flex-wrap">
        <Search value={search} onChange={handleSearch} />
        <Select value={region} onChange={handleRegion} id="filter" defaultValue={'America'}>
          <Option hidden value="">
            Filter by Region
          </Option>
          <Option value="">All</Option>
          <Option value="Africa">Africa</Option>
          <Option value="America">America</Option>
          <Option value="Asia">Asia</Option>
          <Option value="Europe">Europe</Option>
          <Option value="Oceania">Oceania</Option>
        </Select>
      </form>
      <div className="mt-12 grid gap-[4.625rem] grid-cols-[repeat(auto-fit,_minmax(16.5rem,_1fr))]">
        {countries.slice(0, 10).map((country) => (
          <Link key={country.name.common} to={country.name.common} className="rounded-md mx-auto">
            <MainCard country={country} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home

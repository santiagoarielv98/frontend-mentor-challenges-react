import React from 'react'
import useAppContext from '../../hooks/useAppContext'
import { Link } from 'react-router-dom'
import MainCard from '../../components/card/MainCard'

import AutoSizer from 'react-virtualized-auto-sizer'
import { FixedSizeGrid as Grid } from 'react-window'

const Home: React.FC = () => {
  const { countries } = useAppContext()
  const [search, setSearch] = React.useState<string>('')
  const [region, setRegion] = React.useState<string>('')

  const filteredCountries = React.useMemo(() => {
    return countries.filter((country) => {
      const countryName = country.name.common.toLowerCase()
      const countryRegion = country.region.toLowerCase()
      return countryName.includes(search.toLowerCase()) && countryRegion.includes(region.toLowerCase())
    })
  }, [countries, region, search])

  return (
    <div
      style={{
        flex: 1,
        padding: '1px',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <form>
        <input
          onChange={(event) => {
            setSearch(event.target.value)
          }}
          type="text"
          placeholder="Search for a country..."
        />
        <select
          onChange={(event) => {
            setRegion(event.target.value)
          }}
        >
          <option hidden value="">
            Filter by Region
          </option>
          <option value="">All</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </form>
      <div
        style={{
          flex: 1
        }}
      >
        <AutoSizer>
          {({ height, width }) => (
            <Grid
              height={height}
              width={width}
              columnCount={4}
              columnWidth={350}
              rowCount={Math.ceil(filteredCountries.length / 4)}
              rowHeight={500}
            >
              {({ columnIndex, rowIndex, style }) => {
                const index = rowIndex * 4 + columnIndex
                const country = filteredCountries[index]

                return (
                  <div style={style}>
                    {country !== undefined && (
                      <Link to={country.name.common} key={country.name.common}>
                        <MainCard country={country} />
                      </Link>
                    )}
                  </div>
                )
              }}
            </Grid>
          )}
        </AutoSizer>
      </div>
    </div>
  )
}

export default Home

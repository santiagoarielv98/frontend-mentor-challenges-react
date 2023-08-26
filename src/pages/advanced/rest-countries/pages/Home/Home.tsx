import React from 'react'
import useAppContext from '../../hooks/useAppContext'
import { Link } from 'react-router-dom'
import MainCard from '../../components/card/MainCard'

import AutoSizer from 'react-virtualized-auto-sizer'
import { FixedSizeGrid as Grid } from 'react-window'

const Home: React.FC = () => {
  const { countries } = useAppContext()

  return (
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
            rowCount={Math.ceil(countries.length / 4)}
            rowHeight={500}
          >
            {({ columnIndex, rowIndex, style }) => {
              const index = rowIndex * 4 + columnIndex
              const country = countries[index]

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
  )
}

export default Home

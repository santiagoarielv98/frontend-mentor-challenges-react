import React from 'react'
import useAppContext from '../../hooks/useAppContext'
import MainHero from '../../components/hero/MainHero'
import { useNavigate } from 'react-router-dom'
import { advancedPath } from '../../../routes'
import { restCountriesPath } from '../../route'

const Detail: React.FC = () => {
  const { country } = useAppContext()
  const navigate = useNavigate()

  const countryDetail = country !== null ? <MainHero country={country} /> : <h1>Country not found</h1>

  return (
    <div>
      <button
        onClick={() => {
          navigate(`/${advancedPath}/${restCountriesPath}`)
        }}
      >
        back
      </button>
      <h1>Detail</h1>
      {countryDetail}
    </div>
  )
}

export default Detail

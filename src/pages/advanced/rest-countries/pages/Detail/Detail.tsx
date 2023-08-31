import React from 'react'
import { useNavigate } from 'react-router-dom'

import useAppContext from '../../hooks/useAppContext'

import MainHero from '../../components/hero/MainHero'
import ArrowLeft from '../../components/icons/ArrowLeft'

import { advancedPath } from '../../../routes'
import { restCountriesPath } from '../../route'

const Detail: React.FC = () => {
  const { country } = useAppContext()
  const navigate = useNavigate()

  const countryDetail = country !== null ? <MainHero country={country} /> : <h1>Loading...</h1>

  const handleBack = (): void => {
    navigate(`/${advancedPath}/${restCountriesPath}`)
  }

  return (
    <>
      <button
        onClick={handleBack}
        className="inline-flex w-[8.5rem] justify-center gap-2 px-4 py-2 pr-6 bg-white rounded-md shadow-md cursor-pointer hover:shadow-lg transition-shadow focus:ring-2 focus:ring-gray-300 dark:bg-gray-800"
      >
        <ArrowLeft className="w-6 h-6" />
        <span>Back</span>
      </button>
      <div className="mt-12">{countryDetail}</div>
    </>
  )
}

export default Detail

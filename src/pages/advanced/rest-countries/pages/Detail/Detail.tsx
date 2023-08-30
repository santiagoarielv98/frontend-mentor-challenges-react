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

  const handleBack = (): void => {
    navigate(`/${advancedPath}/${restCountriesPath}`)
  }

  return (
    <>
      <button
        onClick={handleBack}
        className="inline-flex w-[8.5rem] justify-center gap-2 px-4 py-2 pr-6 bg-white rounded-md shadow-md cursor-pointer hover:shadow-lg transition-shadow focus:ring-2 focus:ring-gray-300 dark:bg-gray-800"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
          <path
            fillRule="evenodd"
            d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z"
            clipRule="evenodd"
          />
        </svg>
        Back
      </button>
      {countryDetail}
    </>
  )
}

export default Detail

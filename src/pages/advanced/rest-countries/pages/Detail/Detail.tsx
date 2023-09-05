import React from 'react'
import { Link } from 'react-router-dom'

import MainHero from '../../components/hero/MainHero'
import ArrowLeft from '../../components/icons/ArrowLeft'
import useCountry from '../../hooks/useCountry'

const Detail: React.FC = () => {
  const country = useCountry()

  const countryDetail = country !== null ? <MainHero country={country} /> : <h1>Loading...</h1>

  return (
    <>
      <Link
        to=".."
        relative="path"
        className="inline-flex w-[8.5rem] justify-center gap-2 px-4 py-2 pr-6 bg-white rounded-md shadow-md cursor-pointer hover:shadow-lg transition-shadow focus:ring-2 focus:ring-gray-300 dark:bg-gray-800"
      >
        <ArrowLeft className="w-6 h-6" />
        <span>Back</span>
      </Link>
      <div className="mt-12">{countryDetail}</div>
    </>
  )
}

export default Detail

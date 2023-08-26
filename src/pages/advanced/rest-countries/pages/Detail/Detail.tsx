import React from 'react'
import useAppContext from '../../hooks/useAppContext'
import MainHero from '../../components/hero/MainHero'

const Detail: React.FC = () => {
  const { country } = useAppContext()

  if (country === null) {
    return <div>Country not found</div>
  }

  return (
    <div>
      <MainHero country={country} />
    </div>
  )
}

export default Detail

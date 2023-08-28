import React from 'react'

import './MainCard.css'
interface MainCardProps {
  country: Country
}

const MainCard: React.FC<MainCardProps> = ({ country }) => {
  const { name, flags, population, region, capital } = country

  return (
    <div className="main-card">
      <img src={flags.svg} alt={flags.alt} width={300} height={200} loading="lazy" />
      <div className="main-card__content">
        <h2>{name.common}</h2>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
      </div>
    </div>
  )
}

export default MainCard

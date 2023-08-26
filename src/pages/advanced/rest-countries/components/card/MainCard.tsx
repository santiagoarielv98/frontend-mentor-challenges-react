import React from 'react'

interface MainCardProps {
  country: Country
}

const MainCard: React.FC<MainCardProps> = ({ country }) => {
  const { name, flags, population, region, capital } = country

  return (
    <div>
      <img src={flags.svg} alt={flags.alt} width={300} height={200} loading="lazy" />
      <h2>{name.common}</h2>
      <p>Population: {population}</p>
      <p>Region: {region}</p>
      <p>Capital: {capital}</p>
    </div>
  )
}

export default MainCard

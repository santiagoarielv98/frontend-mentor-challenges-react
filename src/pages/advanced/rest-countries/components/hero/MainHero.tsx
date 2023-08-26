import React from 'react'

interface MainHeroProps {
  country: Country
}

const MainHero: React.FC<MainHeroProps> = ({ country }) => {
  const { name, flags, population, region, capital } = country
  return (
    <div>
      <img src={flags.svg} alt={flags.alt} width={300} />
      <h2>{name.common}</h2>
      <p>Population: {population}</p>
      <p>Region: {region}</p>
      <p>Capital: {capital}</p>
    </div>
  )
}

export default MainHero

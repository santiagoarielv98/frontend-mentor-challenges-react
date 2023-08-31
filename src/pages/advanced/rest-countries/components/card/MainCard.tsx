import React from 'react'

import { type Country } from '../../types/api'

interface MainCardProps {
  country: Country
}

const MainCard: React.FC<MainCardProps> = ({ country }) => {
  const { name, flags, population, region, capital } = country

  return (
    <div className="w-[16.5rem] flex flex-col h-[21rem] shadow-md bg-white rounded-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow dark:bg-gray-800 dark:hover:shadow-xl">
      <img
        className="w-full h-40 object-cover"
        src={flags.svg}
        alt={flags.alt}
        width="264"
        height="160"
        loading="lazy"
      />
      <div className="p-6 flex-1">
        <h2 className="font-bold text-lg">{name.common}</h2>
        <ul className="mt-3 text-sm leading-relaxed">
          <li>
            <p>
              <b className="tracking-tight">Population: </b>
              <span>{population}</span>
            </p>
          </li>
          <li>
            <p>
              <b className="tracking-tight">Region: </b>
              <span>{region}</span>
            </p>
          </li>
          <li>
            <p>
              <b className="tracking-tight">Capital: </b>
              <span>{capital}</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MainCard

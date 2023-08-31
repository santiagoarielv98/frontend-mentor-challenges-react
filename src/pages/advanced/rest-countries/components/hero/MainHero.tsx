import React from 'react'

import { type Country } from '../../types/api'

interface MainDetailProps {
  country: Country
}

const MainHero: React.FC<MainDetailProps> = ({ country }) => {
  const nativeName = Object.values(country.name.nativeName)[0].common ?? 'N/A'
  const languages = Object.values(country.languages).join(', ')
  const currencies = Object.values(country.currencies)
    .map((currency) => currency.name)
    .join(', ')

  return (
    <div className="flex justify-between gap-12 flex-wrap max-lg:flex-col">
      <div className="flex-1 max-w-[35rem] mx-auto">
        <img width={560} height={400} src={country.flags.svg} alt={country.flags.alt} className="aspect-[7/5] w-full" />
      </div>
      <div className="flex-1 max-w-[37.5rem] mx-auto w-full">
        <div className="flex flex-col justify-center gap-8 h-full w-full">
          <h1 className="text-3xl text-[32px] font-bold leading-tight tracking-tight">{country.name.common}</h1>
          <div className="flex justify-between flex-wrap gap-10">
            <ul className="flex flex-col gap-2">
              <li>
                <p>
                  <b className="tracking-tight">Native Name:</b>
                  <span> {nativeName} </span>
                </p>
              </li>
              <li>
                <p>
                  <b className="tracking-tight">Population:</b>
                  <span> {country.population} </span>
                </p>
              </li>
              <li>
                <p>
                  <b className="tracking-tight">Region:</b>
                  <span> {country.region} </span>
                </p>
              </li>
              <li>
                <p>
                  <b className="tracking-tight">Sub Region:</b>
                  <span> {country.subregion} </span>
                </p>
              </li>
              <li>
                <p>
                  <b className="tracking-tight">Capital:</b>
                  <span> {country.capital?.join(', ')} </span>
                </p>
              </li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li>
                <p>
                  <b className="tracking-tight">Top Level Domain:</b>
                  <span> {country.tld?.join(', ')} </span>
                </p>
              </li>
              <li>
                <p>
                  <b className="tracking-tight">Currencies:</b>
                  <span> {currencies} </span>
                </p>
              </li>
              <li>
                <p>
                  <b className="tracking-tight">Languages:</b>
                  <span> {languages} </span>
                </p>
              </li>
            </ul>
          </div>
          <div className="flex items-center flex-wrap gap-[9px] mt-9">
            <b className="tracking-tight mr-2">Border Countries: </b>
            {country.borders?.map((border) => (
              <span key={border} className="w-24 px-2 py-1 text-center font-semibold text-sm border rounded-md">
                {border}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainHero

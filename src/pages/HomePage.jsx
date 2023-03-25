import axios from 'axios'
import React from 'react'
import { ALL_COUNTRIES } from '../config'
import { useState, useEffect } from 'react'
import { Card } from '../components/Card'
import {List} from "../components/List"
import { Controls } from '../components/Controls'
import { useNavigate } from "react-router-dom";


export const HomePage = ({ countries, setCountries }) => {

  const [countryFilter, setFilterCountry] = useState(countries)

  const navigate = useNavigate()

  const handleSearch = (search, region) => {
    let data = [...countries]

    if (region) {
      data = data.filter(c => c.region.includes(region))
    }

    if (search) {
      data = data.filter(c => c.name.common.toLowerCase().includes(search.toLowerCase()))
    }

    setFilterCountry(data)
  }

  useEffect(() => {
    if (!countries.length) {
      axios.get(ALL_COUNTRIES).then(({ data }) => {
        setCountries(data)
      })
    }
  }, [])

  useEffect(() => {
    handleSearch()
  }, [countries])




  return (
    <>
      <Controls onSearch={handleSearch}/>
      <List>
        {countryFilter.map((country, index) => {
          const countryInfo = {
            img: country.flags.png,
            name: country.name.common,
            info: [
              {
                title: "Population",
                description: country.population.toLocaleString()
              },
              {
                title: "Region",
                description: country.region
              },
              {
                title: "Capital",
                description: country.capital
              },
            ]
          }

          return <Card key={index} {...countryInfo} onClick={() => navigate(`/country/${country.name.common}`)} />
        })}
      </List>
    </>
  )
}

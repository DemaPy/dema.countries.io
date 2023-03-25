import { Search } from './Search'
import { useState, useEffect } from 'react'
import { CustomSelect } from './CustomSelect'
import styled from 'styled-components'


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`


const options = [
  {
    value: "Africa",
    label: "Africa"
  },
  {
    value: "Americas",
    label: "Americas"
  },
  {
    value: "Asia",
    label: "Asia"
  },
  {
    value: "Europa",
    label: "Europa"
  },
  {
    value: "Oceania",
    label: "Oceania"
  },
]



export const Controls = ({onSearch}) => {

  const [search, setSearch] = useState("")
  const [region, setRegion] = useState("" )

  useEffect(() => {
    const regionValue = region?.value || ""
    onSearch(search, regionValue)
  }, [search, region])

  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect value={region} options={options} placeholder="Filter by region" onChange={setRegion} isClearable isSearchable={false} />
    </Wrapper>
  )
}

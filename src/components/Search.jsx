import styled from 'styled-components'
import { IoSearch } from 'react-icons/io5'




const InputContainer = styled.label`
    backgrund-color: var(--colors-ui-base);
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    margin-bottom: 1rem;
    box-shadow: var(--shadow);
    border-radius: var(--radii);

    @media(min-width: 767px) {
        margin-bottom: 0;
        width: 280px;

    }
`

const Input = styled.input.attrs({
    type: "search",
    placeholder: "Search for a country..."
})`
    border: none;
    outline: none;
    background-color: var(--colors-bg);
    color: var(--color-text);
    backgrund-color: var(--colors-ui-base);
`






import React from 'react'

export const Search = ({search, setSearch}) => {
  return (
    <InputContainer>
        <IoSearch />
        <Input onChange={e => setSearch(e.target.value)} value={search} />
    </InputContainer>
  )
}

import styled from "styled-components";
import axios from "axios";
import { filterByCode } from "../config";
import { useEffect, useState } from "react";
import SimpleMap from "./SimpleMap";


const Wrapper = styled.section`
    margin: 3rem 0;
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    gap: 2rem;

    @media(min-width: 767px) {
        grid-template-columns: minmax(100px, 400px) 1fr;
        align-items: center;
        gap: 5rem;
    }

    @media(min-width: 1024px) {
        grid-template-columns: minmax(400px, 600px) 1fr;
    }
`

const InfoImage = styled.img`
    padding-bottom: 2rem;

    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
`

const InfoTitle = styled.h1`
    font-weight: var(--fw-normal);
    font-size: var(--fs-md);
`

const ListGroup = styled.div`
    display: flex;
    flex-direction: column;

    gap: 2rem;

    @media(min-width: 1024px) {
        flex-direction: row;
        gap: 4rem;
    }
`

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;

`

const ListItem = styled.li`
    line-height: 1.8;

    & > b {
        font-weight: var(--fw-bold);
    }
`

const Meta = styled.div`
    margin-top: 3rem;
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    align-items: flex-start;

    & > b {
        font-weight: var(--fw-bold);
    }

    @media(min-width: 767px) {
        flex-direction: row;
        align-items: center;
    }

`
const TagGroup = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
`

const Tag = styled.span`
padding: .2rem 1.8rem;
background-color: var(--colors-bg);
box-shadow: var(--shadow);
border-radius: var(--radii);

cursor: pointer;
`




export const Info = (props) => {
    const [neighbors, setNeighbors] = useState([])
    const [coords, setCoords] = useState([])
    const { name, flags, capital, population, region, subregion, tld, currencies, languages, latlng, borders = [], push } = props
    console.log(props)
    useEffect(() => {
        if (borders.length) {
            axios.get(filterByCode(borders)).then(({ data }) => {
                setNeighbors(data.map(item => item.name.common))
            })
        }
    }, [borders])

    useEffect(() => {
        setCoords(latlng)
    }, [latlng])


    return (
        <>
            <Wrapper>
                <InfoImage src={flags.png} alt={name.common} />

                <div>
                    <InfoTitle>
                        {name.common}
                    </InfoTitle>

                    <ListGroup>
                        <List>
                            <ListItem>
                                <b>Native name:</b> {name.official}
                            </ListItem>
                            <ListItem>
                                <b>Population:</b> {population}
                            </ListItem>
                            <ListItem>
                                <b>Region:</b> {region}
                            </ListItem>
                            <ListItem>
                                <b>Sub region:</b> {subregion}
                            </ListItem>
                            <ListItem>
                                <b>Capital:</b> {capital.map(c => (<span key={c}>{c}</span>))}
                            </ListItem>
                        </List>
                        <List>
                            {tld && (
                                <ListItem>
                                    <b>Top Level Domain:</b> {tld.map(d => (<span key={d}>{d}</span>))}
                                </ListItem>
                            )}
                            <ListItem>
                                <b>Currency:</b> {Object.values(currencies).map(c => (<span key={c.name}>{c.name}</span>))}
                            </ListItem>
                            <ListItem>
                                <b>Languages:</b> {Object.values(languages).map(l => (<span key={l}>{l}</span>))}
                            </ListItem>
                        </List>
                    </ListGroup>

                    <Meta>
                        <b>Border Countries</b>
                        {borders.length ? (
                            <TagGroup>
                                {neighbors.map(b => (<Tag onClick={() => push(`/country/${b}`)} key={b}>{b} </Tag>))}
                            </TagGroup>
                        ) : (
                            <span>There is no border countries.</span>
                        )}
                    </Meta>
                </div>
            </Wrapper>
            {coords.length && (<SimpleMap coords={coords} />)}
        </>
    )
}

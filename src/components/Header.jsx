import React, { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { Container } from './Container'
import { IoMoon, IoMoonOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'



const HeaderElement = styled.header`
    box-shadow: var(--shadow);
    background-color: var(--color-ui-base);
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
`

const Title = styled(Link).attrs({
    to: "/"
})`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    text-decoration: none;
    font-weight: bold;
`

const ModeSwitcher = styled.div`
color: var(--colors-text);
font-size: var(--fs-sm);
cursor: pointer;
font-weight: bold;
text-transform: capitalize;
`

export const Header = () => {

    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark": "light")
    }

    useEffect(() => {
        document.body.setAttribute("data-theme", theme)
    }, [theme])

    return (
        <HeaderElement>
            <Container>
                <Wrapper>
                    <Title>
                        Where is the world?
                    </Title>
                    <ModeSwitcher onClick={toggleTheme}>
                        {theme === "light" ? (
                            <IoMoonOutline style={{
                                display: 'inline'
                            }} size="14px" />
                        ): (
                            <IoMoon style={{
                                display: 'inline'
                            }} size="14px" />
                        )}
                        <span style={{
                            marginLeft: "0.75rem"
                        }}>{theme} theme</span>
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderElement>
    )
}

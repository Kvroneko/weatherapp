import React from 'react'
import styled from 'styled-components'
import Navigation from './components/Navigation';
import Logo from './components/Logo';
import Authentication from './components/Authentication';

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`


const Header = () => {
    return (
        <Container>
            <Logo />
            <Navigation />
            <Authentication />
        </Container>
    )
}

export default Header

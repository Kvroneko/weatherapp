import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
    display: flex;
`

const Item = styled.div`
    margin: 0 25px;
`


const Navigation = () => {
    return (
        <Nav>
            <Item>
            <a href='/'>Home</a>
            </Item>
            <Item>
            <a href='/'>About</a>
            </Item>
        </Nav>
    )
}

export default Navigation

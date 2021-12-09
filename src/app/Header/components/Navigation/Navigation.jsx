import React from 'react'
import styled from 'styled-components'
import Link from '../../../../components/Link'

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
            <Link to='/'>Home</Link>
            </Item>
            <Item>
            <Link to='/about'>About</Link>
            </Item>
        </Nav>
    )
}

export default Navigation

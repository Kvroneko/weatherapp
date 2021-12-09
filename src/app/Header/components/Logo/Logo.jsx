import React from 'react'
import styled from 'styled-components'
import logo from './assets/pc566ppgi.png'

const Image = styled.img`
    height: 40px;
`

const Logo = () => {
    return (
        <Image alt="Logo" src={logo} />
    )
}

export default Logo

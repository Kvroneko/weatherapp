import React from 'react'
import styled from 'styled-components'
import Button from '../../../../components/Button'

const Wrapper = styled.div`
    display: inline-block;
    & ~ & {
        margin-left: 18px;
    }
`

const Authentication = () => {
    return (
        <div>
            <Wrapper>
                <Button variant="primary">
                    Log In
                </Button>
            </Wrapper>
            <Wrapper>
                <Button variant="secondary">
                    Sign Up
                </Button>
            </Wrapper>
        </div>
    )
}

export default Authentication

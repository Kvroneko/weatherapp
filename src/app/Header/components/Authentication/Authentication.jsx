import React from 'react'
import styled from 'styled-components'
import Button from '../../../../components/Button'
import Link from '../../../../components/Link'

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
                <Link to="/login">
                    <Button variant="primary">
                        Log In
                    </Button>
                </Link>
            </Wrapper>
            <Wrapper>
                <Link to="/signup">
                    <Button variant="secondary">
                        Sign Up
                    </Button>
                </Link>
            </Wrapper>
        </div>
    )
}

export default Authentication

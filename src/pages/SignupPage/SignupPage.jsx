import React from 'react'
import styled from 'styled-components'
// import { faBars, faTimes } from '@frotawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@frotawesome/react-fontawsome';
import Link from '../../components/Link'
import Button from '../../components/Button'
import banner from './assets/Banner.jpg'


const Container = styled.div`
    display: flex;
    flex: 1;
`

const Banner = styled.div`
    width: 560px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${banner});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 800px;
`

const Heading = styled.h1`
    color: white;
    font-size: 64px;
    font-weight: 800;
    position: relative;
        
    &::after {
        content: "";
        border-bottom: 15px solid white;
        position: absolute;
        left: 0;
        bottom: -20px;
        width: 50%;
    }
`

const SignupForm = styled.form`
    margin: 0 160px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const PasswordHintList = styled.ul`
    color: #838383;
`

const Conditions = styled.div`

`

const ConditionLink = styled(Link)`
    color: green;
`

const SignupButton = styled(Button)`
    display: block;
    margin-top: 125px;
    width: 100%;
`

const Title = styled.h2`
    font-size: 36px;
    font-weight: 800;
`

const Input = () => (
    <div>input</div>
)


const CheckBox = () => (
    <div>checkbox</div>
)

const SignupPage = () => {
    return (
        <Container>
            <Banner>
                <Heading>SIGN UP</Heading>
            </Banner>
            <SignupForm>
            <Title>Create Account</Title>
                <Input label="First Name" />
                <Input label="Last Name" />
                <Input label="Email" />
                <Input label="Password" />
                <PasswordHintList>
                    <li>Must be 8 characters at least</li>
                    <li>Must include a number/special character</li>
                </PasswordHintList>
                <Conditions>
                    <input type="checkbox" id="conditions" />
                    <label htmlFor='conditons'> I agree to the 
                    <ConditionLink to="/"> terms and conditions</ConditionLink>
                    </label>
                </Conditions>
                <SignupButton variant="primary" size="lg">SIGN UP</SignupButton>
            </SignupForm>
        </Container>
    )
}

export default SignupPage

import React, { useState } from 'react'
import styled from 'styled-components'
// import { faBars, faTimes } from '@frotawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@frotawesome/react-fontawsome';
import Link from '../../components/Link'
import Button from '../../components/Button'
import banner from './assets/Banner.jpg'
import Input from '../../components/Input'
import validator from 'validator'


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
    color: #69B1BB;
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

const CheckBox = () => (
    <div>checkbox</div>
)

const ErrorMessage = styled.div`
    margin-top: 8px;
    font-size: 16px;
    color: red;
`

const fields = [{
    key: 'firstName',
    id: 'firstName',
    label: 'First Name',
    validate: (firstName) => {
        if (!firstName) {
            return 'input first name'
        }
        return ''
    }
}, {
    key: 'lastName',
    id: 'lastName',
    label: 'Last Name',
    validate: (lastName) => {
        if (!lastName) {
            return 'input last name'
        }
        return ''
    }
}, {
    key: 'email',
    id: 'email',
    label: 'Email',
    validate: (email) => {
        if(!email) {
            return 'input email'
        }
        if(!validator.isEmail(email)) {
            return 'input vaild email'
        }
        return ''
    }
}, {
    key: 'password',
    id: 'password',
    label: 'Password',
    validate: (password) => {
        if(!password) {
            return 'input password'
        }
        if(!validator.isLength(password, { min:8 })) {
            return 'input vaild password'
        }
        return ''
    }
}]

const SignupPage = () => {

    const [data, setData] = useState({
        firstName: {value: '', touched: false},
        lastName: {value: '', touched: false},
        email: {value: '', touched: false},
        password: {value: '', touched: false},
    });

    const [submited, setSubmited] = useState(false);

    // const [touched, setTouched] = useState({
    //     firstName: false,
    //     lastName: false,
    //     email: false,
    //     password: false,
    // });

    const onDataChange = (key, value) => {
        setData((prevData) => ({...prevData, [key]: {value, touched: true}}))
        // setTouched ((prevTouched) => ({...prevTouched, [key]: true}))
    }

    return (
        <Container>
            <Banner>
                <Heading>SIGN UP</Heading>
            </Banner>
            <SignupForm
                onSubmit={(event) => {
                    setSubmited(true)
                    event.preventDefault()

                    const valid = Object.keys(data).map((key) => {
                        const {validate} = fields.find((field) => field.key === key)

                        const errorMessage = validate(data[key].value)

                        return !!errorMessage
                    })
                    .every((errorMessage) => !errorMessage)

                    if (!valid) {
                        return false
                    }
                }}
            >
            <Title>Create Account</Title>
            {fields.map(({key, id, label, validate}) => {
                const errorMessage = validate(data[key].value);
                const showErrorMessage = data[key].touched || submited
                const error = showErrorMessage && errorMessage

                return (
                    <>
                    <Input
                        key={key}
                        id={id}
                        label={label}
                        error={error}
                        onChange={(event) => onDataChange(key, event.target.value)} 
                    />
                    {error && (<ErrorMessage>{errorMessage}</ErrorMessage>)}
                </>
                )
            })}
                <PasswordHintList>
                    <li>Must be 8 characters at least</li>
                    <li>Must include a number/special character</li>
                </PasswordHintList>
                <Conditions>
                    <input type="checkbox" id="conditions" />
                    <label htmlFor="conditons">{' '}I agree to the
                    {' '} 
                    <ConditionLink to="/">terms and conditions</ConditionLink> 
                    </label>
                </Conditions>
                <SignupButton variant="primary" size="lg">SIGN UP</SignupButton>
            </SignupForm>
        </Container>
    )
}

export default SignupPage

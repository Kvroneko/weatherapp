import React, { useState } from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div`
    position: relative;
    border-bottom: 1px solid #D6D6D6;
    padding: 8px 0;
    margin-top: 35px;
`

const StyledInput = styled.input`
    border: 0;
    outline: 0;
    padding: 0;
    position: relative;
    background: none;
    font-size: 16px;
    color: #838383;
    width: 100%;

    ${({ error }) => error && css`
        color: red;
        border-color: red;
    `}

    &:focus {
        color: #69B1BB;
        border-color: #69B1BB;
    }
`

const Label = styled.label`
    position: absolute;
    left: 0;
    font-size: 16px;

    ${({ focused }) => focused && css`
        font-size: 12px;
        transform: translateY(-110%);
        color: #69B1BB;
    `}

    ${({ value }) => value && css`
        font-size: 12px;
        transform: translateY(-110%);
    `}

    ${({ error }) => error && css`
        color: red;
    `}


    transition: font-size 0.15s, translateY 0.15s;
`

const Input = ({
    label,
    id,
    onChange,
    error,
}) => {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState('')

    return (
        <Container>
            <Label 
                focused={focused} 
                htmlFor={id}
                value={value}   
                error={error} 
            >
                {label}
            </Label>
            <StyledInput 
                error={error}
                id={id} 
                value={value}
                onChange={(event) => {
                    setValue(event.target.value)
                    onChange(event);
            }}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            />
        </Container>
    )
}

export default Input

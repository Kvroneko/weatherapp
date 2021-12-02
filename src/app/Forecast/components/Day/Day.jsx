import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    
`

const Day = () => {
    return (
        <Container>
            <DayOfWeek></DayOfWeek>
            <WeatherImage></WeatherImage>
        </Container>
    )
}

export default Day

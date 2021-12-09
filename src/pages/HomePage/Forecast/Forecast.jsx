import React, {useEffect, useState}from 'react';
import styled from 'styled-components';
import Heading from '../../../components/Heading';
import Day from './components/Day/Day';
import getDailyForecast from '../../../apis/getDailyForecast';

const Days = styled.div`
    margin-top: 28px;
    display: flex;
`

const SYDNEY_CITY_ID = '6619279';

const Forecast = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getDailyForecast(SYDNEY_CITY_ID).then((response) => setData({
            cityName: response.data.name,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            weather: response.data.weather[0].main,
            wind: response.data.wind.speed,
        }))
    }, [])

    useEffect(() => {
        if (!data) {
            return;
        }

        setLoading(false);
    }, [data])

    return (
        <div>
            <Heading>Forecast</Heading>
            <Days>
                <Day dayOfWeek="MON" temperature="9" weather="rain"/>
                <Day dayOfWeek="MON" temperature="9" weather="rain"/>
                <Day dayOfWeek="MON" temperature="9" weather="rain"/>
                <Day dayOfWeek="MON" temperature="9" weather="rain"/>
                <Day dayOfWeek="MON" temperature="9" weather="rain"/>
            </Days>
        </div>
    )
}

export default Forecast;

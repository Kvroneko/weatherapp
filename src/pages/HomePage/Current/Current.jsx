import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Temperature from "../../../components/Temperature/Temperature";
import background from "./assets/background.jpeg";
import SubText from "./components/SubText/SubText";
import Metas from "./components/Metas/Metas";
import getWeather from "../../../apis/getWeather/getWeather";

const Container = styled.div`
    padding: 60px 80px;
    background-image: url(${background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    display: flex;
    position: relative;
`

const CurrentTemperature = styled.div`
    font-size: 5rem;
`

const Weather = styled.div`
    font-size: 1.5rem;
    text-align: center;
`

const CityName = styled.div`
    flex: 1;
    font-size: 2rem;
    text-align: right;
    margin-top: 15px;
`

const Strip = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    opacity: 0.3;
    height: 25px;
`

const Current = ({
    cityId,
}) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        getWeather(cityId).then((response) => setData({
            cityName: response.data.name,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            weather: response.data.weather[0].main,
            wind: response.data.wind.speed,
        }))
    }, [cityId])

    useEffect(() => {
        if (!data) {
            return;
        }

        setLoading(false);
    }, [data])

    return (
        <Container>
            {loading ? (
                <div>Loading...</div>
                ) : (
            <>
                <div>
                    <CurrentTemperature>
                        <Temperature>{data.temperature}</Temperature>
                    </CurrentTemperature>
                    <Weather>
                        <SubText>{data.weather}</SubText>
                    </Weather>
                    <Metas humidity={data.humidity} wind={data.wind} />
                </div>
                <CityName>{data.cityName}</CityName>
                <Strip />
            </>
            )}
        </Container>
    )
}

export default Current;

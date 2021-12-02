import React, {useState, useEffect} from "react";
import Heading from '../../components/Heading/Heading';
import City from './components/City/City';
import getWeathers from "../../apis/getWeathers/getWeathers";

const MELBOURNE_CITY_ID = '2158177';
const BRISBANE_CITY_ID = '2174003';
const PERTH_CITY_ID = '2063523';

const OtherCities = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getWeathers([MELBOURNE_CITY_ID, BRISBANE_CITY_ID, PERTH_CITY_ID].join())
        .then((response) => {
            setData(response.data.list.map((item) => ({
                id: item.id,
                cityName: item.name,
                temperature: item.main.temp,
                weather: item.weather[0].main,
            })))
        })
    }, [])

    useEffect(() => {
        if (!data) {
            return;
        }

    setLoading(false);
    }, [data])

    return (
        <div>
            <Heading>Other Cities</Heading>
            {loading ? (
                <div>Loading...</div>
            ) : data.map((item) => (
                <City 
                    key={item.id}
                    name={item.cityName}
                    temperature={item.temperature}
                    weather={item.weather} 
                />
            ))}
        </div>
    )
}

export default OtherCities;

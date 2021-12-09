import React, {useState, useEffect} from "react";
import Heading from '../../../components/Heading';
import City from './components/City/City';
import getWeathers from "../../../apis/getWeathers";

const SYDNEY_CITY_ID = 6619279;
const MELBOURNE_CITY_ID = 2158177;
const BRISBANE_CITY_ID = 2174003;
const PERTH_CITY_ID = 2063523;

const ids = [SYDNEY_CITY_ID, MELBOURNE_CITY_ID, BRISBANE_CITY_ID, PERTH_CITY_ID].join()

const OtherCities = ({
    onCityClick,
    cityId,
}) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getWeathers(ids)
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
            ) : data.map((item) => {
                if (item.id === cityId) {
                    return null;
                }

                return (
                    <City 
                    key={item.id}
                    onClick={() => onCityClick(item.id)}
                    name={item.cityName}
                    temperature={item.temperature}
                    weather={item.weather} 
                />
                )
            })}
        </div>
    )
}

export default OtherCities;

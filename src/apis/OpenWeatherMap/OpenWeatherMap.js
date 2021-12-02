import axios from "axios";

const APP_ID = '8136d099970543c599ede8e7f504dab2';

const OpenWeatherMap = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
    params: {
        appid: APP_ID,
        units: 'metric',
    }
})

export default OpenWeatherMap;
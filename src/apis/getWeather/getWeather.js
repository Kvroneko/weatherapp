import OpenWeatherMap from "../OpenWeatherMap/OpenWeatherMap";

const getWeather = (id) => (
    OpenWeatherMap.get('/weather', {
        params: {
            id,
        }
    })
)

export default getWeather;
import OpenWeatherMap from "../OpenWeatherMap/OpenWeatherMap";

const getWeathers = (id) => (
    OpenWeatherMap.get('/group', {
        params: {
            id,
        }
    })
)

export default getWeathers;
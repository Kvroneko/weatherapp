import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Temperature from "../../components/Temperature/Temperature";
import background from "./assets/background.jpeg";
import SubText from "./components/SubText/SubText";
import Metas from "./components/Metas/Metas";
import getWeather from "../../apis/getWeather/getWeather";

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

const SYDNEY_CITY_ID = '6619279';

const Current = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getWeather(SYDNEY_CITY_ID).then((response) => setData({
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

    // return (
    //     <Container>
    //         <div>
    //             <CurrentTemperature>
    //                 <Temperature>{temperature}</Temperature>
    //             </CurrentTemperature>
    //             <Weather>
    //                 <SubText>{weather}</SubText>
    //             </Weather>
    //             <Metas />
    //         </div>
    //         <CityName>{cityName}</CityName>
    //         <Strip />
    //     </Container>
    )
}

// class Current extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             loading: true,
//         }
//     }

//     componentDidMount() {
//         getWeather().then((response) => {
//             this.setState({
//                 loading: false,
//                 data: {
//                     cityName: response.data.name,
//                     temperature: response.data.main.temp,
//                     humidity: response.data.main.temp,
//                     weather: response.data.weather[0].main,
//                     wind: response.data.wind.speed,
//                 }
//             })
//         })
//     }

//     render() {
//         const { data, loading } = this.state;

//             return (
//         <Container>
//             {loading ? (
//                 <div>Loading...</div>
//             ) : (
//                 <React.Fragment>
//                                 <div>
//                 <CurrentTemperature>
//                     <Temperature>{data.temperature}</Temperature>
//                 </CurrentTemperature>
//                 <Weather>
//                     <SubText>{data.weather}</SubText>
//                 </Weather>
//                 <Metas humidity={data.humidity} wind={data.wind} />
//             </div>
//             <CityName>{data.cityName}</CityName>
//             <Strip />
//                 </React.Fragment>
//             )}

//         </Container>
//     )
//     }   
// }

export default Current;

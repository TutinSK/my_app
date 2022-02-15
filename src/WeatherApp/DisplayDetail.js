import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import WeatherChild from "./WeatherChild";
import Search from "./Search";

const DisplayDetail = (props) => {
    let { locationid } = useParams();
    const [weatherArr, setWeatherArr] = useState([]);
    const [locationArr, setLocationArr] = useState([]);
    const [date, setDate] = useState('');
    const [update, setUpdate] = useState('');
    let realDate = new Date();

    console.log(realDate);

    useEffect(async () => {
        let response = await axios({
            method: 'post',
            url: 'http://reacthook-hoidanit-backend.herokuapp.com/get-data-by-url',
            data: { url: `http://metaweather.com/api/location/${locationid}` }
        })

        setLocationArr(response.data);
        setWeatherArr(response.data.consolidated_weather);

        setDate(response.data.consolidated_weather[0].applicable_date);
        setUpdate(response.data.consolidated_weather[0].created)

        // console.log(response.data.consolidated_weather[0].created);
        console.log(response.data.consolidated_weather);
    }, []);


    return (
        <div className="display-detail">
            <Search />
            <div className="display-detail-container">
                <div className="location-preview">
                    <div className="display-detail-city">{locationArr.title}</div>
                    <div>{date}</div>
                    <div>{`Update: ${update.slice(11, 19)}`}</div>
                </div>
                {!!weatherArr.length && weatherArr.map((weather, index) => {
                    return <div key={index}>
                        <WeatherChild
                            applicableDate={weather.applicable_date}
                            weatherStateName={weather.weather_state_name}
                            weatherStateAbbr={weather.weather_state_abbr}
                            minTemp={weather.min_temp}
                            maxTemp={weather.max_temp}
                            windSpeed={weather.wind_speed}
                        />
                    </div>
                })}
            </div>
        </div>
    )
}

export default DisplayDetail;
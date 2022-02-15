import './Weather.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Search from './Search';
import WeatherHanoi from './WeatherHanoi';

const WeatherApp = () => {
    const [data, setData] = useState('');

    useEffect(async () => {
        let response = await axios({
            method: 'post',
            url: 'http://reacthook-hoidanit-backend.herokuapp.com/get-data-by-url',
            data: { url: 'http://metaweather.com/api/location/1236594' }
        })
        setData(response.data)
        console.log(response.data);
    }, [])
    return (
        <div className='weather-app-container'>
            <Search />
            <WeatherHanoi />
        </div>

    )
}

export default WeatherApp;


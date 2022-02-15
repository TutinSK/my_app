import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";


const Search = () => {
    const [keyword, setKeyword] = useState('');
    const [locationArr, setLocationArr] = useState([]);
    // const [location, setLocation] = useState('')
    let history = useHistory();

    const handleClickSearch = async () => {
        let responseSearch = await axios({
            method: 'post',
            url: 'http://reacthook-hoidanit-backend.herokuapp.com/get-data-by-url',
            data: { url: `http://metaweather.com//api/location/search/?query=${keyword}` }
        })

        if (responseSearch && responseSearch.data) {
            let locationObj = responseSearch.data

            if (Object.values(locationObj).length) {
                setLocationArr(Object.values(locationObj))
            } else {
                setLocationArr([])
            }
        }
    }
    function handleViewDetail(woeid) {
        history.push(`/weather-app/location/${woeid}`);
    }

    return (
        <div className="weather-app-search">
            <div>
                <input type='text'
                    placeholder="Enter a location..."
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <button onClick={() => handleClickSearch()}>Search</button>
            </div>
            <ul className="weather-app-search-result">
                {locationArr.length > 0 && locationArr.map((location) => {
                    return (<li className="location-response"
                        onClick={() => handleViewDetail(location.woeid)}
                        key={`location - ${location.title}`}>
                        {`${location.title}`}</li>)
                })}
            </ul>

        </div>

    )
}

export default Search;
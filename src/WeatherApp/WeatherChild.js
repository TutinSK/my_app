

const WeatherChild = (props) => {
    const { applicableDate, weatherStateName, weatherStateAbbr, minTemp, maxTemp, windSpeed } = props;
    return (
        <div className="weather-child">
            <div className="weather-child-date">{applicableDate}</div>
            <div className="weather-child-state">
                <img src={`https://www.metaweather.com/static/img/weather/${weatherStateAbbr}.svg`} />
                <span>{weatherStateName}</span>
            </div>
            <div className="weather-child-temp">
                <span className="min-tempt">{`Min: ${Math.round(minTemp)}`} °C</span>
                <span className="max-tempt">{`Max: ${Math.round(maxTemp)}`} °C</span>
            </div>
            <div className="wind-speed">{`Wind speed: ${Math.round(windSpeed)}mph`}</div>
        </div>
    )
}

export default WeatherChild;
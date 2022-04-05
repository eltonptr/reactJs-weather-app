import { useEffect, useState } from "react";
import { WeatherResponse } from "../../model/weather-response.interface";
import "./Weather-Card.css";

type WeatherProps = {
  message: WeatherResponse;
};

function WeatherCard(weatherProps: WeatherProps) {
  const [weather, setWeather] = useState<WeatherResponse>(weatherProps.message);

  useEffect(() => {
    setWeather(weatherProps.message);
  }, [weatherProps]);

  return (
    <div>
      <h1 className="weather-card-main">
        <span className="weather-card-sub-lane-details">
          Location: {weather.location.cityName}
        </span>
        <span className="weather-card-sub-lane-details">
          Longitude: {weather.location.log}, Latitude: {weather.location.lat}
        </span>
        <span className="weather-card-sub-lane-details">Dates</span>
        <div className="weather-card-align">
          {weather.daily.time.map((value, index) => {
            return (
              <span className="weather-card-sub-details" key={index}>
                {value}
              </span>
            );
          })}
        </div>
        <span className="weather-card-sub-lane-details">
          Minimum Temperature
        </span>
        <div className="weather-card-align">
          {weather.daily.temperature_2m_min.map((value, index) => {
            return (
              <span className="weather-card-sub-details" key={index}>
                {value}
              </span>
            );
          })}
        </div>
        <span className="weather-card-sub-lane-details">
          Maximum Temperature
        </span>
        <div className="weather-card-align">
          {weather.daily.temperature_2m_max.map((value, index) => {
            return (
              <span className="weather-card-sub-details" key={index}>
                {value}
              </span>
            );
          })}
        </div>
      </h1>
    </div>
  );
}

export default WeatherCard;

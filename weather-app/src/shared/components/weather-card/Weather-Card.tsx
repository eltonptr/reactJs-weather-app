import { useEffect, useState } from "react";
import { LocationDetail } from "../../model/location-detail.inteface";
import { WeatherResponse } from "../../model/weather-response.interface";
import "./Weather-Card.css";

type WeatherProps = {
  message: WeatherResponse;
  location: LocationDetail;
};

function WeatherCard(weatherProps: WeatherProps) {
  const [weather, setWeather] = useState<WeatherResponse>(weatherProps.message);
  const [location, setLocation] = useState<LocationDetail>(
    weatherProps.location
  );
  useEffect(() => {
    setWeather(weatherProps.message);
  }, [weatherProps]);

  useEffect(() => {
    setLocation(weatherProps.location);
  }, [weatherProps]);

  return (
    <div className="weather-card">
      <h1 className="weather-card-main">
        <span className="weather-card-sub-lane-details">
          Location: {location.cityName}
        </span>
        <span className="weather-card-sub-lane-details">
          Longitude: {location.log}, Latitude: {location.lat}
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

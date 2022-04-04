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
  useEffect(() => {
    setWeather(weatherProps.message);
  }, [weatherProps]);

  return (
    <div className="weather-card">
      <h1 className="weather-card-main">
        <span className="weather-card-details">
          This is a weather card with message {weather.longitude}
        </span>
        {weather.daily.time.map((value, index) => {
          return (
            <span className="weather-card-sub-details" key={index}>
              {value}
            </span>
          );
        })}
      </h1>
    </div>
  );
}

export default WeatherCard;

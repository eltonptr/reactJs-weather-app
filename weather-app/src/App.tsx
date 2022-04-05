import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import WeatherCard from "./shared/components/weather-card/Weather-Card";
import { LocationDetail } from "./shared/model/location-detail.inteface";
import { WeatherResponse } from "./shared/model/weather-response.interface";

let locations: LocationDetail[] = [
  {
    cityName: "Mumbai",
    lat: 19.075983,
    log: 72.877655,
    isSelected: true,
  },
  {
    cityName: "Kochi",
    lat: 9.931233,
    log: 76.267303,
    isSelected: true,
  },
  {
    cityName: "Delhi",
    lat: 28.70406,
    log: 77.102493,
    isSelected: true,
  },
  {
    cityName: "Kolkata",
    lat: 22.572645,
    log: 88.363892,
    isSelected: true,
  },
];

function App() {
  const [weatherDetail, setWeatherDetail] = useState<WeatherResponse[]>([]);
  useEffect(() => {
    locations.forEach((location) => {
      axios
        .get<WeatherResponse>("https://api.open-meteo.com/v1/forecast", {
          params: {
            latitude: location.lat,
            longitude: location.log,
            daily: "temperature_2m_max,temperature_2m_min",
            current_weather: true,
            timezone: "UTC",
          },
        })
        .then((response) => {
          response.data.location = location;
          setWeatherDetail((otherCities) => [...otherCities, response.data]);
        })
        .catch((error) => {
          console.log("API Failed");
        });
    });
  }, []);

  return (
    <div className="wc-container">
      {weatherDetail.map((weather, index) => {
        return (
          <div className="wc-items" key={index}>
            <WeatherCard message={weather} />
          </div>
        );
      })}
    </div>
  );
}

export default App;

import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import WeatherCard from "./shared/components/weather-card/Weather-Card";
import { LocationDetail } from "./shared/model/location-detail.inteface";
import { WeatherResponse } from "./shared/model/weather-response.interface";

// function App() {
//   return (
//     <div className="App-header">
//       <WeatherCard message="Hello my friend!" />
//       <WeatherCard message="Hello my friend!" />
//       <WeatherCard message="Hello my friend!" />
//     </div>
//   );
// }

// export default App;

/*
	• locations(lat,long)
		○ Kochi - (9.931233, 76.267303)
		○ Mumbai - (19.075983, 72.877655)
		○ Delhi - (28.704060, 77.102493)
Kolkata - (22.572645, 88.363892)


*/

let sampleWeatherResponse: WeatherResponse = {
  longitude: 76.25,
  daily: {
    time: [
      "2022-04-03",
      "2022-04-04",
      "2022-04-05",
      "2022-04-06",
      "2022-04-07",
      "2022-04-08",
      "2022-04-09",
    ],
    temperature_2m_max: [31.7, 31, 30.7, 31.5, 31.5, 31.3, 31],
    temperature_2m_min: [26.2, 26.1, 26.3, 26.1, 27, 26.6, 26.3],
  },
  current_weather: {
    time: new Date("2022-04-03T21:00"),
    temperature: 26.4,
  },
  latitude: 9.875,
};

let location: LocationDetail = {
  cityName: "Mumbai",
  lat: 19.075983,
  log: 72.877655,
  isSelected: true,
};

function App() {
  const [weatherDetail, setWeatherDetail] = useState<WeatherResponse | null>(
    null
  );
  useEffect(() => {
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
        setWeatherDetail(response.data);
      })
      .catch((error) => {
        console.log("API Failed");
      });
  }, [location]);

  return (
    <div className="app-header">
      <WeatherCard
        message={weatherDetail ?? sampleWeatherResponse}
        location={location}
      />
    </div>
  );
}

export default App;

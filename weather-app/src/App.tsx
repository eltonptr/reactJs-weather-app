import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import WeatherCard from "./shared/components/weather-card/Weather-Card";
import { LocationDetail } from "./shared/model/location-detail.inteface";

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

let location: LocationDetail = {
  cityName: "Kochi",
  lat: 9.931233,
  log: 76.267303,
  isSelected: true,
};

function App() {
  const [weatherDetail, setWeatherDetail] = useState<string | null>(null);
  useEffect(() => {
    axios
      .get("https://api.open-meteo.com/v1/forecast", {
        params: {
          latitude: location.lat,
          longitude: location.log,
          daily: "temperature_2m_max,temperature_2m_min",
          current_weather: true,
          timezone: "UTC",
        },
      })
      .then((response) => {
        console.log(JSON.stringify(response));
        setWeatherDetail(JSON.stringify(response));
      })
      .catch((error) => {
        setWeatherDetail("API Failed");
      });
  }, [location]);

  return (
    <div className="app-header">
      <WeatherCard message={weatherDetail ?? ""} />
    </div>
  );
}

export default App;

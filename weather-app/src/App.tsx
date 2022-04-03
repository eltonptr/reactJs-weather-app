import "./App.css";
import WeatherCard from "./shared/components/weather-card/Weather-Card";

function App() {
  return (
    <div className="App-header">
      <WeatherCard message="Hello my friend!" />
      <WeatherCard message="Hello my friend!" />
      <WeatherCard message="Hello my friend!" />
    </div>
  );
}

export default App;

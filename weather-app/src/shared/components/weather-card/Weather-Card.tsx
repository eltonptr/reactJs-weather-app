import "./Weather-Card.css";

type WeatherProps = {
  message: string;
};

function WeatherCard(weatherProps: WeatherProps) {
  return (
    <div className="weather-card">
      <h1 className="weather-card-main">
        <span className="weather-card-details">
          This is a weather card with message {weatherProps.message}
        </span>
      </h1>
    </div>
  );
}

export default WeatherCard;

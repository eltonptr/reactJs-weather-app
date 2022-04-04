import { LocationDetail } from "./location-detail.inteface";

export interface Daily {
  time: Array<string>;
  temperature_2m_max: number[];
  temperature_2m_min: number[];
}

export interface CurrentWeather {
  time: Date;
  temperature: number;
}

export interface WeatherResponse {
  longitude: number;
  latitude: number;
  daily: Daily;
  current_weather: CurrentWeather;
  location: LocationDetail;
}

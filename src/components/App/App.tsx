import React, {useState, useEffect} from 'react';
import DisplayCard from '../DisplayCard'
import SearchBar from '../SearchBar'
import './App.css';
import { callGPT, formatForecast } from '../OpenAI';
import GPTInterface from '../GPTInterface';

export interface Weather {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: Current;
  minutely: Minutely[];
  hourly: Hourly[];
  daily: Daily[];
  alerts: Alert[];
  locationName?: string
}
export interface Current {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: WeatherDetail[];
}
interface Minutely {
  dt: number;
  precipitation: number;
}
export interface Hourly {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: WeatherDetail[];
  pop: number;
}

export interface Daily {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: Temp;
  feels_like: FeelsLike;
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: WeatherDetail[];
  clouds: number;
  pop: number;
  rain: number;
  uvi: number;
}
interface Temp {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}
interface FeelsLike {
  day: number;
  night: number;
  eve: number;
  morn: number;
}
interface WeatherDetail {
  id: number;
  main: string;
  description: string;
  icon: string;
}
interface Alert {
  sender_name: string;
  event: string;
  start: number;
  end: number;
  description: string;
  tags: string[];
}


function App() {
  const [weatherInfo, setWeatherInfo] = useState<null | Weather>(null)
  const [weatherRequest, setWeatherRequest] = useState<string>(`https://api.openweathermap.org/data/3.0/onecall?lat=51.50&lon=0.12&units=metric&APPID=`)
  const [locationName, setLocationName] = useState<string>('London')
  const [aiResponse, setAiResponse] = useState<string>('')

  async function updateRequest(locationName: string) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=`)
    .then(data => data.json())
    .then(data => {
      setLocationName(data.name)
      return data;
  })
    .then(data => (setWeatherRequest(`https://api.openweathermap.org/data/3.0/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&units=metric&APPID=`)))
  }

  useEffect(() => {
    fetch(weatherRequest)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        data.locationName = locationName
        setWeatherInfo(data)
      })
      .catch(error => console.error(error));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weatherRequest]);

async function formatAndCall() {
    console.log(`weather info is set as ${weatherInfo}... calling GPT`)
    if (weatherInfo != null) {
      let formatted = formatForecast(weatherInfo.hourly)
      let response = await callGPT(locationName, formatted)
      setAiResponse(response)
    }
  }


  return (
    <div className="App">
      <SearchBar updateRequest= {updateRequest} />
      <div id="weather-display">
        {weatherInfo != null ? <DisplayCard {...weatherInfo}/> : null}
      </div>
      <GPTInterface aiResponse={aiResponse} formatAndCall={formatAndCall} />
    </div>
  );
}

export default App;

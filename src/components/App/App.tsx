import React, {useState, useEffect} from 'react';
import DisplayCard from '../DisplayCard'
import SearchBar from '../SearchBar'
import './App.css';
import { callGPT, formatForecast } from '../OpenAI';
import GPTInterface from '../GPTInterface';
import {Weather} from '../../utility/Interfaces/index'
const WeatherApiKey = process.env.REACT_APP_WEATHER_API_KEY

function App() {
  const [weatherInfo, setWeatherInfo] = useState<null | Weather>(null)
  const [weatherRequest, setWeatherRequest] = useState<string>(`https://api.openweathermap.org/data/3.0/onecall?lat=51.50&lon=0.12&units=metric&APPID=${WeatherApiKey}`)
  const [locationName, setLocationName] = useState<string>('London')
  const [aiResponse, setAiResponse] = useState<string>('')

  async function updateRequest(locationName: string) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=${WeatherApiKey}`)
    .then(data => data.json())
    .then(data => {
      setLocationName(data.name)
      return data;
  })
    .then(data => (setWeatherRequest(`https://api.openweathermap.org/data/3.0/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&units=metric&APPID=${WeatherApiKey}`)))
  }

  useEffect(() => {
    fetch(weatherRequest)
      .then(response => response.json())
      .then(data => {
        data.locationName = locationName
        setWeatherInfo(data)
        setAiResponse('')
      })
      .catch(error => console.error(error));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weatherRequest]);

async function formatAndCall() {
    if (weatherInfo != null) {
      setAiResponse('Loading...')
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

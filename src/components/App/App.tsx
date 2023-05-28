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

  async function updateRequestUrl(locationName: string) {
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=${WeatherApiKey}`)
    let data = await res.json()
    setLocationName(data.name)
    setWeatherRequest(`https://api.openweathermap.org/data/3.0/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&units=metric&APPID=${WeatherApiKey}`)
  }

  interface updateWeatherInfoprops {
    weatherRequest: string
    locationName: string
    setWeatherInfo: (value: Weather) => void
    setAiResponse: (value: string) => void
  }

  async function updateWeatherInfo(args: updateWeatherInfoprops) {
    try {let {weatherRequest, locationName, setWeatherInfo, setAiResponse} = args
    let res = await fetch(weatherRequest)
    let data = await res.json()
    data.locationName = locationName
    setWeatherInfo(data)
    setAiResponse('')}
    
    catch(error) {
      console.error(error)
    }
  }

  useEffect(() => {
    updateWeatherInfo({weatherRequest, locationName, setWeatherInfo, setAiResponse})
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
      <SearchBar updateRequest={updateRequestUrl} />
      <div id="weather-display">
        {weatherInfo != null ? <DisplayCard {...weatherInfo}/> : null}
    </div>
      <GPTInterface aiResponse={aiResponse} formatAndCall={formatAndCall} />
      </div>
  );
}

export default App;

import { Daily } from '../App/App'
import { useState, useEffect } from 'react'
import { timeConverter, dateConverter } from '../CurrentWeatherDisplay'
import DailyForecast from '../DailyForecast'
import './dailyforecastdisplay.css'
interface dailyForecast {
    time: string;
    temperature: number;
    icon: string;
    sunrise: string;
    sunset: string;
}

export default function DailyForecastDisplay (props:Daily[]) {
const [dailyForecast, setDailyForecast] = useState<[] | dailyForecast[]>([])

function updateForecast() {
    let propsArray = [props[1], props[2], props[3], props[4], props[5]]
    let newForecast = propsArray.map((day) => {return {time: dateConverter(day.dt).slice(0,5), temperature: Math.round(day.temp.day), icon: day.weather[0].icon, sunrise: timeConverter(day.sunrise).slice(0,5), sunset: timeConverter(day.sunset).slice(0,5)}})
    setDailyForecast(newForecast)
}
useEffect (() => {updateForecast()}, [props])

return (
    <>
    <div id="daily-forecast-grid">
    {dailyForecast.length > 0 ? dailyForecast.map((day,i) => <DailyForecast key={i} {...day}/>)  : null}
    </div>
    </>
)
}

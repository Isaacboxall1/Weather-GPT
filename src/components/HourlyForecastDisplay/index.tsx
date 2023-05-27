import {Hourly} from '../App/App'
import {useState, useEffect} from 'react'
import HourlyForecast from '../HourlyForecast'
import { timeConverter } from '../CurrentWeatherDisplay'
import './hourlyforecastdisplay.css'

interface hourlyForecast {
    time: number | string;
    temperature: number;
    icon: string;
}
export default function HourlyForecastDisplay (props: Hourly[]) {
const [hourlyForecast, setHourlyForecast] = useState<[] | hourlyForecast[]>([])

function updateForecast() {
    let propsArray = [props[1], props[2], props[3], props[4], props[5], props[6], props[7], props[8]]
    let newForecast = propsArray.map((hour) => {return {time: timeConverter(hour.dt).slice(0,5), temperature: Math.round(hour.temp), icon: hour.weather[0].icon}})
    setHourlyForecast(newForecast)
}
useEffect(()=> {updateForecast()}, [props])

return (
    <>
    <div id="hourly-forecast-grid">
    {hourlyForecast.length > 0 ? hourlyForecast.map((hour, i) => <HourlyForecast key={i} {...hour}/>)  : null}
    </div>
    </>
)
}
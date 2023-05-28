import {Current} from '../../utility/Interfaces/index'
import './currentweatherdisplay.css'

export function timeConverter (unixdate:number): string {
    const timestamp = unixdate
    const dateObject = new Date(timestamp * 1000); // Convert to milliseconds by multiplying with 1000
    const localTime = dateObject.toLocaleTimeString(); // Convert to local string
    return localTime
}

export function dateConverter (unixdate:number): string {
    const timestamp = unixdate
    const dateObject = new Date(timestamp * 1000); // Convert to milliseconds by multiplying with 1000
    const localDate = dateObject.toLocaleString(); // Convert to local string
    return localDate
    }

export default function CurrentWeatherDisplay (props: Current) {

    return (
        <div id="current-weather">
            <span id="sunrise">
            <h3>Humidity: {props.humidity} %</h3>
            <h3>Sunrise: {dateConverter(props.sunrise).split(',')[1].slice(0,6)}</h3>
            <h3>Sunset: {dateConverter(props.sunset).split(',')[1].slice(0,6)}</h3>
            </span>
            <span id="image-group">
            <img src={`./icons/${props.weather[0].icon}.png`} alt="weather icon"/>
            <h2>{props.weather[0].description}</h2>
            <h2>{Math.round(props.temp)} ℃</h2>
            </span>
        </div>
    )
}
import {Weather} from "../App/App";
import './displaycard.css'
import CurrentWeatherDisplay from "../CurrentWeatherDisplay";
import HourlyForecastDisplay from "../HourlyForecastDisplay";
import DailyForecastDisplay from '../DailyForecastDisplay';

export default function DisplayCard (props: Weather) {

    return (
        <div id="display-card">
        <h1 id="location-name">{props.locationName}</h1>
        <CurrentWeatherDisplay {...props.current}/>
        <HourlyForecastDisplay {...props.hourly}/>
        <DailyForecastDisplay {...props.daily}/>
        </div>
    )
}
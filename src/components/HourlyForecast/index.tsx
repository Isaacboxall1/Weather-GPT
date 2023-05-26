import './hourlyforecast.css'

interface HourlyForecastProps {
    time: number | string;
    temperature: number;
    icon: string;
}

export default function HourlyForecast(props: HourlyForecastProps) {
    
    return(
        <div id="hourly-forecast">
        <h2>{props.time}</h2>
        <h2>{props.temperature} ℃ </h2>
        <img src={`./icons/${props.icon}.png`} alt='weather icon'/>
        </div>
    )
}
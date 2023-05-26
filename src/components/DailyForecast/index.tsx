import './dailyforecast.css'
interface DailyForecastProps {
    time: number | string;
    temperature: number;
    icon: string;
    sunrise: string;
    sunset: string;
}

export default function DailyForecast(props: DailyForecastProps) {
    const {time, temperature, icon, sunrise, sunset} = props
    return(
        <div id="daily-forecast">
        <h2>{time} - {temperature} ℃</h2>
        <img src={`./icons/${icon}.png`} alt='weather icon'/>
        <div id="sun">
        <div id="rise"><img src={'./icons/sunrise.png'} alt='sunrise'/><h2>{sunrise}</h2></div>
        <div id="set"><img src={'./icons/sunset.png'} alt='sunset'/><h2>{sunset}</h2></div>
        </div>
        </div>
    )
}
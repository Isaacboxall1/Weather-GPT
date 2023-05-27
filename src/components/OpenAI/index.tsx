// setAIresponse: (value:string)=>void
import {Hourly} from '../App/App'
import { timeConverter } from '../CurrentWeatherDisplay'
const openAiKey = process.env.REACT_APP_OPENAI_KEY

export async function callGPT(location: string, forecast: string): Promise<string> {
    const message = `Given the Weather in ${location} is forecast to be ${forecast}, suggest THREE activities to do in ${location} that are appropriate for the weather. suggest specific locations. follow the format of ActivityTitle1: description: ActivityTitle2: description: ActivityTitle3: description:`
    let apiResponse = ''
    const APIBody = {
      "model": "gpt-3.5-turbo",
      "messages": [{"role": "user", "content": `${message}`}],
      "temperature": 0.4,
      "max_tokens": 250,
    }
    // setAIresponse('loading...')
    await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
      "content-type": 'application/json',
      "Authorization": `Bearer ${openAiKey}`
      },
      body: JSON.stringify(APIBody)
    }).then((data)=> {
      return data.json()
    }).then((data) => {
      apiResponse = data.choices[0].message.content
    })
    return apiResponse
  }

  

  export function formatForecast(hourlyForecast: Hourly[]) {
    let propsArray = [hourlyForecast[1], hourlyForecast[2], hourlyForecast[3], hourlyForecast[4], hourlyForecast[5], hourlyForecast[6]]
    let newForecast = propsArray.map((hour) => {return {time: timeConverter(hour.dt).slice(0,5), temp: Math.round(hour.temp), weather: hour.weather[0].main}})
    let stringifiedForecastArray = newForecast.map((hour) => {return `time: ${hour.time}, ${hour.temp} degrees and ${hour.weather}`})
    let stringifiedForecast = stringifiedForecastArray.join(', ')
    return stringifiedForecast
  }
import { useEffect, useState } from 'react'
import './morphspinner.css'

export default function MorphSpinner() {
const [text, setText] = useState<string>('Checking the Weather...')
    useEffect(() => {
        const textArray = [ 'Counting Clouds...', 'Checking the Wind...', 'Looking at the Sun...', 'Watching the Rain...', 'Feeling the Humidity...', 'Measuring the Pressure...', 'Calculating the Dew Point...', 'Predicting the Visibility...', 'Estimating the UV Index...', 'Forecasting the Weather...']
        setTimeout(() => {
            setText(textArray[0])
        }, 3000)
        setTimeout(() => {
            setText(textArray[2])
        }, 6000)
        setTimeout(() => {
            setText(textArray[3])
        }, 9000)
        setTimeout(() => {
            setText(textArray[4])
        }, 12000)
        setTimeout(() => {
            setText(textArray[5])
        }, 15000)
        setTimeout(() => {
            setText(textArray[6])
        }
        , 18000)
        setTimeout(() => {
            setText(textArray[7])
        }
        , 21000)
        setTimeout(() => {
            setText(textArray[8])
        }
        , 24000)
    }, [])
    return (
        <div id="morph-spinner-container">
        <div id="morph-spinner">
            
            <div id="spinner"></div>
            <h1 id="loading-text">{text}</h1>
        </div>
        </div>
    )
}
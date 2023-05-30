import MorphSpinner from "../MorphSpinner";
import './gptinterface.css'
import formatResToObj from "../../utility/formatResToObj";
interface GPTInterfaceProps {
aiResponse: string;
formatAndCall: () => void;
}

export default function GPTInterface (props: GPTInterfaceProps) {
const {aiResponse, formatAndCall} = props



function ConvertObjToJsx(aiResponse: string) {
    let combinedArray = formatResToObj(aiResponse)
    console.log(combinedArray)
    let formattedResponse = combinedArray.filter((activity) => activity.title !== undefined).map(({ title, description }, index) => (
        <div key={index} className="suggestion-card">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    ));
    return formattedResponse;
}


function conditionalRender() {
    if (aiResponse && aiResponse.includes('1.')) {
        return (
            <>
            <div id="response-card">
            <div id="responses">
            {ConvertObjToJsx(aiResponse)}
            </div>
            </div>
            </>
        )
    }
    else if (aiResponse === 'Loading...') {
        return (
            <div id="loading">
            <h1>GPT Weather says: </h1>
            <MorphSpinner/>
            </div>
        )
    }

    else {
        return (
            <div id="initial-interface">
            <h1>Ask GPT Weather for suggestions on what to do today!</h1>
            <button id="call-api-button" onClick={()=> formatAndCall()} >Ask GPT</button>
            </div>
        )
    }
}
    return (
        <>
        <div id="gpt-interface">
            <div className='hidden'>
            {conditionalRender()}
            </div>
        </div>
        </>
    )
}

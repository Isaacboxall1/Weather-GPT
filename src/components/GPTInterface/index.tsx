import MorphSpinner from "../MorphSpinner";
import './gptinterface.css'
interface GPTInterfaceProps {
aiResponse: string;
formatAndCall: () => void;
}

export default function GPTInterface (props: GPTInterfaceProps) {
const {aiResponse, formatAndCall} = props

function formatResponse(aiResponse: string) {

    let responseArray = aiResponse.split('ActivityTitle').map(item => item.slice(2));

    let titles = responseArray.map(item => item.slice(0, item.indexOf(':')));
    let descriptions = responseArray.map(item => item.slice(item.indexOf(':') + 1));

    let combinedArray = titles.map((title, index) => ({ title, description: descriptions[index] })).splice(1, titles.length);
    
    let formattedResponse = combinedArray.map(({ title, description }, index) => (
        <div key={index} className="suggestion-card">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    ));
    return formattedResponse;
}


function conditionalRender() {
    if (aiResponse && aiResponse.includes('ActivityTitle1:')) {
        return (
            <>
            <div id="response-card">
            <div id="responses">
            {formatResponse(aiResponse)}
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
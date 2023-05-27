interface GPTInterfaceProps {
aiResponse: string;
formatAndCall: () => void;
}

export default function GPTInterface (props: GPTInterfaceProps) {
const {aiResponse, formatAndCall} = props

    return (
        <>
        <div id="gpt-interface">
            <h1>AI suggestions on today based on this forecast</h1>
            <button onClick={()=> formatAndCall()} >Ask GPT</button>
            <div className='hidden'>
                <p>AI: </p>
                
                {aiResponse ? aiResponse.split('1.'||'2.' || '3.').map((item, index) => {
                    return <p key={index}>{item}</p>
                }) : null
                }
            </div>
        </div>
        </>
    )
}
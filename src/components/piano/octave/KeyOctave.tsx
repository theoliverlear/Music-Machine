import React from 'react';
import WhiteKeyOctave from "./WhiteKeyOctave";
import BlackKeyOctave from "./BlackKeyOctave";

function KeyOctave(props: { octaveNumber: number }) {
    return (
        <div className="octave-container">
            <WhiteKeyOctave octaveNumber={props.octaveNumber}/>
            <BlackKeyOctave octaveNumber={props.octaveNumber}/>
        </div>
    );
}
export default KeyOctave;
import React from 'react';
import OpeningOctave from "./octave/opening/OpeningOctave";
import KeyOctave from "./octave/KeyOctave";
import ClosingOctave from "./octave/closing/ClosingOctave";
import './Piano.css';

function Piano() {
    return (
        <div className="piano-container">
            <div className="key-container">
                <OpeningOctave />
                <KeyOctave octaveNumber={1} />
                <KeyOctave octaveNumber={2} />
                <KeyOctave octaveNumber={3} />
                <KeyOctave octaveNumber={4} />
                <KeyOctave octaveNumber={5} />
                <KeyOctave octaveNumber={6} />
                <KeyOctave octaveNumber={7} />
                <ClosingOctave />
            </div>
        </div>
    );
}
export default Piano;
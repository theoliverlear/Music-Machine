import React from 'react';

function BlackKeyOctave(props: { octaveNumber: number }) {
    return (
    <div className="black-keys-octave key-octave">
        <div className="key black-key" data-note={`C#${props.octaveNumber} | Db${props.octaveNumber}`}></div>
        <div className="key black-key" data-note={`D#${props.octaveNumber} | Eb${props.octaveNumber}`}></div>
        <div className="key black-key" data-note={`F#${props.octaveNumber} | Gb${props.octaveNumber}`}></div>
        <div className="key black-key" data-note={`G#${props.octaveNumber} | Ab${props.octaveNumber}`}></div>
        <div className="key black-key" data-note={`A#${props.octaveNumber} | Bb${props.octaveNumber}`}></div>
    </div>
    );
}

export default BlackKeyOctave;
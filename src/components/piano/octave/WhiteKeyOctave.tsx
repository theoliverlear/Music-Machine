import React from 'react';

function WhiteKeyOctave(props: {octaveNumber: number} ) {
    return (
        <div className="white-keys-octave key-octave">
            <div className="key white-key" data-note={`C${props.octaveNumber} | B#${props.octaveNumber - 1} | Dbb${props.octaveNumber}`}></div>
            <div className="key white-key" data-note={`D${props.octaveNumber} | C##${props.octaveNumber} | Ebb${props.octaveNumber}`}></div>
            <div className="key white-key" data-note={`E${props.octaveNumber} | D##${props.octaveNumber} | Fb${props.octaveNumber}`}></div>
            <div className="key white-key" data-note={`F${props.octaveNumber} | E#${props.octaveNumber} | Gbb${props.octaveNumber}`}></div>
            <div className="key white-key" data-note={`G${props.octaveNumber} | F##${props.octaveNumber} | Abb${props.octaveNumber}`}></div>
            <div className="key white-key" data-note={`A${props.octaveNumber} | G##${props.octaveNumber} | Bbb${props.octaveNumber}`}></div>
            <div className="key white-key" data-note={`B${props.octaveNumber} | B##${props.octaveNumber} | Cb${props.octaveNumber + 1}`}></div>
        </div>
    );
}
export default WhiteKeyOctave;

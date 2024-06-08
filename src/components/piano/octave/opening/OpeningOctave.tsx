import React from 'react';
import OpeningWhiteKeyOctave from "./OpeningWhiteKeyOctave";
import OpeningBlackKeyOctave from "./OpeningBlackKeyOctave";

function OpeningOctave() {
    return (
        <div className={"octave-container opening-octave"}>
            <OpeningWhiteKeyOctave />
            <OpeningBlackKeyOctave />
        </div>
    );
}
export default OpeningOctave;
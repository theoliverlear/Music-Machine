import React from 'react';
import '../../Piano.css';
function OpeningWhiteKeyOctave() {
    return (
        <div className="white-keys-octave key-octave">
            <div className="key white-key" data-note="A0 | G##0 | Bbb0"></div>
            <div className="key white-key" data-note="B0 | B##0 | Cb0"></div>
        </div>
    );
}

export default OpeningWhiteKeyOctave;
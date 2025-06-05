import React from 'react';
import '../../piano/Piano.css';
import {Note} from "../../../../../models/note/Note";
interface OpeningWhiteKeyOctaveProps {
    currentNotes: Note[];
    isNotePlayed: (dataNote: string) => boolean;
}
function OpeningWhiteKeyOctave(props: OpeningWhiteKeyOctaveProps) {
    function getClassStyle(dataNote: string): string {
        return `key white-key ${props.isNotePlayed(dataNote) ? "white-key-pressed" : ""}`;
    }
    return (
        <div className="white-keys-octave key-octave">
            <div className={getClassStyle("A0 | G##0 | Bbb0")} data-note="A0 | G##0 | Bbb0"></div>
            <div className={getClassStyle("B0 | B##0 | Cb0")} data-note="B0 | B##0 | Cb0"></div>
        </div>
    );
}

export default OpeningWhiteKeyOctave;
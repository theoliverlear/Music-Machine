import React from 'react';
import {Note} from "../../../../../../models/note/Note";

interface ClosingWhiteKeyOctaveProps {
    currentNotes: Note[];
    isNotePlayed: (dataNote: string) => boolean;
}

function ClosingWhiteKeyOctave(props: ClosingWhiteKeyOctaveProps) {
    function getClassStyle(dataNote: string): string {
        return `key white-key ${props.isNotePlayed(dataNote) ? "white-key-pressed" : ""}`;
    }
    return (
        <div className="white-keys-octave key-octave">
            <div className={getClassStyle("C8 | B#7")} data-note="C8 | B#7"></div>
        </div>
    );
}

export default ClosingWhiteKeyOctave;
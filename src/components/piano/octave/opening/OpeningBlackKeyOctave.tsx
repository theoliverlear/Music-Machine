import React from 'react';
import {Note} from "../../../../models/Note";

interface OpeningBlackKeyOctaveProps {
    currentNotes: Note[];
    isNotePlayed: (dataNote: string) => boolean;
}

function OpeningBlackKeyOctave(props: OpeningBlackKeyOctaveProps) {
    function getClassStyle(dataNote: string): string {
        return `key black-key ${props.isNotePlayed(dataNote) ? "black-key-pressed" : ""}`;
    }
    return (
        <div className="black-keys-octave key-octave">
            <div className={getClassStyle("A#0 | Bb0")} data-note="A#0 | Bb0"></div>
        </div>
    );
}

export default OpeningBlackKeyOctave;
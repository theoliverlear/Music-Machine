import React from 'react';
import {Note} from "../../../../../models/note/Note";

interface BlackKeyOctaveProps {
    octaveNumber: number;
    currentNotes: Note[];
    isNotePlayed: (dataNote: string) => boolean;
}

function BlackKeyOctave(props: BlackKeyOctaveProps) {
    function getClassStyle(dataNote: string): string {
        return `key black-key ${props.isNotePlayed(dataNote) ? "black-key-pressed" : ""}`;
    }
    return (
        <div className="black-keys-octave key-octave">
            <div className={getClassStyle(`C#${props.octaveNumber} | Db${props.octaveNumber}`)} data-note={`C#${props.octaveNumber} | Db${props.octaveNumber}`}></div>
            <div className={getClassStyle(`D#${props.octaveNumber} | Eb${props.octaveNumber}`)} data-note={`D#${props.octaveNumber} | Eb${props.octaveNumber}`}></div>
            <div className={getClassStyle(`F#${props.octaveNumber} | Gb${props.octaveNumber}`)} data-note={`F#${props.octaveNumber} | Gb${props.octaveNumber}`}></div>
            <div className={getClassStyle(`G#${props.octaveNumber} | Ab${props.octaveNumber}`)} data-note={`G#${props.octaveNumber} | Ab${props.octaveNumber}`}></div>
            <div className={getClassStyle(`A#${props.octaveNumber} | Bb${props.octaveNumber}`)} data-note={`A#${props.octaveNumber} | Bb${props.octaveNumber}`}></div>
        </div>
    );
}

export default BlackKeyOctave;
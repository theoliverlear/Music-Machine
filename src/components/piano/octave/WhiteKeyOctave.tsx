import React from 'react';
import {Note} from "../../../models/Note";

interface WhiteKeyOctaveProps {
    octaveNumber: number;
    currentNotes: Note[];
    isNotePlayed: (dataNote: string) => boolean;
}

function WhiteKeyOctave(props: WhiteKeyOctaveProps) {
    function getClassStyle(dataNote: string): string {
        return `key white-key ${props.isNotePlayed(dataNote) ? "white-key-pressed" : ""}`;
    }
    return (
        <div className="white-keys-octave key-octave">
            <div className={getClassStyle(`C${props.octaveNumber} | B#${props.octaveNumber - 1} | Dbb${props.octaveNumber}`)} data-note={`C${props.octaveNumber} | B#${props.octaveNumber - 1} | Dbb${props.octaveNumber}`}></div>
            <div className={getClassStyle(`D${props.octaveNumber} | C##${props.octaveNumber} | Ebb${props.octaveNumber}`)} data-note={`D${props.octaveNumber} | C##${props.octaveNumber} | Ebb${props.octaveNumber}`}></div>
            <div className={getClassStyle(`E${props.octaveNumber} | D##${props.octaveNumber} | Fb${props.octaveNumber}`)} data-note={`E${props.octaveNumber} | D##${props.octaveNumber} | Fb${props.octaveNumber}`}></div>
            <div className={getClassStyle(`F${props.octaveNumber} | E#${props.octaveNumber} | Gbb${props.octaveNumber}`)} data-note={`F${props.octaveNumber} | E#${props.octaveNumber} | Gbb${props.octaveNumber}`}></div>
            <div className={getClassStyle(`G${props.octaveNumber} | F##${props.octaveNumber} | Abb${props.octaveNumber}`)} data-note={`G${props.octaveNumber} | F##${props.octaveNumber} | Abb${props.octaveNumber}`}></div>
            <div className={getClassStyle(`A${props.octaveNumber} | G##${props.octaveNumber} | Bbb${props.octaveNumber}`)} data-note={`A${props.octaveNumber} | G##${props.octaveNumber} | Bbb${props.octaveNumber}`}></div>
            <div className={getClassStyle(`B${props.octaveNumber} | B##${props.octaveNumber} | Cb${props.octaveNumber + 1}`)} data-note={`B${props.octaveNumber} | B##${props.octaveNumber} | Cb${props.octaveNumber + 1}`}></div>
        </div>
    );
}
export default WhiteKeyOctave;

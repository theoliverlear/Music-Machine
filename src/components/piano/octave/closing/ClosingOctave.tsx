import React from 'react';
import ClosingWhiteKeyOctave from "./ClosingWhiteKeyOctave";
import {Note} from "../../../../models/Note";

interface ClosingOctaveProps {
    currentNotes: Note[];
    isNotePlayed: (dataNote: string) => boolean;
}

function ClosingOctave(props: ClosingOctaveProps) {
    return (
        <div className={"octave-container closing-octave"}>
            <ClosingWhiteKeyOctave currentNotes={props.currentNotes} isNotePlayed={props.isNotePlayed}/>
        </div>
    )
}
export default ClosingOctave;
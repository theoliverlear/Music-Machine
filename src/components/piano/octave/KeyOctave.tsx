import React from 'react';
import WhiteKeyOctave from "./WhiteKeyOctave";
import BlackKeyOctave from "./BlackKeyOctave";
import {Note} from "../../../models/Note";
import currentNotes from "../../music_display/note/CurrentNotes";

interface KeyOctaveProps {
    octaveNumber: number;
    currentNotes: Note[];
    isNotePlayed: (dataNote: string) => boolean;
}

function KeyOctave(props: KeyOctaveProps) {
    return (
        <div className="octave-container">
            <WhiteKeyOctave octaveNumber={props.octaveNumber} currentNotes={props.currentNotes} isNotePlayed={props.isNotePlayed}/>
            <BlackKeyOctave octaveNumber={props.octaveNumber} currentNotes={props.currentNotes} isNotePlayed={props.isNotePlayed}/>
        </div>
    );
}
export default KeyOctave;
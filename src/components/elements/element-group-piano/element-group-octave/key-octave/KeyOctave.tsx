import React from 'react';
import WhiteKeyOctave from "../white-key-octave/WhiteKeyOctave";
import BlackKeyOctave from "../black-key-octave/BlackKeyOctave";
import {Note} from "../../../../../models/note/Note";
import currentNotes from "../../../element-group-note/current-notes/CurrentNotes";

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
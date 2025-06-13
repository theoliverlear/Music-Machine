import React, {ReactElement} from 'react';
import OpeningOctave from "../element-group-octave/element-group-opening/opening-octave/OpeningOctave";
import KeyOctave from "../element-group-octave/key-octave/KeyOctave";
import ClosingOctave from "../element-group-octave/element-group-closing/closing-octave/ClosingOctave";
import './Piano.scss';
import {Note} from "../../../../models/note/Note";

interface PianoProps {
    currentNotes: Note[];
}
function Piano(props: PianoProps): ReactElement {
    function isNotePlayed(dataNote: string): boolean {
        const [firstNote, secondNote] = dataNote.split(" | ");
        let isPlayed: boolean = props.currentNotes.some(note => note.noteData.fullNoteName === firstNote || note.noteData.fullNoteName === secondNote);
        return isPlayed;
    }
    return (
        <div className="piano">
            <div className="key-container">
                <OpeningOctave currentNotes={props.currentNotes} isNotePlayed={isNotePlayed}/>
                <KeyOctave octaveNumber={1}  currentNotes={props.currentNotes} isNotePlayed={isNotePlayed}/>
                <KeyOctave octaveNumber={2}  currentNotes={props.currentNotes} isNotePlayed={isNotePlayed}/>
                <KeyOctave octaveNumber={3}  currentNotes={props.currentNotes} isNotePlayed={isNotePlayed}/>
                <KeyOctave octaveNumber={4}  currentNotes={props.currentNotes} isNotePlayed={isNotePlayed}/>
                <KeyOctave octaveNumber={5}  currentNotes={props.currentNotes} isNotePlayed={isNotePlayed}/>
                <KeyOctave octaveNumber={6}  currentNotes={props.currentNotes} isNotePlayed={isNotePlayed}/>
                <KeyOctave octaveNumber={7}  currentNotes={props.currentNotes} isNotePlayed={isNotePlayed}/>
                <ClosingOctave currentNotes={props.currentNotes} isNotePlayed={isNotePlayed} />
            </div>
        </div>
    );
}
export default Piano;
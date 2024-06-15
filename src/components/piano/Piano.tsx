import React from 'react';
import OpeningOctave from "./octave/opening/OpeningOctave";
import KeyOctave from "./octave/KeyOctave";
import ClosingOctave from "./octave/closing/ClosingOctave";
import './Piano.css';
import {Note} from "../../models/Note";

interface PianoProps {
    currentNotes: Note[];
}

function Piano(props: PianoProps) {
    function isNotePlayed(dataNote: string): boolean {
        const [firstNote, secondNote] = dataNote.split(" | ");
        let isPlayed = props.currentNotes.some(note => note.noteData.fullNoteName === firstNote || note.noteData.fullNoteName === secondNote);
        return isPlayed;
    }
    return (
        <div className="piano-container">
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
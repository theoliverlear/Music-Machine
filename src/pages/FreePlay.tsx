import React, {useState} from 'react';
import Piano from "../components/piano/Piano";
import MidiController from "../components/midi/MidiController";
import Title from "../components/title/Title";
import MidiPopup from "../components/midi/MidiPopup";
import {Note} from "../models/Note";


function FreePlay() {
    const [currentNotes, setCurrentNotes] = useState<Note[]>([]);
    return (
        <div>
            <Title title="Free Play" size={1}/>
            <MidiController onNoteChange={setCurrentNotes} />
            <Piano currentNotes={currentNotes} />
        </div>
    );
}
export default FreePlay;
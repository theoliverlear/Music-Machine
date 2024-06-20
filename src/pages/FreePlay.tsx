import React, {useState} from 'react';
import Piano from "../components/piano/Piano";
import MidiController from "../components/midi/MidiController";
import Title from "../components/title/Title";
import MidiPopup from "../components/midi/MidiPopup";
import {Note} from "../models/Note";
import CurrentNotes from "../components/music_display/note/CurrentNotes";
import CurrentChord from "../components/music_display/chord/CurrentChord";
import {Chord} from "../models/Chord";


function FreePlay() {
    const [currentNotes, setCurrentNotes] = useState<Note[]>([]);
    const [currentChord, setCurrentChord] = useState<Chord>(new Chord());
    function updateCurrentNotes(newNotes: Note[]) {
        setCurrentNotes(newNotes);
        currentChord.updateChordByCurrentNotes(newNotes);
        setCurrentChord(currentChord);
    }
    return (
        <div>
            <Title title="Free Play" size={1}/>
            <MidiController onNoteChange={updateCurrentNotes} />
            <CurrentChord currentChord={currentChord} />
            <CurrentNotes currentNotes={currentNotes} />
            <Piano currentNotes={currentNotes} />
        </div>
    );
}
export default FreePlay;
import React, {useState} from 'react';
import "./FreePlay.css";
import Piano from "../../elements/element-group-piano/piano/Piano";
import {Note} from "../../../models/note/Note";
import CurrentNotes
    from "../../elements/element-group-note/current-notes/CurrentNotes";
import CurrentChord
    from "../../elements/element-group-note/element-group-chord/current-chord/CurrentChord";
import {Chord} from "../../../models/chord/Chord";
import Title from "../../elements/element-group-native/title/Title";
import MidiController
    from "../../elements/element-group-midi/midi-controller/MidiController";
import {TagType} from "../../../models/html/TagType";
import NavBar
    from "../../elements/element-group-menu/element-group-nav-bar/NavBar";


function FreePlay() {
    const [currentNotes, setCurrentNotes] = useState<Note[]>([]);
    const [currentChord, setCurrentChord] = useState<Chord>(new Chord());
    const [midiDeviceSelected, setMidiDeviceSelected] = useState<boolean>(false);
    function updateCurrentNotes(newNotes: Note[]) {
        setCurrentNotes(newNotes);
        currentChord.updateChordByCurrentNotes(newNotes);
        setCurrentChord(currentChord);
    }
    function handleMidiDeviceSelection(isMidiDeviceSelected: boolean): void {
        setMidiDeviceSelected(isMidiDeviceSelected);
    }
    return (
        <div className={"free-play"}>
            <NavBar/>
            <Title text="Free Play" tagType={TagType.H1}/>
            <MidiController
                onMidiDeviceSelected={handleMidiDeviceSelection}
                onNoteChange={updateCurrentNotes}/>

            {midiDeviceSelected &&
                <CurrentChord currentChord={currentChord}/>}

            {midiDeviceSelected &&
                <CurrentNotes currentNotes={currentNotes}/>}
            <Piano currentNotes={currentNotes}/>
        </div>
    );
}
export default FreePlay;
import React, {useState} from 'react';
import "./FreePlay.scss";
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
    from "../../elements/element-group-menu/element-group-nav-bar/nav-bar/NavBar";
import PitchSlider
    from "../../elements/element-group-setting/pitch-slider/PitchSlider";
import {
    Pitch, PitchType
} from "../../elements/element-group-setting/pitch-slider/models/types";
import PageTitle
    from "../../elements/element-group-text/page-title/PageTitle";
import {ChordFactory} from "../../../models/chord/ChordFactory";


function FreePlay() {
    const [pitchState, setPitchState] = useState<Pitch>("natural");
    const [pitchType, setPitchType] = useState<PitchType>("auto");
    const [currentNotes, setCurrentNotes] = useState<Note[]>([]);
    const [currentChord, setCurrentChord] = useState<Chord>(new Chord());
    const [midiDeviceSelected, setMidiDeviceSelected] = useState<boolean>(false);
    function updateCurrentNotes(newNotes: Note[]) {
        setCurrentNotes(newNotes);
        currentChord.updateChordByCurrentNotes(newNotes);
        setCurrentChord(currentChord);
    }

    function handlePitchChange(newPitch: Pitch): void {
        setPitchState(newPitch);
    }

    function handleMidiDeviceSelection(isMidiDeviceSelected: boolean): void {
        setMidiDeviceSelected(isMidiDeviceSelected);
    }

    function handlePitchTypeSelection(newPitchType: PitchType): void {
        setPitchType(newPitchType);
    }

    function getPitch() {
        if (pitchType === "auto" && pitchState === "natural") {
            return ChordFactory.getAutoPitch(currentNotes);
        } else {
            return pitchState;
        }
    }

    return (
        <div className={"free-play"}>
            <NavBar/>
            <PitchSlider onPitchSelection={handlePitchChange}
            onPitchTypeSelection={handlePitchTypeSelection}/>
            <PageTitle text="Free Play"/>
            <MidiController
                onMidiDeviceSelected={handleMidiDeviceSelection}
                onNoteChange={updateCurrentNotes}/>

            {midiDeviceSelected &&
                <CurrentChord currentChord={currentChord} pitch={getPitch()}/>}

            {midiDeviceSelected &&
                <CurrentNotes currentNotes={currentNotes} pitch={getPitch()}/>}
            <Piano currentNotes={currentNotes}/>
        </div>
    );
}
export default FreePlay;
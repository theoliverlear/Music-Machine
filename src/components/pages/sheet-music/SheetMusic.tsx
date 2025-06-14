import React, {useState} from 'react';
import './SheetMusic.scss';
import NavBar
    from "../../elements/element-group-menu/element-group-nav-bar/nav-bar/NavBar";
import PageTitle
    from "../../elements/element-group-text/page-title/PageTitle";
import MidiPiano
    from "../../elements/element-group-midi/midi-piano/MidiPiano";
import {Note} from "../../../models/note/Note";
import LiveSheetNotes
    from "../../elements/element-group-theory/element-group-note/live-sheet-notes/LiveSheetNotes";
import PitchSlider
    from "../../elements/element-group-setting/pitch-slider/PitchSlider";
import {
    Pitch
} from "../../elements/element-group-setting/pitch-slider/models/types";

function SheetMusic() {
    const [currentNotes, setCurrentNotes] = useState<Note[]>([]);
    const [midiDeviceSelected, setMidiDeviceSelected] = useState<boolean>(false);
    const [pitchState, setPitchState] = useState<Pitch>("sharp");

    function handlePitchChange(newPitch: Pitch): void {
        setPitchState(newPitch);
    }

    function handleMidiDeviceSelection(isMidiDeviceSelected: boolean): void {
        setMidiDeviceSelected(isMidiDeviceSelected);
    }

    function updateCurrentNotes(newNotes: Note[]): void {
        if (JSON.stringify(currentNotes) === JSON.stringify(newNotes)) {
            return;
        }
        setCurrentNotes(newNotes);
    }

    return (
        <div className={"sheet-music"}>
            <NavBar/>
            <PitchSlider onPitchSelection={handlePitchChange}/>
            <PageTitle text={"Sheet Music"}/>
            <LiveSheetNotes currentNotes={currentNotes}/>
            <MidiPiano onMidiDeviceSelected={handleMidiDeviceSelection}
                       onNoteChange={updateCurrentNotes}/>
        </div>
    )
}
export default SheetMusic;
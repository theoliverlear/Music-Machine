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
    Pitch, PitchType
} from "../../elements/element-group-setting/pitch-slider/models/types";
import {ChordFactory} from "../../../models/chord/ChordFactory";
import KeySignaturePicker
    from "../../elements/element-group-setting/element-group-signature/element-group-key-signature/element-group-key-signature-picker/key-signature-picker/KeySignaturePicker";
import {AnalogousKeys} from "../../../models/signature/types";
import {KeySignature} from "../../../models/signature/KeySignature";

function SheetMusic() {
    const [currentNotes, setCurrentNotes] = useState<Note[]>([]);
    const [midiDeviceSelected, setMidiDeviceSelected] = useState<boolean>(false);
    const [pitchState, setPitchState] = useState<Pitch>("natural");
    const [pitchType, setPitchType] = useState<PitchType>("auto");
    const [keySignature, setKeySignature] = useState<KeySignature>(KeySignature.cMajor);

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

    function handlePitchTypeSelection(newPitchType: PitchType): void {
        setPitchType(newPitchType);
    }

    function getPitch(): Pitch {
        if (pitchType === "auto" && pitchState === "natural") {
            return ChordFactory.getAutoPitch(currentNotes);
        } else {
            return pitchState;
        }
    }

    function handleKeySignatureChange(newKeySignature: AnalogousKeys): void {
        setKeySignature(newKeySignature.major);
    }

    return (
        <div className={"sheet-music"}>
            <NavBar/>
            <PitchSlider onPitchSelection={handlePitchChange}
            onPitchTypeSelection={handlePitchTypeSelection}/>
            <PageTitle text={"Sheet Music"}/>
            <LiveSheetNotes currentNotes={currentNotes}
                            pitch={getPitch()}
                            pitchType={pitchType}
                            keySignature={keySignature}/>
            <KeySignaturePicker onKeySignatureChange={handleKeySignatureChange}/>
            <MidiPiano onMidiDeviceSelected={handleMidiDeviceSelection}
                       onNoteChange={updateCurrentNotes}/>
        </div>
    )
}
export default SheetMusic;
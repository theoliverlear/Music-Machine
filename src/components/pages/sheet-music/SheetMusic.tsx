import React, {ReactElement, useState} from 'react';
import './SheetMusic.scss';
import NavBar
    from "../../elements/element-group-menu/element-group-nav-bar/nav-bar/NavBar";
import PageTitle
    from "../../elements/element-group-text/page-title/PageTitle";
import MidiPiano
    from "../../elements/element-group-midi/midi-piano/MidiPiano";
import LiveSheetNotes
    from "../../elements/element-group-theory/element-group-note/live-sheet-notes/LiveSheetNotes";
import PitchSlider
    from "../../elements/element-group-setting/pitch-slider/PitchSlider";
import KeySignaturePicker
    from "../../elements/element-group-setting/element-group-signature/element-group-key-signature/element-group-key-signature-picker/key-signature-picker/KeySignaturePicker";
import {AnalogousKeys} from "../../../models/signature/types";
import {KeySignature} from "../../../models/signature/KeySignature";
import {usePiano} from "../../../hooks/piano/usePiano";
import {usePitch} from "../../../hooks/piano/usePitch";

function SheetMusic(): ReactElement {
    //============================-Variables-=================================
    const [keySignature, setKeySignature] = useState<KeySignature>(KeySignature.cMajor);
    const {
        currentNotes,
        midiDeviceSelected,
        handleMidiDeviceSelected,
        handleNoteChange
    } = usePiano();
    const {
        pitchState,
        pitchType,
        handlePitchChange,
        handlePitchTypeSelection,
        getPitch,
    } = usePitch();
    //--------------------Handle-Key-Signature-Change-------------------------
    function handleKeySignatureChange(newKeySignature: AnalogousKeys): void {
        setKeySignature(newKeySignature.major);
    }
    //=============================-Element-==================================
    return (
        <div className={"sheet-music"}>
            <NavBar/>
            <PitchSlider onPitchSelection={handlePitchChange}
                         onPitchTypeSelection={handlePitchTypeSelection}/>
            <PageTitle text={"Sheet Music"}/>
            <LiveSheetNotes currentNotes={currentNotes}
                            pitch={getPitch(currentNotes)}
                            pitchType={pitchType}
                            keySignature={keySignature}/>
            <KeySignaturePicker onKeySignatureChange={handleKeySignatureChange}/>
            <MidiPiano onMidiDeviceSelected={handleMidiDeviceSelected}
                       onNoteChange={handleNoteChange}/>
        </div>
    )
}
export default SheetMusic;
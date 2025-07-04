import React, {ReactElement, useState} from 'react';
import './MidiPiano.scss';
import MidiPopup from "../midi-popup/MidiPopup";
import Piano from "../../element-group-piano/piano/Piano";
import {Note} from "../../../../models/note/Note";
import MidiController from "../midi-controller/MidiController";
import {Chord} from "../../../../models/chord/Chord";
import {usePiano} from "../../../../hooks/piano/usePiano";

interface MidiPianoProps {
    onNoteChange: (notes: Note[]) => void;
    onMidiDeviceSelected: (isSelected: boolean) => void;
}

function MidiPiano(props: MidiPianoProps): ReactElement {
    //============================-Variables-=================================
    const {
        currentNotes,
        midiDeviceSelected,
        handleMidiDeviceSelected,
        handleNoteChange
    } = usePiano();

    //--------------------Handle-Midi-Device-Selection------------------------
    function handleMidiDeviceSelection(isMidiDeviceSelected: boolean): void {
        handleMidiDeviceSelected(isMidiDeviceSelected);
        props.onMidiDeviceSelected(isMidiDeviceSelected);
    }
    //------------------------Update-Current-Notes----------------------------
    function updateCurrentNotes(newNotes: Note[]): void {
        newNotes = Note.sortNotes(newNotes);
        handleNoteChange(newNotes);
        props.onNoteChange(newNotes);
    }

    //=============================-Element-==================================
    return (
        <div className={"midi-piano"}>
            <MidiController onMidiDeviceSelected={handleMidiDeviceSelection}
                            onNoteChange={updateCurrentNotes}/>
            <Piano currentNotes={currentNotes}/>
        </div>
    );
}
export default MidiPiano;
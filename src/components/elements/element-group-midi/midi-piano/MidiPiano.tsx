import React, {ReactElement, useState} from 'react';
import './MidiPiano.scss';
import MidiPopup from "../midi-popup/MidiPopup";
import Piano from "../../element-group-piano/piano/Piano";
import {Note} from "../../../../models/note/Note";
import MidiController from "../midi-controller/MidiController";

interface MidiPianoProps {
    onNoteChange: (notes: Note[]) => void;
    onMidiDeviceSelected: (isSelected: boolean) => void;
}

function MidiPiano(props: MidiPianoProps): ReactElement {
    const [currentNotes, setCurrentNotes] = useState<Note[]>([]);
    const [midiDeviceSelected, setMidiDeviceSelected] = useState<boolean>(false);
    function handleMidiDeviceSelection(isMidiDeviceSelected: boolean): void {
        setMidiDeviceSelected(isMidiDeviceSelected);
        props.onMidiDeviceSelected(isMidiDeviceSelected);
    }
    function updateCurrentNotes(newNotes: Note[]): void {
        setCurrentNotes(newNotes);
        props.onNoteChange(newNotes);
    }

    return (
        <div className={"midi-piano"}>
            <MidiController onMidiDeviceSelected={handleMidiDeviceSelection}
                            onNoteChange={updateCurrentNotes}/>
            <Piano currentNotes={currentNotes}/>
        </div>
    );
}

export default MidiPiano;
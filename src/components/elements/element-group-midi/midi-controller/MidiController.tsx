import React, {useEffect, useState} from 'react';
import './MidiController.scss';
import MidiPopup from "../midi-popup/MidiPopup";
import { Note } from '../../../../models/note/Note';
import {MidiNote} from "../../../../models/midi/MidiNote";
import {PossibleMidiInput, PossibleMidiOutput} from "./models/types";

interface MidiControllerProps {
    onNoteChange: (notes: Note[]) => void;
    onMidiDeviceSelected: (isSelected: boolean) => void;
}

function MidiController(props: MidiControllerProps) {
    const [midiInput, setMidiInput] = useState<PossibleMidiInput>(undefined);
    const [midiOutput, setMidiOutput] = useState<PossibleMidiOutput>(undefined);
    const [currentNotes, setCurrentNotes] = useState<Note[]>([]);

    function handleMidiDeviceSelection(inputDevice: PossibleMidiInput,
                                       outputDevice: PossibleMidiOutput): void {
        setMidiInput(inputDevice);
        setMidiOutput(outputDevice);
        props.onMidiDeviceSelected(true);
    }

    function hasSelectedMidiDevice(): boolean {
        return midiInput !== undefined && midiOutput !== undefined;
    }

    function isActiveNote(status: number, velocity: number): boolean {
        return status === 144 && velocity > 0;
    }

    function handleMidiMessage(message: WebMidi.MIDIMessageEvent): void {
        let [status, noteId, velocity] = message.data;
        if (isActiveNote(status, velocity)) {
            const noteTimestamp: number = message.timeStamp;
            const pressedNote: MidiNote = new MidiNote(noteId, velocity, noteTimestamp);
            const note: Note = new Note(pressedNote);
            setCurrentNotes((previousNotes: Note[]): Note[] => {
                const updatedNotes: Note[] = [...previousNotes, note];
                return updatedNotes;
            });
        } else if (status === 128 || (status === 144 && velocity === 0)) {
            setCurrentNotes((previousNotes: Note[]) => {
                const updatedNotes: Note[] = previousNotes.filter((note: Note) => note.midiNote.noteId !== noteId)
                return updatedNotes;
            });
        }
    }

    useEffect(() => {
        if (!midiInput) return;
        midiInput.onmidimessage = handleMidiMessage;
        return (): void => {
            midiInput.onmidimessage = null;
        }
    }, [midiInput]);

    useEffect(() => {
        props.onNoteChange(currentNotes);
    }, [currentNotes, props]);

    return (
        <div className={"midi-controller"}>
            <MidiPopup onMidiDeviceSelected={handleMidiDeviceSelection}/>
        </div>
    )
}
export default MidiController;
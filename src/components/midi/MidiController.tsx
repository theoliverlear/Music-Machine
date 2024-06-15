import React, {useEffect, useState} from 'react';
import MidiPopup from "./MidiPopup";
import MidiDevice from "./MidiDevice";
import {MidiNote} from "../../models/MidiNote";
import {Note} from "../../models/Note";

interface MidiControllerProps {
    onNoteChange: (notes: Note[]) => void;
}

function MidiController(props: MidiControllerProps) {
    const [midiInput, setMidiInput] = useState<WebMidi.MIDIInput | undefined>(undefined);
    const [midiOutput, setMidiOutput] = useState<WebMidi.MIDIOutput | undefined>(undefined);
    const [currentNotes, setCurrentNotes] = useState<Note[]>([]);
    // const [currentNotes, setCurrentNotes];
    function handleMidiDeviceSelection(inputDevice: WebMidi.MIDIInput | undefined, outputDevice: WebMidi.MIDIOutput | undefined) {
        console.log('Midi Device Selected');
        setMidiInput(inputDevice);
        setMidiOutput(outputDevice);
    }

    useEffect(() => {
        if (!midiInput) return;
        function handleMidiMessage(message: WebMidi.MIDIMessageEvent) {
            let [status, noteId, velocity] = message.data;
            if (status === 144 && velocity > 0) {
                let noteTimestamp: number = message.timeStamp;
                let pressedNote: MidiNote = new MidiNote(noteId, velocity, noteTimestamp);
                let note: Note = new Note(pressedNote);
                setCurrentNotes(previousNotes => {
                    const updatedNotes = [...previousNotes, note];
                    props.onNoteChange(updatedNotes);
                    console.log('Updated Notes: ', updatedNotes);
                    return updatedNotes;
                });
                console.log('Note Pressed: ', note.toString());
                console.log('Current Notes: ', currentNotes);
            } else if (status === 128 || (status === 144 && velocity === 0)) {
                console.log('Note Released');
                setCurrentNotes(previousNotes => {
                    const updatedNotes = previousNotes.filter((note: Note) => note.midiNote.noteId !== noteId)
                    props.onNoteChange(updatedNotes);
                    console.log('Updated Notes: ', updatedNotes);
                    return updatedNotes;
                });
            }
        }
        midiInput.onmidimessage = handleMidiMessage;
        return () => {
            midiInput.onmidimessage = null;
        }
    }, [midiInput, props]);
return (
    <div>
        <MidiPopup onMidiDeviceSelected={handleMidiDeviceSelection} />
        <MidiDevice input={midiInput} output={midiOutput} />
    </div>
)
}
export default MidiController;
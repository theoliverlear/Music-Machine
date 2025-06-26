import {useCallback, useState} from "react";
import {Note} from "../../models/note/Note";

export function usePiano() {
    //==============================-State-===================================
    const [currentNotes, setCurrentNotes] = useState<Note[]>([]);
    const [midiDeviceSelected, setMidiDeviceSelected] = useState<boolean>(false);
    //=============================-Handlers-=================================

    //-------------------------Handle-Note-Change-----------------------------
    const handleNoteChange: (notes: Note[]) => void = useCallback((notes: Note[]): void => {
        setCurrentNotes(Note.sortNotes(notes));
    }, []);
    //--------------------Handle-Midi-Device-Selected-------------------------
    const handleMidiDeviceSelected: (selected: boolean) => void = useCallback((selected: boolean): void => {
        setMidiDeviceSelected(selected);
    }, []);

    return {
        currentNotes,
        midiDeviceSelected,
        handleMidiDeviceSelected,
        handleNoteChange
    };
}
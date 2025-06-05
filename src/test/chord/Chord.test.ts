import {Chord} from "../../models/chord/Chord";
import {Note} from "../../models/note/Note";
import {MidiNote} from "../../models/midi/MidiNote";

describe('Chord', (): void => {
    it ('does not allow duplicate notes', (): void => {
        let chord: Chord = new Chord();
        let noteBase: Note = new Note(new MidiNote(60));
        let noteDuplicate: Note = new Note(new MidiNote(60));
        chord.addNote(noteBase);
        chord.addNote(noteDuplicate);
        expect(chord.notes.size).toBe(1);
    });
    it ('calculates chord names', (): void => {

    });
});
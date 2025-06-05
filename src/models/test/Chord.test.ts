import {Chord} from "../chord/Chord";
import {Note} from "../note/Note";
import {MidiNote} from "../midi/MidiNote";

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
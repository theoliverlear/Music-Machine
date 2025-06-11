import {Chord} from "../../models/chord/Chord";
import {Note} from "../../models/note/Note";
import {MidiNote} from "../../models/midi/MidiNote";

describe('Chord', (): void => {
    it('does not allow duplicate notes', (): void => {
        let chord: Chord = new Chord();
        let noteBase: Note = new Note(new MidiNote(60));
        let noteDuplicate: Note = new Note(new MidiNote(60));
        chord.addNote(noteBase);
        chord.addNote(noteDuplicate);
        expect(chord.notes.size).toBe(1);
    });
    it('calculates without regard to input order', (): void => {
        let chord: Chord = new Chord();
        chord.addNote(new Note(new MidiNote(64))); // E
        chord.addNote(new Note(new MidiNote(67))); // G
        chord.addNote(new Note(new MidiNote(60))); // C
        expect(chord.fullName).toBe("C Major");
    });

    it('identifies uninverted triads', () => {
        let chord: Chord = new Chord();
        chord.addNote(new Note(new MidiNote(60))); // C
        chord.addNote(new Note(new MidiNote(64))); // E
        chord.addNote(new Note(new MidiNote(67))); // G
        expect(chord.isUninvertedTriad()).toBe(true);
        chord = new Chord();
        chord.addNote(new Note(new MidiNote(60))); // C
        chord.addNote(new Note(new MidiNote(63))); // Eb
        chord.addNote(new Note(new MidiNote(67))); // G
        expect(chord.isUninvertedTriad()).toBe(true);
        chord = new Chord();
        chord.addNote(new Note(new MidiNote(60))); // C
        chord.addNote(new Note(new MidiNote(65))); // F
        chord.addNote(new Note(new MidiNote(67))); // G
        expect(chord.isUninvertedTriad()).toBe(false);
    });
});
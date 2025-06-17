import { MidiNote } from "../../../models/midi/MidiNote";
import {Note} from "../../../models/note/Note";
import {MutableNote} from "../../../models/note/MutableNote";
import {KeySignature} from "../../../models/signature/KeySignature";

describe('MutableNote', (): void => {
    describe('mutateToKeySignature', (): void => {
        it('can mutate to a natural key signature', (): void => {
            const keySignature: KeySignature = KeySignature.cMajor;
            const noteOne: MutableNote = MutableNote.fromMidiNumber(60); // C
            noteOne.mutateToKeySignature(keySignature);
            expect(noteOne.mutatedName).toBe("C");
            const noteTwo: MutableNote = MutableNote.fromMidiNumber(63); // D#
            noteTwo.mutateToKeySignature(keySignature);
            expect(noteTwo.mutatedName).toBe("D#");
            const noteThree: MutableNote = MutableNote.fromMidiNumber(66); // F# || Gb
            noteThree.mutate("flat");
            noteThree.mutateToKeySignature(keySignature);
            expect(noteThree.mutatedName).toBe("Gb");
        });
        it('can mutate to a key signature with sharps', (): void => {
            const keySignature: KeySignature = KeySignature.fSharpMinor;
            const noteOne: MutableNote = MutableNote.fromMidiNumber(60); // C
            noteOne.mutateToKeySignature(keySignature);
            expect(noteOne.mutatedName).toBe("C");
            const noteTwo: MutableNote = MutableNote.fromMidiNumber(68); // G# || Ab
            noteTwo.mutate("flat");
            noteTwo.mutateToKeySignature(keySignature);
            expect(noteTwo.mutatedName).toBe("G#");
            const noteThree: MutableNote = MutableNote.fromMidiNumber(61); // C#
            noteThree.mutateToKeySignature(keySignature);
            expect(noteThree.mutatedName).toBe("C#");
        });
        it('can mutate to a key signature with flats', (): void => {
            const keySignature: KeySignature = KeySignature.bFlatMajor;
            const noteOne: MutableNote = MutableNote.fromMidiNumber(60); // C
            noteOne.mutateToKeySignature(keySignature);
            expect(noteOne.mutatedName).toBe("C");
            const noteTwo: MutableNote = MutableNote.fromMidiNumber(63); // D# || Eb
            noteTwo.mutateToKeySignature(keySignature);
            expect(noteTwo.mutatedName).toBe("Eb");
            const noteThree: MutableNote = MutableNote.fromMidiNumber(66); // F# || Gb
            noteThree.mutateToKeySignature(keySignature);
            expect(noteThree.mutatedName).toBe("Gb");
            const noteFour: MutableNote = MutableNote.fromMidiNumber(70); // A# || Bb
            noteFour.mutateToKeySignature(keySignature);
            expect(noteFour.mutatedName).toBe("Bb");
        });
    });
    describe('mutate', (): void => {
        it('should not mutate already mutated notes', (): void => {
            const noteOne: Note = new Note(new MidiNote(61)); // C#
            const mutableNoteOne = new MutableNote(noteOne);
            mutableNoteOne.mutate("sharp");
            expect(mutableNoteOne.mutatedName).toBe("C#");

            const noteTwo: Note = new Note(new MidiNote(60)); // C
            const mutableNoteTwo = new MutableNote(noteTwo);
            mutableNoteTwo.mutate("natural");
            expect(mutableNoteTwo.mutatedName).toBe("C");
        });

        it('should mutate a note to sharp', (): void => {
            const noteOne: Note = new Note(new MidiNote(60)); // C
            const mutableNoteOne = new MutableNote(noteOne);
            mutableNoteOne.mutate("sharp");
            expect(mutableNoteOne.mutatedName).toBe("B#");

            const noteTwo: Note = new Note(new MidiNote(65)); // F
            const mutableNoteTwo = new MutableNote(noteTwo);
            mutableNoteTwo.mutate("sharp");
            expect(mutableNoteTwo.mutatedName).toBe("E#");
        });
        it('should mutate a note to flat', (): void => {
            const noteOne: Note = new Note(new MidiNote(63)); // D#
            const mutableNoteOne = new MutableNote(noteOne);
            mutableNoteOne.mutate("flat");
            expect(mutableNoteOne.mutatedName).toBe("Eb");
        });
    });
});
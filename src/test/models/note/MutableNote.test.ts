import { MidiNote } from "../../../models/midi/MidiNote";
import {Note} from "../../../models/note/Note";
import {MutableNote} from "../../../models/note/MutableNote";

describe('MutableNote', (): void => {
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
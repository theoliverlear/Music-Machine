import {MidiNote} from "../../../models/midi/MidiNote";
import {Note} from "../../../models/note/Note";
import {NoteFactory} from "../../../models/note/NoteFactory";

describe('NoteFactory', () => {
    describe('getTrioPitch', () => {
        describe('can identify pitches in thirds', () => {
            it('identifies minor thirds', () => {
                const noteOne: Note = new Note(new MidiNote(61)); // C#
                const noteTwo: Note = new Note(new MidiNote(64)); // E
                const noteThree: Note = new Note(new MidiNote(66)); // G#
                const [pitchOne, pitchTwo, pitchThree] = NoteFactory.getTrioPitch(noteOne, noteTwo, noteThree);
                expect(pitchOne).toBe("sharp");
                expect(pitchTwo).toBe("natural");
                expect(pitchThree).toBe("sharp");
            });
            it('identifies major thirds', () => {
                const noteOne: Note = new Note(new MidiNote(61)); // C#
                const noteTwo: Note = new Note(new MidiNote(65)); // E#
                const noteThree: Note = new Note(new MidiNote(68)); // G#
                const [pitchOne, pitchTwo, pitchThree] = NoteFactory.getTrioPitch(noteOne, noteTwo, noteThree);
                expect(pitchOne).toBe("sharp");
                expect(pitchTwo).toBe("sharp");
                expect(pitchThree).toBe("sharp");
            });
        });
    });
    describe('getNoteWithPitches', () => {
        it('identifies minor thirds', () => {
            const noteOne: Note = new Note(new MidiNote(61)); // C#
            const noteTwo: Note = new Note(new MidiNote(64)); // E
            const noteThree: Note = new Note(new MidiNote(66)); // G#
            const notes: Note[] = [noteOne, noteTwo, noteThree];
            const [factoryNotes, factoryPitches] = NoteFactory.getNoteWithPitches(notes);
            expect(factoryPitches).toEqual(["sharp", "natural", "sharp"]);
        });
        it('identifies major thirds', () => {
            const noteOne: Note = new Note(new MidiNote(61)); // C#
            const noteTwo: Note = new Note(new MidiNote(65)); // E#
            const noteThree: Note = new Note(new MidiNote(68)); // G#
            const notes: Note[] = [noteOne, noteTwo, noteThree];
            const [factoryNotes, factoryPitches] = NoteFactory.getNoteWithPitches(notes);
            expect(factoryPitches).toEqual(["sharp", "sharp", "sharp"]);
        });
    });
});
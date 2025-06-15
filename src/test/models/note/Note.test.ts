import {Note} from "../../../models/note/Note";
import {NoteData} from "../../../models/note/NoteData";
import {MidiNote} from "../../../models/midi/MidiNote";

describe('Note', () => {
    describe('toVexFlowKey', () => {
        it('returns notes in VexFlow format', () => {
            const noteOne: Note = new Note(new MidiNote(60));
            expect(noteOne.toVexFlowKey()).toBe("c/4");
            const noteTwo: Note = new Note(new MidiNote(61));
            expect(noteTwo.toVexFlowKey()).toBe("c#/4");
        });
        it('responds to pitch modifiers', () => {
            const noteTwo: Note = new Note(new MidiNote(61));
            expect(noteTwo.toVexFlowKey("sharp")).toBe("c#/4");
            expect(noteTwo.toVexFlowKey("flat")).toBe("db/4");
        });
    });
    describe('note name modifiers', () => {
        it('can mutate to sharp', () => {
            const noteTwo: Note = new Note(new MidiNote(61));
            expect(noteTwo.noteData.asSharp()).toBe("C#");
        });
        it('can mutate to flat', () => {
            const noteTwo: Note = new Note(new MidiNote(61));
            expect(noteTwo.noteData.asFlat()).toBe("Db");
        });
        describe('can mutate to natural', () => {
            it('mutate via sharp', () => {
                const noteOne: Note = new Note(new MidiNote(65)); // F
                expect(noteOne.noteData.asSharp()).toBe("E#");
                const noteTwo: Note = new Note(new MidiNote(60)); // C
                expect(noteTwo.noteData.asSharp()).toBe("B#");
            });
            it('mutate via flat', () => {
                const noteOne: Note = new Note(new MidiNote(64)); // E
                expect(noteOne.noteData.asFlat()).toBe("Fb");
                const noteTwo: Note = new Note(new MidiNote(59)); // B
                expect(noteTwo.noteData.asFlat()).toBe("Cb");
            });
        });
    })
});
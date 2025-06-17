import {Note} from "../../../models/note/Note";
import {SlashChord} from "../../../models/chord/SlashChord";

describe('SlashChord', (): void => {
    describe('isSlashChord', (): void => {
        it('can identify a slash chord', (): void => {
            const noteC: Note = Note.fromMidiNumber(60);
            const noteE: Note = Note.fromMidiNumber(64);
            const noteG: Note = Note.fromMidiNumber(67);
            const noteLowerE: Note = Note.fromMidiNumber(52);
            expect(SlashChord.isSlashChord([noteC, noteE, noteG, noteLowerE])).toBe(true);
            const noteD: Note = Note.fromMidiNumber(62);
            expect(SlashChord.isSlashChord([noteC, noteE, noteG, noteD])).toBe(false);
        });
    });
    describe('fromNotes', (): void => {
        const noteC: Note = Note.fromMidiNumber(60);
        const noteE: Note = Note.fromMidiNumber(64);
        const noteG: Note = Note.fromMidiNumber(67);
        const noteLowerE: Note = Note.fromMidiNumber(52);
        const noteD: Note = Note.fromMidiNumber(62);
        it('throws an error if it is an invalid slash chord', (): void => {
            expect((): void => {
               SlashChord.fromNotes([noteC, noteE, noteG, noteD]);
            }).toThrow("Invalid notes for a slash chord.");
        });
        it('creates a SlashChord from valid notes', (): void => {
            const slashChord: SlashChord = SlashChord.fromNotes([noteC, noteE, noteG, noteLowerE]);
            expect(slashChord.name).toBe("C Major/E")
        });
    });
});
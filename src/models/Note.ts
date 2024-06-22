import {MidiNote} from "./MidiNote";
import {NoteData} from "./NoteData";
import {Equatable} from "./Equatable";

export class Note implements Equatable {
    private _midiNote: MidiNote;
    private _noteNumber: number;
    private _noteData: NoteData;
    constructor(midiNote: MidiNote = new MidiNote()) {
        this._midiNote = midiNote;
        this._noteNumber = midiNote.noteId - 21;
        this._noteData = NoteData.getByNoteNumber(this._noteNumber);
    }
    get midiNote(): MidiNote {
        return this._midiNote;
    }
    get noteNumber(): number {
        return this._noteNumber;
    }
    get noteData(): NoteData {
        return this._noteData;
    }
    setMidiNote(midiNote: MidiNote): void {
        this._midiNote = midiNote;
    }
    setNoteNumber(noteNumber: number): void {
        this._noteNumber = noteNumber;
    }
    setNoteData(noteData: NoteData): void {
        this._noteData = noteData;
    }
    toString(): string {
        return `Note{midiNote: ${this._midiNote}, noteNumber: ${this._noteNumber}, noteName: ${this._noteData.fullNoteName}\n`;
    }
    equals(note: Note): boolean {
        return this.noteNumber === note.noteNumber;
    }
}

import {MidiNote} from "../midi/MidiNote";
import {NoteData} from "./NoteData";
import {Equatable} from "../behavior/Equatable";
import {Accidental, StaveNote} from "vexflow";
import {Clef} from "../theory/types";

export class Note implements Equatable {
    private _midiNote: MidiNote;
    private _noteNumber: number;
    private _noteData: NoteData;
    constructor(midiNote: MidiNote = new MidiNote()) {
        this._midiNote = midiNote;
        this._noteNumber = midiNote.noteId - 21;
        this._noteData = NoteData.getByNoteNumber(this._noteNumber);
    }
    toVexFlowKey(): string {
        return `${this.noteData.noteName.toLowerCase()}/${this.noteData.octave}`;
    }

    isBassClef(): boolean {
        return this.noteData.octave < 4;
    }

    isTrebleClef(): boolean {
        return this.noteData.octave >= 4;
    }

    getClef(): Clef {
        return this.isBassClef() ? "bass" : "treble";
    }

    static allToBaseTrebleNoteChord(notes: Note[],
                                    duration: string = "w"): [StaveNote, StaveNote] {
        const trebleNotes: Note[] = notes.filter((note: Note): boolean => note.isTrebleClef());
        const bassNotes: Note[] = notes.filter((note: Note): boolean => note.isBassClef());
        const trebleNote: StaveNote = Note.allToStaveNoteChord(trebleNotes, duration);
        const bassNote: StaveNote = Note.allToStaveNoteChord(bassNotes, duration);
        return [trebleNote, bassNote];
    }

    static allToStaveNoteChord(notes: Note[],
                               duration: string = "w"): StaveNote {
        if (notes.length === 0) {
            return new StaveNote({
                keys: ["r/4"],
                duration: duration,
            });
        }
        const lowestNote: Note = Note.getLowestNote(notes);
        const clef: Clef = lowestNote.getClef();
        const accidentalMap: Record<number, string> = {};
        const clefMap: Record<number, string> = {};
        const staveNote = new StaveNote({
            keys: notes.map((note, index) => {
                if (note.isSharp()) {
                    accidentalMap[index] = "#";
                } else if (note.isFlat()) {
                    accidentalMap[index] = "b";
                }
                clefMap[index] = note.getClef();
                return note.toVexFlowKey();
            }),
            duration: duration,
            clef: clef,
        });
        for (const [index, accidental] of Object.entries(accidentalMap)) {
            if (accidental === "#") {
                staveNote.addModifier(new Accidental("#"), parseInt(index));
            } else if (accidental === "b") {
                staveNote.addModifier(new Accidental("b"), parseInt(index));
            }
        }
        return staveNote;
    }

    static getLowestNote(notes: Note[]): Note {
        return notes.reduce((prev: Note, current: Note): Note => {
            return (prev.noteNumber < current.noteNumber) ? prev : current;
        });
    }

    toStaveNote(duration: string = "w"): StaveNote {
        const keyString: string = this.toVexFlowKey();
        const note: StaveNote = new StaveNote({
            keys: [keyString],
            duration: duration,
        });
        if (this.isFlat()) {
            note.addModifier(new Accidental("b"));
        } else if (this.isSharp()) {
            note.addModifier(new Accidental("#"));
        }
        return note;
    }

    isSharp(): boolean {
        return this._noteData.noteName.includes("#");
    }

    isFlat(): boolean {
        return this._noteData.noteName.includes("b");
    }

    isNatural(): boolean {
        return !this.isSharp() && !this.isFlat();
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

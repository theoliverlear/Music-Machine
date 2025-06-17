import {MidiNote} from "../midi/MidiNote";
import {NoteData} from "./NoteData";
import {Equatable} from "../behavior/Equatable";
import {Accidental, StaveNote} from "vexflow";
import {Clef} from "../theory/types";
import {
    Pitch, PitchType
} from "../../components/elements/element-group-setting/pitch-slider/models/types";
import {NoteFactory} from "./NoteFactory";
import {MutableNote} from "./MutableNote";

export class Note implements Equatable {
    private _midiNote: MidiNote;
    private _noteNumber: number;
    private _noteData: NoteData;
    constructor(midiNote: MidiNote = new MidiNote()) {
        this._midiNote = midiNote;
        this._noteNumber = midiNote.noteId - 21;
        this._noteData = NoteData.getByNoteNumber(this._noteNumber);
    }

    static fromMidiNumber(midiNote: number): Note {
        const note: Note = new Note(new MidiNote(midiNote));
        return note;
    }

    toMutableNote(pitch: Pitch = "natural"): MutableNote {
        const mutableNote: MutableNote = new MutableNote(this, pitch);
        return mutableNote;
    }

    toVexFlowKey(pitch: Pitch = "natural"): string {
        let noteName: string = this.noteData.noteName;
        if (pitch === "sharp") {
            if (this.isSharp()) {
                noteName = this.noteData.noteName;
            } else if (this.isFlat()) {
                if (this.isSharp()) {
                    noteName = this.noteData.asSharp();
                } else {
                    noteName = this.noteData.noteName;
                }
            } else {
                noteName = this.noteData.asSharp();
            }
        } else if (pitch === "flat") {
            if (this.isSharp()) {
                noteName = this.noteData.asFlat();
            } else {
                noteName = this.noteData.noteName;
            }
        } else if (pitch === "natural") {
            noteName = this.noteData.noteName;
        } else {
            noteName = this.noteData.noteName;
        }

        noteName = noteName.toLowerCase();
        return `${noteName}/${this.noteData.octave}`;
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
                                    pitchType: PitchType = "auto",
                                    pitch: Pitch = "natural",
                                    duration: string = "w"): [StaveNote, StaveNote] {
        const trebleNotes: Note[] = notes.filter((note: Note): boolean => note.isTrebleClef());
        const bassNotes: Note[] = notes.filter((note: Note): boolean => note.isBassClef());
        const trebleNote: StaveNote = Note.allToStaveNoteChord(trebleNotes, pitchType, pitch, duration);
        const bassNote: StaveNote = Note.allToStaveNoteChord(bassNotes, pitchType, pitch, duration);
        return [trebleNote, bassNote];
    }

    static sortNotes(notes: Note[]): Note[] {
        return notes.sort((noteOne: Note, noteTwo: Note): number => {
            const noteOneNumber: number = noteOne.noteData.noteNumber;
            const noteTwoNumber: number = noteTwo.noteData.noteNumber;
            return noteOneNumber - noteTwoNumber;
        });
    }

    static allToStaveNoteChord(notes: Note[],
                               pitchType: PitchType = "auto",
                               pitch: Pitch = "natural",
                               duration: string = "w"): StaveNote {
        if (notes.length === 0) {
            return new StaveNote({
                keys: ["r/4"],
                duration: duration,
            });
        }
        let pitches: Pitch[] | undefined = undefined;
        if (pitchType === "auto") {
            let [factoryNotes, factoryPitches] = NoteFactory.getNoteWithPitches(notes);
            notes = factoryNotes;
            pitches = factoryPitches;
        }

        const lowestNote: Note = Note.getLowestNote(notes);
        const clef: Clef = lowestNote.getClef();
        const accidentalMap: Record<number, string> = {};
        const clefMap: Record<number, string> = {};
        const staveNote = new StaveNote({
            keys: notes.map((note: Note, index: number) => {
                if (pitches && pitches[index]) {
                    pitch = pitches[index];
                }
                clefMap[index] = note.getClef();
                const vexFlowKey: string = note.toVexFlowKey(pitch);
                if (vexFlowKey.includes("#")) {
                    accidentalMap[index] = "#";
                } else if (vexFlowKey.includes("b")) {
                    if (!note.noteData.noteName.includes("B")) {
                        accidentalMap[index] = "b";
                    }
                } else {
                    accidentalMap[index] = "";
                }
                return vexFlowKey;
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

    static getHighestNote(notes: Note[]): Note {
        return notes.reduce((prev: Note, current: Note): Note => {
            return (prev.noteNumber > current.noteNumber) ? prev : current;
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

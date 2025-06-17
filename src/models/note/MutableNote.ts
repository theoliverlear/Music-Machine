import {Note} from "./Note";
import {
    Pitch
} from "../../components/elements/element-group-setting/pitch-slider/models/types";
import {Mutable} from "../behavior/Mutable";
import {KeySignature} from "../signature/KeySignature";
import {PitchAccidental} from "../signature/types";
import {StaveNote, Accidental as VexAccidental} from "vexflow";
import {Clef} from "../theory/types";

export class MutableNote implements Mutable<Pitch> {
    private _baseNote: Note;
    private _mutatedName: string;

    constructor(baseNote: Note = new Note(),
                pitch: Pitch = "natural") {
        this._baseNote = baseNote;
        this._mutatedName = baseNote.noteData.noteName;
        this.mutate(pitch);
    }

    static allToMutableNotes(notes: Note[], pitch: Pitch = "natural"): MutableNote[] {
        return notes.map((note: Note): MutableNote => new MutableNote(note, pitch));
    }

    static sortNotes(notes: MutableNote[]): MutableNote[] {
        return notes.sort((noteOne: MutableNote, noteTwo: MutableNote): number => {
            const noteOneNumber: number = noteOne._baseNote.noteData.noteNumber;
            const noteTwoNumber: number = noteTwo._baseNote.noteData.noteNumber;
            return noteOneNumber - noteTwoNumber;
        });
    }

    static fromMidiNumber(midiNumber: number): MutableNote {
        const note: Note = Note.fromMidiNumber(midiNumber);
        return new MutableNote(note);
    }

    toVexFlowKey(): string {
        return this._mutatedName.toLowerCase() + "/" + this._baseNote.noteData.octave;
    }

    public mutateToKeySignature(keySignature: KeySignature): void {
        const pitchAccidental: PitchAccidental = keySignature.getAccidental(this);
        if (pitchAccidental !== "none") {
            this.mutate(pitchAccidental);
        }
    }

    static allToTrebleBassChord(mutableNotes: MutableNote[],
                                keySignature: KeySignature): [StaveNote, StaveNote] {
        const trebleNotes: MutableNote[] = mutableNotes.filter((mutableNote: MutableNote): boolean => mutableNote.isTrebleClef());
        const bassNotes: MutableNote[] = mutableNotes.filter((mutableNote: MutableNote): boolean => mutableNote.isBassClef());
        const trebleChord: StaveNote = MutableNote.allToStaveChord(trebleNotes, keySignature);
        const bassChord: StaveNote = MutableNote.allToStaveChord(bassNotes, keySignature);
        return [trebleChord, bassChord];
    }

    static allToStaveChord(mutableNotes: MutableNote[],
                           keySignature: KeySignature): StaveNote {
        if (mutableNotes.length === 0) {
            return new StaveNote({
                keys: ["r/4"],
                duration: "w",
            });
        }
        mutableNotes = MutableNote.sortNotes(mutableNotes);
        mutableNotes.forEach((mutableNote: MutableNote): void => {
            mutableNote.mutateToKeySignature(keySignature);
        });
        const asNotes: Note[] = mutableNotes.map((mutableNote: MutableNote): Note => mutableNote.baseNote);
        const lowestNote: Note = Note.getLowestNote(asNotes);
        const clef: Clef = lowestNote.getClef();
        const accidentalMap: Record<number, string> = {};
        const staveNote: StaveNote = new StaveNote({
            keys: mutableNotes.map((mutableNote: MutableNote, index: number): string => {
                const vexFlowKey: string = mutableNote.toVexFlowKey();
                const accidental: PitchAccidental = keySignature.getAccidental(mutableNote);
                if (accidental === "sharp") {
                    accidentalMap[index] = "#";
                } else if (accidental === "flat") {
                    accidentalMap[index] = "b";
                } else if (accidental === "natural") {
                    accidentalMap[index] = "n";
                } else {
                    accidentalMap[index] = "";
                }
                return vexFlowKey;
            }),
            duration: "w",
            clef: clef,
        });
        for (const [index, accidental] of Object.entries(accidentalMap)) {
            if (accidental === "#") {
                staveNote.addModifier(new VexAccidental("#"), parseInt(index));
            } else if (accidental === "b") {
                staveNote.addModifier(new VexAccidental("b"), parseInt(index));
            } else if (accidental === "n") {
                staveNote.addModifier(new VexAccidental("n"), parseInt(index));
            }
        }
        return staveNote;
    }

    public mutate(pitch: Pitch): void {
        let noteName: string = this._baseNote.noteData.noteName;
        if (pitch === "sharp") {
            if (this._baseNote.isSharp()) {
                noteName = this._baseNote.noteData.noteName;
            } else if (this._baseNote.isFlat()) {
                if (this._baseNote.isSharp()) {
                    noteName = this._baseNote.noteData.asSharp();
                } else {
                    noteName = this._baseNote.noteData.noteName;
                }
            } else {
                noteName = this._baseNote.noteData.asSharp();
            }
        } else if (pitch === "flat") {
            if (this._baseNote.isSharp()) {
                noteName = this._baseNote.noteData.asFlat();
            } else {
                noteName = this._baseNote.noteData.noteName;
            }
        } else if (pitch === "natural") {
            noteName = this._baseNote.noteData.noteName;
        } else {
            noteName = this._baseNote.noteData.noteName;
        }
        this._mutatedName = noteName;
    }

    removeMutation(): void {
        this._mutatedName = this._baseNote.noteData.noteName;
    }

    isSharp(): boolean {
        return this._mutatedName.includes("#");
    }

    isFlat(): boolean {
        return this._mutatedName.includes("b");
    }

    isNatural(): boolean {
        return !this.isSharp() && !this.isFlat();
    }

    isTrebleClef(): boolean {
        return this.baseNote.isTrebleClef();
    }

    isBassClef(): boolean {
        return this.baseNote.isBassClef();
    }

    get baseNote(): Note {
        return this._baseNote;
    }

    get mutatedName(): string {
        return this._mutatedName;
    }

    public mutateAndGetName(pitch: Pitch): string {
        this.mutate(pitch);
        return this._mutatedName;
    }

    static fromPitch(note: Note, pitch: Pitch) {
        return new MutableNote(note, pitch);
    }
}
import {Note} from "./Note";
import {
    Pitch
} from "../../components/elements/element-group-setting/pitch-slider/models/types";
import {Mutable} from "../behavior/Mutable";

export class MutableNote implements Mutable<Pitch> {
    private _baseNote: Note;
    private _mutatedName: string;

    constructor(baseNote: Note = new Note(),
                pitch: Pitch = "natural") {
        this._baseNote = baseNote;
        this._mutatedName = baseNote.noteData.noteName;
        this.mutate(pitch);
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

    isSharp(): boolean {
        return this._mutatedName.includes("#");
    }

    isFlat(): boolean {
        return this._mutatedName.includes("b");
    }

    isNatural(): boolean {
        return !this.isSharp() && !this.isFlat();
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
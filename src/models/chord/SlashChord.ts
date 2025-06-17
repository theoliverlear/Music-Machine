import {Chord} from "./Chord";
import {Note} from "../note/Note";

export class SlashChord {
    private _chord: Chord;
    private _rootNote: Note;
    private _name: string;
    constructor(chord: Chord = new Chord(),
                rootNote: Note = new Note()) {
        this._chord = chord;
        this._rootNote = rootNote;
        this._name = this.determineName();
    }

    get name(): string {
        this._name = this.determineName();
        return this._name;
    }

    determineName(): string {
        return `${this._chord.fullName}/${this._rootNote.noteData.noteName}`;
    }

    static fromNotes(notes: Note[]): SlashChord {
        if (!SlashChord.isSlashChord(notes)) {
            throw new Error("Invalid notes for a slash chord.");
        } else {
            notes = Note.sortNotes(notes);
            const rootNote: Note = notes[0];
            const nonRootNotes: Note[] = notes.slice(1);
            const chord: Chord = new Chord(nonRootNotes);
            return new SlashChord(chord, rootNote);
        }
    }

    static isSlashChord(notes: Note[]): boolean {
        if (notes.length < 3) {
            return false;
        }
        notes = Note.sortNotes(notes);
        const nonRootNotes: Note[] = notes.slice(1);
        const chord: Chord = new Chord(nonRootNotes);
        return !chord.isUnknownChord();
    }
}
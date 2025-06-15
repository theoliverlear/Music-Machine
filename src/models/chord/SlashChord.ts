import {Chord} from "./Chord";
import {Note} from "../note/Note";

export class SlashChord {
    private _chord: Chord;
    private _rootNote: Note;
    constructor(chord: Chord = new Chord(),
                rootNote: Note = new Note()) {
        this._chord = chord;
        this._rootNote = rootNote;
    }
}
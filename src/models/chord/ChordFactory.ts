import { Chord } from "./Chord";
import {SlashChord} from "./SlashChord";
import {
    Pitch
} from "../../components/elements/element-group-setting/pitch-slider/models/types";
import {NoteFactory} from "../note/NoteFactory";
import {Note} from "../note/Note";

export class ChordFactory {
    static fromNotes(notes: Note[]): Chord | SlashChord {
        return new Chord();
    }
    
    static getAutoPitch(notes: Note[]): Pitch {
        if (notes.length <= 1) {
            return "natural";
        }
        const [factoryNotes, factoryPitches] = NoteFactory.getNoteWithPitches(notes);
        return factoryPitches[0];
    }
}
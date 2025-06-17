import {Note} from "./Note";
import {
    Pitch
} from "../../components/elements/element-group-setting/pitch-slider/models/types";
import { Chord } from "../chord/Chord";
import {Interval} from "../chord/Interval";
import {KeySignature} from "../signature/KeySignature";
import {MutableNote} from "./MutableNote";
import {PitchAccidental} from "../signature/types";

export class NoteFactory {
    // TODO: Refactor this code to use more concrete calculations using key
    //       signatures, intervals, and costs.

    static mutateToKeySignature(notes: Note[], keySignature: KeySignature): MutableNote[] {
        const mutableNotes: MutableNote[] = notes.map((note: Note): MutableNote => new MutableNote(note));
        mutableNotes.forEach((mutableNote: MutableNote)=> {
           mutableNote.mutateToKeySignature(keySignature);
        });
        return mutableNotes;
    }

    static getNoteWithPitches(notes: Note[]): [Note[], Pitch[]] {
        notes = Note.sortNotes(notes);
        if (notes.length === 0) {
            return [[], []];
        } else if (notes.length === 1) {
            const pitch: Pitch = NoteFactory.getPitchByNote(notes[0]);
            return [[notes[0]], [pitch]];
        } else if (notes.length === 2) {
            const [pitchOne, pitchTwo]: [Pitch, Pitch] = NoteFactory.getDuoPitch(notes[0], notes[1]);
            return [[notes[0], notes[1]], [pitchOne, pitchTwo]];
        } else if (notes.length === 3) {
            const [pitchOne, pitchTwo, pitchThree]: [Pitch, Pitch, Pitch] = NoteFactory.getTrioPitch(notes[0], notes[1], notes[2]);
            return [[notes[0], notes[1], notes[2]], [pitchOne, pitchTwo, pitchThree]];
        }
        const factoryPitches: Pitch[] = [];
        for (let i: number = 0; i < notes.length; i += 3) {
            const noteOne: Note = notes[i];
            let noteTwo: Note | null = null;
            let noteThree: Note | null = null;
            if (i + 1 < notes.length) {
                noteTwo = notes[i + 1];
            }
            if (i + 2 < notes.length) {
                noteThree = notes[i + 2];
            }
            if (noteTwo && noteThree) {
                const [pitchOne, pitchTwo, pitchThree]: [Pitch, Pitch, Pitch] = NoteFactory.getTrioPitch(noteOne, noteTwo, noteThree);
                factoryPitches.push(pitchOne, pitchTwo, pitchThree);
            } else if (noteTwo) {
                const [pitchOne, pitchTwo]: [Pitch, Pitch] = NoteFactory.getDuoPitch(noteOne, noteTwo);
                factoryPitches.push(pitchOne, pitchTwo);
            } else {
                factoryPitches.push(NoteFactory.getPitchByNote(noteOne));
            }
        }
        return [notes, factoryPitches];
    }


    static getTrioPitch(noteOne: Note, noteTwo: Note, noteThree: Note): [Pitch, Pitch, Pitch] {
        const allThirds: boolean = Interval.isThirdInterval(noteOne, noteTwo) && Interval.isThirdInterval(noteTwo, noteThree);
        if (!allThirds) {
            return [
                NoteFactory.getPitchByNote(noteOne),
                NoteFactory.getPitchByNote(noteTwo),
                NoteFactory.getPitchByNote(noteThree)
            ]
        }
        let pitchOne: Pitch = NoteFactory.getPitchByNote(noteOne);
        let [pitchTwo, pitchThree]: [Pitch, Pitch] = NoteFactory.getDuoPitch(noteTwo, noteThree);
        // If 1 is natural, 2 is natural, 3 is natural
        if (noteOne.isNatural() && noteTwo.isNatural() && noteThree.isNatural()) {
            pitchOne = "natural";
            pitchTwo = "natural";
            pitchThree = "natural";
        } else if (noteOne.isNatural() && noteTwo.isNatural() && noteThree.isSharp()) {
            pitchOne = "natural";
            pitchTwo = "natural";
            pitchThree = "sharp";
        } else if (noteOne.isNatural() && noteTwo.isSharp() && noteThree.isNatural()) {
            pitchOne = "natural";
            pitchTwo = "flat";
            pitchThree = "natural";
            const noteOneName: string = noteOne.noteData.noteName;
            const noteName: string = noteTwo.noteData.noteName;
            if (noteName.includes("F#") ||
                noteName.includes("G#") ||
                noteName.includes("C#")) {
                pitchOne = "natural";
                pitchTwo = "sharp";
                pitchThree = "natural";
                if (noteOneName.includes("F")) {
                    pitchOne = "natural";
                    pitchTwo = "flat";
                    pitchThree = "natural";
                }
            }
        } else if (noteOne.isNatural() && noteTwo.isSharp() && noteThree.isSharp()) {
            pitchOne = "natural";
            pitchTwo = "sharp";
            pitchThree = "sharp";
        } else if (noteOne.isSharp() && noteTwo.isNatural() && noteThree.isNatural()) {
            pitchOne = "flat";
            pitchTwo = "natural";
            pitchThree = "natural";
        } else if (noteOne.isSharp() && noteTwo.isNatural() && noteThree.isSharp()) {
            pitchOne = "sharp";
            pitchTwo = "natural";
            pitchThree = "sharp";

            const noteName: string = noteOne.noteData.noteName;
            if (noteName.includes("D#") || noteName.includes("C#") || noteName.includes("G#")) {
                const noteInterval: Interval = Interval.getIntervalBetweenNotes(noteOne, noteTwo);
                if (noteName.includes("D#")) {
                    pitchOne = "flat";
                    pitchTwo = "natural";
                    pitchThree = "flat";
                } else if (noteName.includes("C#")) {
                    if (noteInterval === Interval.minorThird) {
                        pitchOne = "sharp";
                        pitchTwo = "natural";
                        pitchThree = "sharp";
                    } else if (noteInterval === Interval.majorThird) {
                        pitchOne = "sharp";
                        pitchTwo = "sharp";
                        pitchThree = "sharp";
                    }
                } else if (noteName.includes("G#")) {
                    if (noteInterval === Interval.minorThird) {
                        pitchOne = "sharp";
                        pitchTwo = "natural";
                        pitchThree = "sharp";
                    } else if (noteInterval === Interval.majorThird) {
                        pitchOne = "sharp";
                        pitchTwo = "sharp";
                        pitchThree = "sharp";
                    }
                }
            }

        } else if (noteOne.isSharp() && noteTwo.isSharp() && noteThree.isNatural()) {
            pitchOne = "flat";
            pitchTwo = "flat";
            pitchThree = "natural";
        } else if (noteOne.isSharp() && noteTwo.isSharp() && noteThree.isSharp()) {
            pitchOne = "sharp";
            pitchTwo = "sharp";
            pitchThree = "sharp";
        }
        const spansFifth: boolean = Interval.getIntervalBetweenNotes(noteOne, noteThree) === Interval.perfectFifth;
        if (!spansFifth) {
            if (pitchOne === "natural" && pitchTwo === "natural" && pitchThree === "sharp") {
                pitchOne = "natural";
                pitchTwo = "natural";
                pitchThree = "flat";
            }
        }
        return [pitchOne, pitchTwo, pitchThree];
    }

    static getPitchByNote(note: Note): Pitch {
        if (note.isNatural()) {
            return "natural";
        } else if (note.isSharp()) {
            return "sharp";
        } else {
            return "flat";
        }
    }

    static getDuoPitch(noteOne: Note, noteTwo: Note): [Pitch, Pitch] {
        const isThird: boolean = Interval.isThirdInterval(noteOne, noteTwo);
        if (!isThird) {
            return [NoteFactory.getPitchByNote(noteOne), NoteFactory.getPitchByNote(noteTwo)];
        }
        let pitchOne: Pitch = "natural";
        let pitchTwo: Pitch = "natural";
        if (noteOne.isNatural()) {
            // If 1 is natural, 2 is natural
            if (noteTwo.isNatural()) {
                pitchOne = "natural";
                pitchTwo = "natural";
            } else if (noteTwo.isSharp()) {
                // If 1 is natural, 2 is sharp
                pitchOne = "natural";
                pitchTwo = "flat";
            }
        } else if (noteOne.isSharp()) {
            // If 1 is sharp, 2 is natural
            if (noteTwo.isNatural()) {
                pitchOne = "sharp";
                pitchTwo = "natural";
            } else if (noteTwo.isSharp()) {
                // If 1 is sharp, 2 is sharp
                pitchOne = "sharp";
                pitchTwo = "sharp";
            }
        }
        return [pitchOne, pitchTwo];
    }
}
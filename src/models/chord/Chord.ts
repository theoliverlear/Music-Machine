import {Note} from "../note/Note";
import {ChordInterval} from "./ChordInterval";
import {Interval} from "./Interval";
import {MusicSet} from "../MusicSet";
import {
    Pitch
} from "../../components/elements/element-group-setting/pitch-slider/models/types";

export class Chord {
    private _name: string;
    private _notes: MusicSet<Note>
    private _fullName: string;
    constructor(notes: Note[] = []) {
        this._notes = new MusicSet(notes);
        // TODO: Centralize note sorting to remove verbose usage.
        this.sortNotesByNoteNumber();
        this._name = this.determineChordName();
        this._fullName = this.determineFullName();
    }

    static sortNotes(notes: Note[]): Note[] {
        return notes.sort((noteOne: Note, noteTwo: Note): number => {
            const noteOneNumber: number = noteOne.noteData.noteNumber;
            const noteTwoNumber: number = noteTwo.noteData.noteNumber;
            return noteOneNumber - noteTwoNumber;
        });
    }

    private sortNotesByNoteNumber(): void {
        const sortedArray: Note[] = Chord.sortNotes(this._notes.asArray);
        this._notes.musicItems = new MusicSet(sortedArray).musicItems;
    }

    get fullName(): string {
        this._fullName = this.determineFullName();
        return this._fullName;
    }

    isTriad(): boolean {
        return this._notes.size === 3;
    }

    isUninvertedTriad(): boolean {
        const isTriad: boolean = this.isTriad();
        if (!isTriad) {
            return false;
        }
        const noteArray: Note[] = this._notes.asArray;
        const rootNote: Note = noteArray[0];
        const thirdNote: Note = noteArray[1];
        const fifthNote: Note = noteArray[2];
        const intervalToThird: Interval = Interval.getIntervalBetweenNotes(rootNote, thirdNote);
        const intervalToFifth: Interval = Interval.getIntervalBetweenNotes(rootNote, fifthNote);
        return (intervalToThird.semitones === 3 || intervalToThird.semitones === 4) && intervalToFifth.semitones === 7;
    }

    getPitchedFullName(pitch: Pitch): string {
        return this.determineFullName(pitch);
    }

    determineFullName(pitch: Pitch = "sharp"): string {
        this.sortNotesByNoteNumber();
        const numNotes: number = this._notes.size;
        if (numNotes < 3 || this._name === "Unknown") {
            return "Unknown Chord";
        }
        const match: RegExpMatchArray | null = this._name.match(/\((\d)(?:st|nd|rd) Inversion\)/);
        let inversionNumber: number = 0;
        if (match) {
            inversionNumber = parseInt(match[1]);
        }
        const rootIndex: number = (numNotes - inversionNumber) % numNotes;
        const rootNote: Note | undefined  = this._notes.getByIndex(rootIndex);
        if (!rootNote) {
            return "Unknown Chord";
        }
        if (pitch === "flat") {
            return `${rootNote.noteData.asFlat} ${this._name}`;
        }
        return `${rootNote.noteData.noteName} ${this._name}`;
    }

    determineChordName(): string {
        if (this._notes.size < 3) {
            return "Unknown";
        }
        this.sortNotesByNoteNumber();
        console.log("NOTES IN CHORD:");
        this._notes.asArray.forEach((note: Note): void => {
            console.log(`Note: ${note.noteData.noteName}`, `Note Number: ${note.noteData.noteNumber}`);
        });
        let chordIntervals: MusicSet<Interval> = new MusicSet<Interval>();
        chordIntervals.add(Interval.unison);
        for (let i: number = 0; i < this._notes.size - 1; i++) {
            let noteArray: Note[] = this._notes.asArray;
            let intervalBetweenNotes: Interval = Interval.getIntervalBetweenNotes(noteArray[0], noteArray[i + 1]);
            chordIntervals.add(intervalBetweenNotes);
        }
        chordIntervals.asArray.forEach((interval: Interval): void => {
            // console.log(interval.name);
        });
        let chordInterval: ChordInterval = new ChordInterval(chordIntervals.asArray);
        let nameByIntervals: string = chordInterval.getNameByIntervals();

        if (nameByIntervals === "Unknown") {
            const noteArray: Note[] = this._notes.asArray;
            for (let i: number = 0; i < noteArray.length; i++) {
                console.log("----------------------------------------------")
                const rootNote: Note = noteArray[i];
                const musicSet: MusicSet<Note> = new MusicSet<Note>();
                musicSet.add(rootNote);
                for (let j: number = 0; j < noteArray.length; j++) {
                    if (j !== i) {
                        const note: Note = noteArray[j];
                        musicSet.add(note);
                    }
                }
                const newChordIntervals: MusicSet<Interval> = new MusicSet<Interval>();
                newChordIntervals.add(Interval.unison);
                for (let k: number = 0; k < musicSet.size - 1; k++) {
                    let noteArray: Note[] = musicSet.asArray;
                    noteArray = Chord.sortNotes(noteArray);
                    const intervalBetweenNotes: Interval = Interval.getIntervalBetweenNotes(noteArray[0], noteArray[k + 1]);
                    newChordIntervals.add(intervalBetweenNotes);
                }
                const newChordInterval: ChordInterval = new ChordInterval(newChordIntervals.asArray);
                newChordInterval.intervals.asArray.forEach((interval: Interval): void => {
                    console.log(interval.name);
                });
                musicSet.asArray.forEach((note: Note): void => {
                    console.log(`Note: ${note.noteData.noteName}`, `Note Number: ${note.noteData.noteNumber}`);
                })
                newChordInterval.sortSmallestToLargest();
                nameByIntervals = newChordInterval.getNameByIntervals();
                if (nameByIntervals !== "Unknown") {
                    return nameByIntervals;
                }
                // Create a new ChordInterval with the remaining intervals
            }
        }
        // If name is unknown, reloop with different root note

        return nameByIntervals;
    }

    private shouldNormalizeMajorMinor(nameByIntervals: string) {
        return nameByIntervals === "Major" || nameByIntervals === "Minor";
    }

    updateChordByCurrentNotes(currentNotes: Note[]): void {
        this._notes = new MusicSet(currentNotes);
        // this.sortNotesByNoteNumber();
        this._name = this.determineChordName();
    }
    addNote(note: Note): void {
        this._notes.add(note);
        // this.sortNotesByNoteNumber();

        this._name = this.determineChordName();
    }
    removeNote(note: Note): void {
        this._notes.remove(note);
        // this.sortNotesByNoteNumber();
        this._name = this.determineChordName();
    }
    get name(): string {
        // this.sortNotesByNoteNumber();
        this._name = this.determineChordName();
        console.log(`Chord name: ${this._name}`);
        return this._name;
    }

    get notes(): MusicSet<Note> {
        this.sortNotesByNoteNumber();
        return this._notes;
    }

}
import {Note} from "../note/Note";
import {ChordInterval} from "./ChordInterval";
import {Interval} from "./Interval";
import {MusicSet} from "../MusicSet";

export class Chord {
    private _name: string;
    private _notes: MusicSet<Note>
    private _fullName: string;
    constructor(notes: Note[] = []) {
        this._notes = new MusicSet(notes);
        this._name = this.determineChordName();
        this._fullName = this.determineFullName();
    }

    get fullName(): string {
        this._fullName = this.determineFullName();
        return this._fullName;
    }

    determineFullName(): string {
        if (this._notes.size < 3 || this._name === "Unknown") {
            return "Unknown Chord";
        }
        if (this._name.includes("First")) {
            if (this._name.includes("Major") || this._name.includes("Minor")) {
                const root: Note = this._notes.notesArray[2];
                return `${root.noteData.noteName} ${this._name}`;
            }
        } else if (this._name.includes("Second")) {
            if (this._name.includes("Major") || this._name.includes("Minor")) {
                const root: Note = this._notes.notesArray[1];
                return `${root.noteData.noteName} ${this._name}`;
            }
        }
        return `${this._notes.notesArray[0].noteData.noteName} ${this._name}`;
    }

    determineChordName(): string {
        if (this._notes.size < 3) {
            return "Unknown";
        }
        let chordIntervals: MusicSet<Interval> = new MusicSet<Interval>();
        chordIntervals.add(Interval.unison);
        for (let i: number = 0; i < this._notes.size - 1; i++) {
            let noteArray: Note[] = this._notes.notesArray;
            let intervalBetweenNotes: Interval = Interval.getIntervalBetweenNotes(noteArray[0], noteArray[i + 1]);
            chordIntervals.add(intervalBetweenNotes);
        }
        chordIntervals.notesArray.forEach((interval: Interval): void => {
            console.log(interval.name);
        });
        let chordInterval: ChordInterval = new ChordInterval(chordIntervals.notesArray);
        let nameByIntervals: string = chordInterval.getNameByIntervals();
        // if unknown, reloop with different root note

        // if major or minor, check if all notes are in descending order, if so return the inverted name
        if (this.shouldNormalizeMajorMinor(nameByIntervals)) {
            // TODO: Does not work all the time.
            const noteArray: Note[] = this._notes.notesArray;
            let isDescending: boolean = true;
            for (let i: number = 0; i < noteArray.length - 1; i++) {
                if (noteArray[i].noteNumber < noteArray[i + 1].noteNumber) {
                    isDescending = false;
                    break;
                }
            }
            if (isDescending) {
                if (nameByIntervals === "Major") {
                    return "Minor";
                } else if (nameByIntervals === "Minor") {
                    return "Major";
                }
            }
        }

        if (nameByIntervals === "Unknown") {
            const noteArray: Note[] = this._notes.notesArray;
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
                    const noteArray: Note[] = musicSet.notesArray;
                    const intervalBetweenNotes: Interval = Interval.getIntervalBetweenNotes(noteArray[0], noteArray[k + 1]);
                    newChordIntervals.add(intervalBetweenNotes);
                }
                const newChordInterval: ChordInterval = new ChordInterval(newChordIntervals.notesArray);
                newChordInterval.intervals.notesArray.forEach((interval: Interval): void => {
                    console.log(interval.name);
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
        this._name = this.determineChordName();
    }
    addNote(note: Note): void {
        this._notes.add(note);
        this._name = this.determineChordName();
    }
    removeNote(note: Note): void {
        this._notes.remove(note);
        this._name = this.determineChordName();
    }
    get name(): string {
        this._name = this.determineChordName();
        return this._name;
    }
    get notes(): MusicSet<Note> {
        return this._notes;
    }

}
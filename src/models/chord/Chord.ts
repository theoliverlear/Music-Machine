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
        // TODO: Centralize note sorting to remove verbose usage.
        this.sortNotesByNoteNumber();
        this._name = this.determineChordName();
        this._fullName = this.determineFullName();
    }

    private sortNotesByNoteNumber(): void {
        const sortedArray: Note[] = this._notes.notesArray.sort((noteOne: Note, noteTwo: Note): number => {
            const noteOneNumber: number = noteOne.noteData.noteNumber;
            const noteTwoNumber: number = noteTwo.noteData.noteNumber;
            return noteOneNumber - noteTwoNumber;
        });
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
        const noteArray: Note[] = this._notes.notesArray;
        const rootNote: Note = noteArray[0];
        const thirdNote: Note = noteArray[1];
        const fifthNote: Note = noteArray[2];
        const intervalToThird: Interval = Interval.getIntervalBetweenNotes(rootNote, thirdNote);
        const intervalToFifth: Interval = Interval.getIntervalBetweenNotes(rootNote, fifthNote);
        return (intervalToThird.semitones === 3 || intervalToThird.semitones === 4) && intervalToFifth.semitones === 7;
    }
    
    determineFullName(): string {
        this.sortNotesByNoteNumber();
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
        this.sortNotesByNoteNumber();
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
        this.sortNotesByNoteNumber();
        this._name = this.determineChordName();
    }
    addNote(note: Note): void {
        this._notes.add(note);
        this.sortNotesByNoteNumber();
        this._name = this.determineChordName();
    }
    removeNote(note: Note): void {
        this._notes.remove(note);
        this.sortNotesByNoteNumber();
        this._name = this.determineChordName();
    }
    get name(): string {
        this.sortNotesByNoteNumber();
        this._name = this.determineChordName();
        return this._name;
    }
    get notes(): MusicSet<Note> {
        this.sortNotesByNoteNumber();
        return this._notes;
    }

}
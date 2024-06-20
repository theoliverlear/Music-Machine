import {Note} from "./Note";
import {ChordInterval} from "./ChordInterval";
import {Interval} from "./Interval";

export class Chord {
    private _name: string;
    private _notes: Note[];
    constructor(notes: Note[] = []) {
        this._notes = notes;
        for (let i: number = 0; i < this._notes.length; i++) {
            console.log(this._notes[i].noteData.fullNoteName);
        }
        this._name = this.determineChordName();
    }
    determineChordName(): string {
        let chordIntervals: Interval[] = [];
        chordIntervals.push(Interval.unison);
        for (let i: number = 0; i < this._notes.length - 1; i++) {
            let intervalBetweenNotes: Interval = Interval.getIntervalBetweenNotes(this._notes[0], this._notes[i + 1]);
            // console.log(intervalBetweenNotes);
            if (chordIntervals.find((interval: Interval): boolean => {
                return interval === intervalBetweenNotes;
            })) {
                continue;
            }
            chordIntervals.push(intervalBetweenNotes);
        }
        let chordInterval: ChordInterval = new ChordInterval(chordIntervals);
        // console.log(chordInterval.getNameByIntervals());
        for (let i: number = 0; i < chordIntervals.length; i++) {
            console.log(chordIntervals[i].name);
        }
        return chordInterval.getNameByIntervals();
    }
    updateChordByCurrentNotes(currentNotes: Note[]): void {
        this._notes = currentNotes;
        this._name = this.determineChordName();
    }
    addNote(note: Note): void {
        this._notes.push(note);
        this._name = this.determineChordName();
    }
    removeNote(note: Note): void {
        this._notes = this._notes.filter((currentNote: Note): boolean => {
            return currentNote !== note;
        });
    }
    get name(): string {
        return this._name;
    }
    get notes(): Note[] {
        return this._notes;
    }
}
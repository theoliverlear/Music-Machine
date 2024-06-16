import {Note} from "./Note";
import {ChordInterval} from "./ChordInterval";
import {Interval} from "./Interval";

export class Chord {
    private _name: string;
    private _notes: Note[];
    constructor(name: string = "", notes: Note[] = []) {
        this._notes = notes;
        this._name = this.determineChordName();
    }
    determineChordName(): string {
        let chordIntervals: Interval[] = [];
        chordIntervals.push(Interval.unison);
        for (let i: number = 0; i < this._notes.length - 1; i++) {
            chordIntervals.push(Interval.getIntervalBetweenNotes(this._notes[i], this._notes[i + 1]));
        }
        let chordInterval: ChordInterval = new ChordInterval(chordIntervals);
        return chordInterval.getNameByIntervals();
    }
    get name(): string {
        return this._name;
    }
    get notes(): Note[] {
        return this._notes;
    }
}
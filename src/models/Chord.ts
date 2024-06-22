import {Note} from "./Note";
import {ChordInterval} from "./ChordInterval";
import {Interval} from "./Interval";
import {MusicSet} from "./MusicSet";

export class Chord {
    private _name: string;
    private _notes: MusicSet<Note>
    constructor(notes: Note[] = []) {
        this._notes = new MusicSet(notes);
        this._name = this.determineChordName();
    }
    determineChordName(): string {
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
        return chordInterval.getNameByIntervals();
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
        return this._name;
    }
    get notes(): MusicSet<Note> {
        return this._notes;
    }

}
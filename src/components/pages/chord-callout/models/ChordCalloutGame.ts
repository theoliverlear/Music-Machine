import {Chord} from "../../../../models/chord/Chord";
import {ChordDifficulty} from "../../../../models/chord/ChordDifficulty";
import {ChordInterval} from "../../../../models/chord/ChordInterval";
import {Interval} from "../../../../models/chord/Interval";
import {Note} from "../../../../models/note/Note";

export class ChordCalloutGame {
    private _score: number;
    private _chords: Chord[];
    private _secondsPerChord: number;
    private _currentChordIndex: number;

    constructor() {
        this._score = 0;
        this._chords = [];
        this._secondsPerChord = 5;
        this._currentChordIndex = 0;
    }

    public generateRandomChord(difficulty: ChordDifficulty): Chord {
        switch (difficulty) {
            case ChordDifficulty.EASY:
                return this.getEasyChord();
            default:
                throw new Error(`Unsupported chord difficulty: ${difficulty}`);
        }
    }


    private getNoteInversionSplit(difficulty: ChordDifficulty): [number, number] {
        let numNotes: number;
        let inversionSplit: number;
        switch (difficulty) {
            case ChordDifficulty.EASY:
                throw new Error("Inversion split not implemented for easy difficulty");
            case ChordDifficulty.MEDIUM:
                // A random number between 0 and 1 (only as integers)
                inversionSplit = Math.floor(Math.random() * 2);
                numNotes = difficulty - inversionSplit;
                return [numNotes, inversionSplit];
            case ChordDifficulty.HARD:
                inversionSplit = Math.floor(Math.random() * 2);
                numNotes = difficulty - inversionSplit;
                return [numNotes, inversionSplit];
            case ChordDifficulty.EXPERT:
                inversionSplit = Math.floor(Math.random() * 3);
                numNotes = difficulty - inversionSplit;
                return [numNotes, inversionSplit];
            default:
                throw new Error(`Unsupported chord difficulty: ${difficulty}`);
        }
    }

    private getEasyChord(): Chord {
        const numUninvertedTriads: number = ChordInterval.uninvertedTriadIntervals.length;
        const randomIndex: number = Math.floor(Math.random() * numUninvertedTriads);
        const randomInterval: Interval[] = ChordInterval.uninvertedTriadIntervals[randomIndex];
        const baseNoteNumber: number = 60;
        const notes: Note[] = randomInterval.map((interval: Interval): Note => {
            const noteNumber: number = baseNoteNumber + interval.semitones;
            return Note.fromMidiNumber(noteNumber);
        });
        const chord: Chord = new Chord(notes);
        return chord;
    }

    static generateRandomChords(count: number): Chord[] {
        return [];
    }

    public getTimeBasedScore(startTime: number,
                             endTime: number): number {
        const timeTaken: number = endTime - startTime;
        const percentage: number = Math.min(timeTaken / this._secondsPerChord, 1);
        return Math.round((1 - percentage) * 500);
    }

    public calculateScore() {

    }
}
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
            case ChordDifficulty.MEDIUM:
                return this.getMediumChord();
            case ChordDifficulty.HARD:
                return this.getHardChord();
            default:
                throw new Error(`Unsupported chord difficulty: ${difficulty}`);
        }
    }

    getMediumChord(): Chord {
        const [numNotes, inversionSplit] = this.getNoteInversionSplit(ChordDifficulty.MEDIUM);
        switch (inversionSplit) {
            case 0:
                return this.getUninvertedSeventhChord();
            case 1:
                return this.getFirstInversionTriadChord();
            default:
                throw new Error("Invalid inversion amount for medium difficulty: " + inversionSplit);
        }
    }

    getHardChord(): Chord {
        const [numNotes, inversionSplit] = this.getNoteInversionSplit(ChordDifficulty.HARD);
        console.log(inversionSplit);
        switch (inversionSplit) {
            case 0:
                return this.getSecondInversionSeventhChord();
            case 1:
                return this.getFirstInversionSeventhChord();
            case 2:
                return this.getSecondInversionTriadChord();
            default:
                throw new Error("Invalid inversion amount for hard difficulty: " + inversionSplit);
        }
    }

    getSecondInversionSeventhChord(): Chord {
        const numSecondInversionSevenths: number = ChordInterval.secondInversionSeventhIntervals.length;
        const randomIndexSecondInversion: number = Math.floor(Math.random() * numSecondInversionSevenths);
        const randomIntervalSecondInversion: Interval[] = ChordInterval.secondInversionSeventhIntervals[randomIndexSecondInversion];
        const baseNoteNumberSecondInversion: number = 60;
        const notesSecondInversion: Note[] = randomIntervalSecondInversion.map((interval: Interval): Note => {
            const noteNumber: number = baseNoteNumberSecondInversion + interval.semitones;
            return Note.fromMidiNumber(noteNumber);
        });
        const chordSecondInversion: Chord = new Chord(notesSecondInversion);
        return chordSecondInversion;
    }

    getFirstInversionSeventhChord(): Chord {
        const numFirstInversionSevenths: number = ChordInterval.firstInversionSeventhIntervals.length;
        const randomIndexFirstInversion: number = Math.floor(Math.random() * numFirstInversionSevenths);
        const randomIntervalFirstInversion: Interval[] = ChordInterval.firstInversionSeventhIntervals[randomIndexFirstInversion];
        const baseNoteNumberFirstInversion: number = 60;
        const notesFirstInversion: Note[] = randomIntervalFirstInversion.map((interval: Interval): Note => {
            const noteNumber: number = baseNoteNumberFirstInversion + interval.semitones;
            return Note.fromMidiNumber(noteNumber);
        });
        const chordFirstInversion: Chord = new Chord(notesFirstInversion);
        return chordFirstInversion;
    }

    getFirstInversionTriadChord(): Chord {
        const numFirstInversionTriads: number = ChordInterval.triadFirstInversionIntervals.length;
        const randomIndex: number = Math.floor(Math.random() * numFirstInversionTriads);
        const randomInterval: Interval[] = ChordInterval.triadFirstInversionIntervals[randomIndex];
        const baseNoteNumber: number = 60;
        const notes: Note[] = randomInterval.map((interval: Interval): Note => {
            const noteNumber: number = baseNoteNumber + interval.semitones;
            return Note.fromMidiNumber(noteNumber);
        });
        const chord: Chord = new Chord(notes);
        return chord;
    }

    getSecondInversionTriadChord(): Chord {
        const numSecondInversionTriads: number = ChordInterval.triadSecondInversionIntervals.length;
        const randomIndex: number = Math.floor(Math.random() * numSecondInversionTriads);
        const randomInterval: Interval[] = ChordInterval.triadSecondInversionIntervals[randomIndex];
        const baseNoteNumber: number = 60;
        const notes: Note[] = randomInterval.map((interval: Interval): Note => {
            const noteNumber: number = baseNoteNumber + interval.semitones;
            return Note.fromMidiNumber(noteNumber);
        });
        const chord: Chord = new Chord(notes);
        return chord;
    }

    getUninvertedSeventhChord(): Chord {
        const numUninvertedSevenths: number = ChordInterval.uninvertedSeventhIntervals.length;
        const randomIndexUninverted: number = Math.floor(Math.random() * numUninvertedSevenths);
        const randomIntervalUninverted: Interval[] = ChordInterval.uninvertedSeventhIntervals[randomIndexUninverted];
        const baseNoteNumberUninverted: number = 60;
        const notesUninverted: Note[] = randomIntervalUninverted.map((interval: Interval): Note => {
            const noteNumber: number = baseNoteNumberUninverted + interval.semitones;
            return Note.fromMidiNumber(noteNumber);
        });
        const chordUninverted: Chord = new Chord(notesUninverted);
        return chordUninverted;
    }

    public getNoteInversionSplit(difficulty: ChordDifficulty): [number, number] {
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
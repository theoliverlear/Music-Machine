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
        this._chords = ChordCalloutGame.generateRandomChords(6);
        this._secondsPerChord = 5;
        this._currentChordIndex = 0;
    }


    public getCurrentChord(): Chord {
        const outOfBounds: boolean = this._currentChordIndex >= this._chords.length;
        if (outOfBounds) {
            throw new Error("Current chord index is out of bounds.");
        }
        return this._chords[this._currentChordIndex];
    }

    public static generateRandomChord(difficulty: ChordDifficulty): Chord {
        switch (difficulty) {
            case ChordDifficulty.EASY:
                return ChordCalloutGame.getEasyChord();
            case ChordDifficulty.MEDIUM:
                return ChordCalloutGame.getMediumChord();
            case ChordDifficulty.HARD:
                return ChordCalloutGame.getHardChord();
            case ChordDifficulty.EXPERT:
                return ChordCalloutGame.getHardChord();
            default:
                throw new Error(`Unsupported chord difficulty: ${difficulty}`);
        }
    }

    static getMediumChord(): Chord {
        const [numNotes, inversionSplit] = ChordCalloutGame.getNoteInversionSplit(ChordDifficulty.MEDIUM);
        switch (inversionSplit) {
            case 0:
                return ChordCalloutGame.getUninvertedSeventhChord();
            case 1:
                return ChordCalloutGame.getFirstInversionTriadChord();
            default:
                throw new Error("Invalid inversion amount for medium difficulty: " + inversionSplit);
        }
    }

    static getHardChord(): Chord {
        const [numNotes, inversionSplit] = this.getNoteInversionSplit(ChordDifficulty.HARD);
        switch (inversionSplit) {
            case 0:
                return ChordCalloutGame.getSecondInversionSeventhChord();
            case 1:
                return ChordCalloutGame.getFirstInversionSeventhChord();
            case 2:
                return ChordCalloutGame.getSecondInversionTriadChord();
            default:
                throw new Error("Invalid inversion amount for hard difficulty: " + inversionSplit);
        }
    }

    static getSecondInversionSeventhChord(): Chord {
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

    static getFirstInversionSeventhChord(): Chord {
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

    static getFirstInversionTriadChord(): Chord {
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

    static getSecondInversionTriadChord(): Chord {
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

    static getUninvertedSeventhChord(): Chord {
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

    public static getNoteInversionSplit(difficulty: ChordDifficulty): [number, number] {
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

    static getEasyChord(): Chord {
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
        if (count < 6) {
            count = 6;
        }
        const chords: Chord[] = [];
        for (let i: number = 0; i < count; i++) {
            const randomDifficulty = ChordDifficulty.getRandomDifficulty();
            const chord: Chord = ChordCalloutGame.generateRandomChord(randomDifficulty);
            chords.push(chord);
        }
        return chords;
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
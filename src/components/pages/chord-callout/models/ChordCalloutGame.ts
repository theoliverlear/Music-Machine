import {Chord} from "../../../../models/chord/Chord";

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
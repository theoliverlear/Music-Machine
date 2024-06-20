import {Note} from "./Note";

export class Interval {
    private _semitones: number;
    private _name: string;
    static UNISON: number = 0;
    static MINOR_SECOND: number = 1;
    static MAJOR_SECOND: number = 2;
    static MINOR_THIRD: number = 3;
    static MAJOR_THIRD: number = 4;
    static PERFECT_FOURTH: number = 5;
    static TRITONE: number = 6;
    static PERFECT_FIFTH: number = 7;
    static MINOR_SIXTH: number = 8;
    static MAJOR_SIXTH: number = 9;
    static MINOR_SEVENTH: number = 10;
    static MAJOR_SEVENTH: number = 11;
    static OCTAVE: number = 12;
    static MINOR_NINTH: number = 13;
    static MAJOR_NINTH: number = 14;
    static MINOR_TENTH: number = 15;
    static MAJOR_TENTH: number = 16;
    static PERFECT_ELEVENTH: number = 17;
    static AUGMENTED_ELEVENTH: number = 18;
    static PERFECT_TWELFTH: number = 19;
    static MINOR_THIRTEENTH: number = 20;
    static MAJOR_THIRTEENTH: number = 21;
    static MINOR_FOURTEENTH: number = 22;
    static MAJOR_FOURTEENTH: number = 23;
    static PERFECT_FIFTEENTH: number = 24;
    static unison: Interval = new Interval(Interval.UNISON, "Unison");
    static minorSecond: Interval = new Interval(Interval.MINOR_SECOND, "Minor Second");
    static majorSecond: Interval = new Interval(Interval.MAJOR_SECOND, "Major Second");
    static minorThird: Interval = new Interval(Interval.MINOR_THIRD, "Minor Third");
    static majorThird: Interval = new Interval(Interval.MAJOR_THIRD, "Major Third");
    static perfectFourth: Interval = new Interval(Interval.PERFECT_FOURTH, "Perfect Fourth");
    static tritone: Interval = new Interval(Interval.TRITONE, "Tritone");
    static perfectFifth: Interval = new Interval(Interval.PERFECT_FIFTH, "Perfect Fifth");
    static minorSixth: Interval = new Interval(Interval.MINOR_SIXTH, "Minor Sixth");
    static majorSixth: Interval = new Interval(Interval.MAJOR_SIXTH, "Major Sixth");
    static minorSeventh: Interval = new Interval(Interval.MINOR_SEVENTH, "Minor Seventh");
    static majorSeventh: Interval = new Interval(Interval.MAJOR_SEVENTH, "Major Seventh");
    static octave: Interval = new Interval(Interval.OCTAVE , "Octave");
    static minorNinth: Interval = new Interval(Interval.MINOR_NINTH, "Minor Ninth");
    static majorNinth: Interval = new Interval(Interval.MAJOR_NINTH, "Major Ninth");
    static minorTenth: Interval = new Interval(Interval.MINOR_TENTH, "Minor Tenth");
    static majorTenth: Interval = new Interval(Interval.MAJOR_TENTH, "Major Tenth");
    static perfectEleventh: Interval = new Interval(Interval.PERFECT_ELEVENTH, "Perfect Eleventh");
    static augmentedEleventh: Interval = new Interval(Interval.AUGMENTED_ELEVENTH, "Augmented Eleventh");
    static perfectTwelfth: Interval = new Interval(Interval.PERFECT_TWELFTH, "Perfect Twelfth");
    static minorThirteenth: Interval = new Interval(Interval.MINOR_THIRTEENTH, "Minor Thirteenth");
    static majorThirteenth: Interval = new Interval(Interval.MAJOR_THIRTEENTH, "Major Thirteenth");
    static minorFourteenth: Interval = new Interval(Interval.MINOR_FOURTEENTH, "Minor Fourteenth");
    static majorFourteenth: Interval = new Interval(Interval.MAJOR_FOURTEENTH, "Major Fourteenth");
    static perfectFifteenth: Interval = new Interval(Interval.PERFECT_FIFTEENTH, "Perfect Fifteenth");
    static unknown: Interval = new Interval(-1, "Unknown");
    constructor(semitones: number = 0, name: string = "") {
        this._semitones = semitones;
        this._name = ""; // This line is only here to remove the error
                        //  message. The initializeName method will handle
                        //  the assignment of the name property.
        this.initializeName(name);
    }
    initializeName(name: string) {
        if (name === "") {
            this._name = this.getNameBySemitones();
        } else {
            this._name = name;
        }
    }
    get semitones(): number {
        return this._semitones;
    }
    get name(): string {
        return this._name;
    }
    static getIntervalBetweenNotes(initialNote: Note, comparedNote: Note): Interval {
        let semitones: number = Math.abs(comparedNote.noteNumber - initialNote.noteNumber);
        return Interval.getIntervalBySemitones(semitones);
    }
    getNameBySemitones(): string {
        switch (this._semitones) {
            case Interval.UNISON:
                return "Unison";
            case Interval.MINOR_SECOND:
                return "Minor Second";
            case Interval.MAJOR_SECOND:
                return "Major Second";
            case Interval.MINOR_THIRD:
                return "Minor Third";
            case Interval.MAJOR_THIRD:
                return "Major Third";
            case Interval.PERFECT_FOURTH:
                return "Perfect Fourth";
            case Interval.TRITONE:
                return "Tritone";
            case Interval.PERFECT_FIFTH:
                return "Perfect Fifth";
            case Interval.MINOR_SIXTH:
                return "Minor Sixth";
            case Interval.MAJOR_SIXTH:
                return "Major Sixth";
            case Interval.MINOR_SEVENTH:
                return "Minor Seventh";
            case Interval.MAJOR_SEVENTH:
                return "Major Seventh";
            case Interval.OCTAVE:
                return "Octave";
            case Interval.MINOR_NINTH:
                return "Minor Ninth";
            case Interval.MAJOR_NINTH:
                return "Major Ninth";
            case Interval.MINOR_TENTH:
                return "Minor Tenth";
            case Interval.MAJOR_TENTH:
                return "Major Tenth";
            case Interval.PERFECT_ELEVENTH:
                return "Perfect Eleventh";
            case Interval.AUGMENTED_ELEVENTH:
                return "Augmented Eleventh";
            case Interval.PERFECT_TWELFTH:
                return "Perfect Twelfth";
            case Interval.MINOR_THIRTEENTH:
                return "Minor Thirteenth";
            case Interval.MAJOR_THIRTEENTH:
                return "Major Thirteenth";
            case Interval.MINOR_FOURTEENTH:
                return "Minor Fourteenth";
            case Interval.MAJOR_FOURTEENTH:
                return "Major Fourteenth";
            case Interval.PERFECT_FIFTEENTH:
                return "Perfect Fifteenth";
            default:
                return "Unknown";
        }
    }
    static getIntervalBySemitones(semitones: number): Interval {
        switch (semitones) {
            case Interval.UNISON:
                return Interval.unison;
            case Interval.MINOR_SECOND:
                return Interval.minorSecond;
            case Interval.MAJOR_SECOND:
                return Interval.majorSecond;
            case Interval.MINOR_THIRD:
                return Interval.minorThird;
            case Interval.MAJOR_THIRD:
                return Interval.majorThird;
            case Interval.PERFECT_FOURTH:
                return Interval.perfectFourth;
            case Interval.TRITONE:
                return Interval.tritone;
            case Interval.PERFECT_FIFTH:
                return Interval.perfectFifth;
            case Interval.MINOR_SIXTH:
                return Interval.minorSixth;
            case Interval.MAJOR_SIXTH:
                return Interval.majorSixth;
            case Interval.MINOR_SEVENTH:
                return Interval.minorSeventh;
            case Interval.MAJOR_SEVENTH:
                return Interval.majorSeventh;
            case Interval.OCTAVE:
                return Interval.octave;
            case Interval.MINOR_NINTH:
                return Interval.minorNinth;
            case Interval.MAJOR_NINTH:
                return Interval.majorNinth;
            case Interval.MINOR_TENTH:
                return Interval.minorTenth;
            case Interval.MAJOR_TENTH:
                return Interval.majorTenth;
            case Interval.PERFECT_ELEVENTH:
                return Interval.perfectEleventh;
            case Interval.AUGMENTED_ELEVENTH:
                return Interval.augmentedEleventh;
            case Interval.PERFECT_TWELFTH:
                return Interval.perfectTwelfth;
            case Interval.MINOR_THIRTEENTH:
                return Interval.minorThirteenth;
            case Interval.MAJOR_THIRTEENTH:
                return Interval.majorThirteenth;
            case Interval.MINOR_FOURTEENTH:
                return Interval.minorFourteenth;
            case Interval.MAJOR_FOURTEENTH:
                return Interval.majorFourteenth;
            case Interval.PERFECT_FIFTEENTH:
                return Interval.perfectFifteenth;
            default:
                return Interval.unknown;
        }
    }
}
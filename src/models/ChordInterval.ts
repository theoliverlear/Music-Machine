import {Interval} from "./Interval";

export class ChordInterval {
    private _intervals: Interval[];
    private _name: string;
    static major: Interval[] = [Interval.UNISON, Interval.MAJOR_THIRD, Interval.PERFECT_FIFTH];
    static minor: Interval[] = [Interval.UNISON, Interval.MINOR_THIRD, Interval.PERFECT_FIFTH];
    static diminished: Interval[] = [Interval.UNISON, Interval.MINOR_THIRD, Interval.TRITONE];
    static augmented: Interval[] = [Interval.UNISON, Interval.MAJOR_THIRD, Interval.MINOR_SIXTH];
    static majorSeventh: Interval[] = [Interval.UNISON, Interval.MAJOR_THIRD, Interval.PERFECT_FIFTH, Interval.MAJOR_SEVENTH];
    static dominant: Interval[] = [Interval.UNISON, Interval.MAJOR_THIRD, Interval.PERFECT_FIFTH, Interval.MINOR_SEVENTH];
    static minorSeventh: Interval[] = [Interval.UNISON, Interval.MINOR_THIRD, Interval.PERFECT_FIFTH, Interval.MINOR_SEVENTH];
    static minorMajorSeventh: Interval[] = [Interval.UNISON, Interval.MINOR_THIRD, Interval.PERFECT_FIFTH, Interval.MAJOR_SEVENTH];
    static diminishedSeventh: Interval[] = [Interval.UNISON, Interval.MINOR_THIRD, Interval.TRITONE, Interval.MINOR_SEVENTH];
    static intervals: Interval[][] = [
        ChordInterval.major,
        ChordInterval.minor,
        ChordInterval.diminished,
        ChordInterval.augmented,
        ChordInterval.majorSeventh,
        ChordInterval.dominant,
        ChordInterval.minorSeventh,
        ChordInterval.minorMajorSeventh,
        ChordInterval.diminishedSeventh
    ];
    constructor(intervals: Interval[] = []) {
        this._intervals = intervals;
        this._name = this.getNameByIntervals();

    }
    getNameByIntervals(): string {
        switch (this._intervals) {
            case ChordInterval.major:
                return "Major";
            case ChordInterval.minor:
                return "Minor";
            case ChordInterval.diminished:
                return "Diminished";
            case ChordInterval.augmented:
                return "Augmented";
            case ChordInterval.majorSeventh:
                return "Major Seventh";
            case ChordInterval.dominant:
                return "Dominant";
            case ChordInterval.minorSeventh:
                return "Minor Seventh";
            case ChordInterval.minorMajorSeventh:
                return "Minor Major Seventh";
            case ChordInterval.diminishedSeventh:
                return "Diminished Seventh";
            default:
                return "Unknown";
        }
    }
    get intervals(): Interval[] {
        return this._intervals;
    }
    set intervals(intervals: Interval[]) {
        this._intervals = intervals;
    }
    equals(chordInterval: ChordInterval): boolean {
        return this._intervals.every((interval: Interval, index: number): boolean => {
            return interval === chordInterval.intervals[index];
        });
    }
}
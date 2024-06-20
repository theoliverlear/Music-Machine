import {Interval} from "./Interval";

export class ChordInterval {
    private _intervals: Interval[];
    private _name: string;
    static major: Interval[] = [Interval.unison, Interval.majorThird, Interval.perfectFifth];
    static minor: Interval[] = [Interval.unison, Interval.minorThird, Interval.perfectFifth];
    static diminished: Interval[] = [Interval.unison, Interval.minorThird, Interval.tritone];
    static augmented: Interval[] = [Interval.unison, Interval.majorThird, Interval.minorSixth];
    static majorSeventh: Interval[] = [Interval.unison, Interval.majorThird, Interval.perfectFifth, Interval.majorSeventh];
    static dominant: Interval[] = [Interval.unison, Interval.majorThird, Interval.perfectFifth, Interval.minorSeventh];
    static minorSeventh: Interval[] = [Interval.unison, Interval.minorThird, Interval.perfectFifth, Interval.minorSeventh];
    static minorMajorSeventh: Interval[] = [Interval.unison, Interval.minorThird, Interval.perfectFifth, Interval.majorSeventh];
    static diminishedSeventh: Interval[] = [Interval.unison, Interval.minorThird, Interval.tritone, Interval.minorSeventh];
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
        this.removeDuplicateIntervals();
        this._name = this.getNameByIntervals();

    }
    removeDuplicateIntervals(): void {
        this._intervals = this._intervals.filter((interval: Interval, index: number, self: Interval[]): boolean => {
            return self.indexOf(interval) === index;
        });
    }
    getNameByIntervals(): string {
        for (let i: number = 0; i < this._intervals.length; i++) {
            console.log(i + ': ' + this._intervals[i].name);
        }
        if (this._intervals[0] === Interval.unison && this._intervals[1] === Interval.majorThird && this._intervals[2] === Interval.perfectFifth) {
            return "Major";
        }

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
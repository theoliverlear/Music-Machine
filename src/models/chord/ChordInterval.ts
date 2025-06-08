import {Interval} from "./Interval";
import {MusicSet} from "../MusicSet";

export class ChordInterval {
    private _intervals: MusicSet<Interval>;
    private _name: string;
    // Base
    static majorIntervals: Interval[] = [Interval.unison, Interval.majorThird, Interval.perfectFifth];
    static minorIntervals: Interval[] = [Interval.unison, Interval.minorThird, Interval.perfectFifth];
    static diminishedIntervals: Interval[] = [Interval.unison, Interval.minorThird, Interval.tritone];
    static augmentedIntervals: Interval[] = [Interval.unison, Interval.majorThird, Interval.minorSixth];
    static majorSeventhIntervals: Interval[] = [Interval.unison, Interval.majorThird, Interval.perfectFifth, Interval.majorSeventh];
    static dominantIntervals: Interval[] = [Interval.unison, Interval.majorThird, Interval.perfectFifth, Interval.minorSeventh];
    static minorSeventhIntervals: Interval[] = [Interval.unison, Interval.minorThird, Interval.perfectFifth, Interval.minorSeventh];
    static minorMajorSeventhIntervals: Interval[] = [Interval.unison, Interval.minorThird, Interval.perfectFifth, Interval.majorSeventh];
    static diminishedSeventhIntervals: Interval[] = [Interval.unison, Interval.minorThird, Interval.tritone, Interval.minorSeventh];
    // Triad Inversions
    static majorFirstInversionIntervals: Interval[] = [Interval.unison, Interval.minorThird, Interval.minorSixth];
    static majorSecondInversionIntervals: Interval[] = [Interval.unison, Interval.perfectFourth, Interval.majorThird];
    static minorFirstInversionIntervals: Interval[] = [Interval.unison, Interval.majorThird, Interval.majorSixth];
    static minorSecondInversionIntervals: Interval[] = [Interval.unison, Interval.perfectFourth, Interval.minorThird];

    static diminishedFirstInversionIntervals: Interval[] = [Interval.unison, Interval.minorThird, Interval.majorSixth];
    static diminishedSecondInversionIntervals: Interval[] = [Interval.unison, Interval.tritone, Interval.majorSixth];

    // Base
    static major: ChordInterval = new ChordInterval(ChordInterval.majorIntervals, 'Major');
    static minor: ChordInterval = new ChordInterval(ChordInterval.minorIntervals, 'Minor');
    static diminished: ChordInterval = new ChordInterval(ChordInterval.diminishedIntervals, 'Diminished');
    static augmented: ChordInterval = new ChordInterval(ChordInterval.augmentedIntervals, 'Augmented');
    static majorSeventh: ChordInterval = new ChordInterval(ChordInterval.majorSeventhIntervals, 'Major Seventh');
    static dominant: ChordInterval = new ChordInterval(ChordInterval.dominantIntervals, 'Dominant');
    static minorSeventh: ChordInterval = new ChordInterval(ChordInterval.minorSeventhIntervals, 'Minor Seventh');
    static minorMajorSeventh: ChordInterval = new ChordInterval(ChordInterval.minorMajorSeventhIntervals, 'Minor Major Seventh');
    static diminishedSeventh: ChordInterval = new ChordInterval(ChordInterval.diminishedSeventhIntervals, 'Diminished Seventh');
    // Triad Inversions
    static majorFirstInversion: ChordInterval = new ChordInterval(ChordInterval.majorFirstInversionIntervals, 'Major First Inversion');
    static majorSecondInversion: ChordInterval = new ChordInterval(ChordInterval.majorSecondInversionIntervals, 'Major Second Inversion');
    static minorFirstInversion: ChordInterval = new ChordInterval(ChordInterval.minorFirstInversionIntervals, 'Minor First Inversion');
    static minorSecondInversion: ChordInterval = new ChordInterval(ChordInterval.minorSecondInversionIntervals, 'Minor Second Inversion');
    static diminishedFirstInversion: ChordInterval = new ChordInterval(ChordInterval.diminishedFirstInversionIntervals, 'Diminished First Inversion');
    static diminishedSecondInversion: ChordInterval = new ChordInterval(ChordInterval.diminishedSecondInversionIntervals, 'Diminished Second Inversion');
    static intervals: ChordInterval[] = [
        ChordInterval.major,
        ChordInterval.minor,
        ChordInterval.diminished,
        ChordInterval.augmented,
        ChordInterval.majorSeventh,
        ChordInterval.dominant,
        ChordInterval.minorSeventh,
        ChordInterval.minorMajorSeventh,
        ChordInterval.diminishedSeventh,
        ChordInterval.majorFirstInversion,
        ChordInterval.majorSecondInversion,
        ChordInterval.minorFirstInversion,
        ChordInterval.minorSecondInversion,
        ChordInterval.diminishedFirstInversion,
        ChordInterval.diminishedSecondInversion
    ];
    constructor(intervals: Interval[] = [], name: string = '') {
        this._intervals = new MusicSet<Interval>(intervals);
        if (name === '') {
            this._name = this.getNameByIntervals();
        } else {
            this._name = name;
        }
    }
    equalIntervals(chordInterval: Interval[]): boolean {
        if (this._intervals.notesArray.length !== chordInterval.length) {
            return false;
        }
        const semitonesSet: Set<number> = new Set(this._intervals.notesArray.map((interval: Interval): number => {
            return interval.semitones;
        }));
        for (const interval of chordInterval) {
            if (!semitonesSet.has(interval.semitones)) {
                return false;
            }
        }
        return true;
    }

    sortSmallestToLargest(): void {
        this._intervals.notesArray.sort((intervalOne: Interval, intervalTwo: Interval): number => {
            return intervalOne.semitones - intervalTwo.semitones;
        });
    }

    getNameByIntervals(): string {
        // this._intervals.notesArray.forEach((interval: Interval): void => {
        //     console.log('Interval: ', interval.name);
        // });
        // TODO: Replace with loop
        // let chordName: string;
        // if (this.equalIntervals(ChordInterval.majorIntervals)) {
        //     chordName = 'Major';
        // } else if (this.equalIntervals(ChordInterval.minorIntervals)) {
        //     chordName = 'Minor';
        // } else if (this.equalIntervals(ChordInterval.diminishedIntervals)) {
        //     chordName = 'Diminished';
        // } else if (this.equalIntervals(ChordInterval.augmentedIntervals)) {
        //     chordName = 'Augmented';
        // } else if (this.equalIntervals(ChordInterval.majorSeventhIntervals)) {
        //     chordName = 'Major Seventh';
        // } else if (this.equalIntervals(ChordInterval.dominantIntervals)) {
        //     chordName = 'Dominant';
        // } else if (this.equalIntervals(ChordInterval.minorSeventhIntervals)) {
        //     chordName = 'Minor Seventh';
        // } else if (this.equalIntervals(ChordInterval.minorMajorSeventhIntervals)) {
        //     chordName = 'Minor Major Seventh';
        // } else if (this.equalIntervals(ChordInterval.diminishedSeventhIntervals)) {
        //     chordName = 'Diminished Seventh';
        // } else if (this.equalIntervals(ChordInterval.majorFirstInversionIntervals)) {
        //     chordName = 'Major First Inversion';
        // } else if (this.equalIntervals(ChordInterval.minorFirstInversionIntervals)) {
        //     chordName = 'Minor First Inversion';
        // }
        // else {
        //     chordName = 'Unknown';
        // }
        let chordName: string = 'Unknown';
        for (const chordInterval of ChordInterval.intervals) {
            if (this.equalIntervals(chordInterval.intervals.notesArray)) {
                chordName = chordInterval._name;
                break;
            }
        }
        return chordName;
    }
    get intervals(): MusicSet<Interval> {
        // this.sortSmallestToLargest();
        return this._intervals;
    }
    set intervals(intervals: MusicSet<Interval>) {
        this._intervals = intervals;
    }
    equals(chordInterval: ChordInterval): boolean {
        return this._intervals.notesArray.every((interval: Interval, index: number): boolean => {
            return interval === chordInterval.intervals.notesArray[index];
        });
    }
}
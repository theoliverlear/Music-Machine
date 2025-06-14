import {Interval} from "./Interval";
import {MusicSet} from "../MusicSet";

export class ChordInterval {
    private _intervals: MusicSet<Interval>;
    private _name: string;

    constructor(intervals: Interval[] = [], name: string = '') {
        this._intervals = new MusicSet<Interval>(intervals);
        if (name === '') {
            this._name = this.getNameByIntervals();
        } else {
            this._name = name;
        }
    }
    equalIntervals(chordInterval: Interval[]): boolean {
        if (this._intervals.asArray().length !== chordInterval.length) {
            return false;
        }
        const semitonesSet: Set<number> = new Set(this._intervals.asArray().map((interval: Interval): number => {
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
        this._intervals.asArray().sort((intervalOne: Interval, intervalTwo: Interval): number => {
            return intervalOne.semitones - intervalTwo.semitones;
        });
    }

    getNameByIntervals(): string {
        let chordName: string = 'Unknown';
        for (const chordInterval of ChordInterval.intervals) {
            if (this.equalIntervals(chordInterval.intervals.asArray())) {
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
        return this._intervals.asArray().every((interval: Interval, index: number): boolean => {
            return interval === chordInterval.intervals.asArray()[index];
        });
    }

    // Base
    static majorIntervals: Interval[] =
        [Interval.unison, Interval.majorThird, Interval.perfectFifth];

    static minorIntervals: Interval[] =
        [Interval.unison, Interval.minorThird, Interval.perfectFifth];

    static diminishedIntervals: Interval[] =
        [Interval.unison, Interval.minorThird, Interval.tritone];

    static augmentedIntervals: Interval[] =
        [Interval.unison, Interval.majorThird, Interval.minorSixth];

    static majorSeventhIntervals: Interval[] =
        [Interval.unison, Interval.majorThird, Interval.perfectFifth, Interval.majorSeventh];

    static dominantIntervals: Interval[] =
        [Interval.unison, Interval.majorThird, Interval.perfectFifth, Interval.minorSeventh];

    static minorSeventhIntervals: Interval[] =
        [Interval.unison, Interval.minorThird, Interval.perfectFifth, Interval.minorSeventh];

    static minorMajorSeventhIntervals: Interval[] =
        [Interval.unison, Interval.minorThird, Interval.perfectFifth, Interval.majorSeventh];

    static diminishedSeventhIntervals: Interval[] =
        [Interval.unison, Interval.minorThird, Interval.tritone, Interval.minorSeventh];
    // Triad Inversions
    static majorFirstInversionIntervals: Interval[] =
        [Interval.unison, Interval.minorThird, Interval.minorSixth];

    static majorSecondInversionIntervals: Interval[] =
        [Interval.unison, Interval.perfectFourth, Interval.majorSixth];

    static minorFirstInversionIntervals: Interval[] =
        [Interval.unison, Interval.majorThird, Interval.majorSixth];

    static minorSecondInversionIntervals: Interval[] =
        [Interval.unison, Interval.perfectFourth, Interval.minorSixth];

    static diminishedFirstInversionIntervals: Interval[] =
        [Interval.unison, Interval.minorThird, Interval.majorSixth];

    static diminishedSecondInversionIntervals: Interval[] =
        [Interval.unison, Interval.tritone, Interval.majorSixth];

    static augmentedFirstInversionIntervals: Interval[] =
        [Interval.unison, Interval.majorThird, Interval.minorSixth];

    static augmentedSecondInversionIntervals: Interval[] =
        [Interval.unison, Interval.majorThird, Interval.minorSixth];
    // 7th Inversions
    static majorSeventhFirstInversionIntervals: Interval[] =
        [Interval.unison, Interval.minorThird, Interval.perfectFifth, Interval.minorSixth];  // 0-3-7-8  (6-5)

    static majorSeventhSecondInversionIntervals: Interval[] =
        [Interval.unison, Interval.majorThird, Interval.perfectFourth, Interval.majorSixth]; // 0-4-5-9  (4-3)

    static majorSeventhThirdInversionIntervals:  Interval[] =
        [Interval.unison, Interval.minorSecond, Interval.perfectFourth, Interval.minorSixth]; // 0-1-5-8  (4-2)

    static dominantFirstInversionIntervals: Interval[] =
        [Interval.unison, Interval.minorThird,  Interval.tritone, Interval.minorSixth];  // 0-3-6-8  (6-5)

    static dominantSecondInversionIntervals: Interval[] =
        [Interval.unison, Interval.minorThird, Interval.perfectFourth, Interval.majorSixth]; // 0-3-5-9  (4-3)

    static dominantThirdInversionIntervals: Interval[] =
        [Interval.unison, Interval.majorSecond, Interval.tritone, Interval.majorSixth]; // 0-2-6-9  (4-2)

    static minorSeventhFirstInversionIntervals: Interval[] =
        [Interval.unison, Interval.majorThird, Interval.perfectFifth, Interval.majorSixth]; // 0-4-7-9

    static minorSeventhSecondInversionIntervals: Interval[] =
        [Interval.unison, Interval.minorThird, Interval.perfectFourth, Interval.minorSixth]; // 0-3-5-8

    static minorSeventhThirdInversionIntervals: Interval[] =
        [Interval.unison, Interval.majorSecond, Interval.perfectFourth, Interval.majorSixth]; // 0-2-5-9

    static minorMajorSeventhFirstInversionIntervals:  Interval[] =
        [Interval.unison, Interval.majorThird, Interval.minorSixth, Interval.majorSixth]; // 0-4-8-9

    static minorMajorSeventhSecondInversionIntervals: Interval[] =
        [Interval.unison, Interval.majorThird, Interval.perfectFourth, Interval.minorSixth]; // 0-4-5-8

    static minorMajorSeventhThirdInversionIntervals: Interval[] =
        [Interval.unison, Interval.minorSecond, Interval.minorThird, Interval.minorSixth]; // 0-1-3-8

    static diminishedSeventhFirstInversionIntervals:  Interval[] =
        [Interval.unison, Interval.minorThird, Interval.perfectFifth, Interval.majorSixth]; // 0-3-7-9

    static diminishedSeventhSecondInversionIntervals: Interval[] =
        [Interval.unison, Interval.majorThird, Interval.perfectFourth, Interval.minorSixth]; // 0-4-5-8

    static diminishedSeventhThirdInversionIntervals: Interval[] =
        [Interval.unison, Interval.majorSecond, Interval.perfectFourth, Interval.minorSixth]; // 0-2-5-8


    // Base
    static major: ChordInterval = new ChordInterval(
        ChordInterval.majorIntervals, 'Major');

    static minor: ChordInterval = new ChordInterval(
        ChordInterval.minorIntervals, 'Minor');

    static diminished: ChordInterval = new ChordInterval(
        ChordInterval.diminishedIntervals, 'Diminished');

    static augmented: ChordInterval = new ChordInterval(
        ChordInterval.augmentedIntervals, 'Augmented');

    static majorSeventh: ChordInterval = new ChordInterval(
        ChordInterval.majorSeventhIntervals, 'Major Seventh');

    static dominant: ChordInterval = new ChordInterval(
        ChordInterval.dominantIntervals, 'Dominant');

    static minorSeventh: ChordInterval = new ChordInterval(
        ChordInterval.minorSeventhIntervals, 'Minor Seventh');

    static minorMajorSeventh: ChordInterval = new ChordInterval(
        ChordInterval.minorMajorSeventhIntervals, 'Minor Major Seventh');

    static diminishedSeventh: ChordInterval = new ChordInterval(
        ChordInterval.diminishedSeventhIntervals, 'Diminished Seventh');

    // Triad Inversions
    static majorFirstInversion: ChordInterval = new ChordInterval(
        ChordInterval.majorFirstInversionIntervals, 'Major (1st Inversion)');

    static majorSecondInversion: ChordInterval = new ChordInterval(
        ChordInterval.majorSecondInversionIntervals, 'Major (2nd Inversion)');

    static minorFirstInversion: ChordInterval = new ChordInterval(
        ChordInterval.minorFirstInversionIntervals, 'Minor (1st Inversion)');

    static minorSecondInversion: ChordInterval = new ChordInterval(
        ChordInterval.minorSecondInversionIntervals, 'Minor (2nd Inversion)');

    static diminishedFirstInversion: ChordInterval = new ChordInterval(
        ChordInterval.diminishedFirstInversionIntervals, 'Diminished (1st Inversion)');

    static diminishedSecondInversion: ChordInterval = new ChordInterval(
        ChordInterval.diminishedSecondInversionIntervals, 'Diminished (2nd Inversion)');


    static augmentedFirstInversion: ChordInterval = new ChordInterval(
        ChordInterval.augmentedFirstInversionIntervals, 'Augmented (1st Inversion)');

    static augmentedSecondInversion: ChordInterval = new ChordInterval(
        ChordInterval.augmentedSecondInversionIntervals, 'Augmented (2nd Inversion)');

    // 7th Inversions
    static majorSeventhFirstInversion: ChordInterval = new ChordInterval(
        ChordInterval.majorSeventhFirstInversionIntervals, 'Major Seventh (1st Inversion)');

    static majorSeventhSecondInversion: ChordInterval = new ChordInterval(
        ChordInterval.majorSeventhSecondInversionIntervals, 'Major Seventh (2nd Inversion)');

    static majorSeventhThirdInversion: ChordInterval = new ChordInterval(
        ChordInterval.majorSeventhThirdInversionIntervals, 'Major Seventh (3rd Inversion)');


    static dominantFirstInversion: ChordInterval = new ChordInterval(
        ChordInterval.dominantFirstInversionIntervals, 'Dominant (1st Inversion)');

    static dominantSecondInversion: ChordInterval = new ChordInterval(
        ChordInterval.dominantSecondInversionIntervals, 'Dominant (2nd Inversion)');

    static dominantThirdInversion: ChordInterval = new ChordInterval(
        ChordInterval.dominantThirdInversionIntervals, 'Dominant (3rd Inversion)');

    static minorSeventhFirstInversion: ChordInterval = new ChordInterval(
        ChordInterval.minorSeventhFirstInversionIntervals, 'Minor Seventh (1st Inversion)');

    static minorSeventhSecondInversion: ChordInterval = new ChordInterval(
        ChordInterval.minorSeventhSecondInversionIntervals, 'Minor Seventh (2nd Inversion)');

    static minorSeventhThirdInversion: ChordInterval = new ChordInterval(
        ChordInterval.minorSeventhThirdInversionIntervals, 'Minor Seventh (3rd Inversion)');

    static minorMajorSeventhFirstInversion: ChordInterval = new ChordInterval(
        ChordInterval.minorMajorSeventhFirstInversionIntervals, 'Minor Major 7 (1st Inversion)');
    static minorMajorSeventhSecondInversion: ChordInterval = new ChordInterval(
        ChordInterval.minorMajorSeventhSecondInversionIntervals, 'Minor Major 7 (2nd Inversion)');
    static minorMajorSeventhThirdInversion: ChordInterval = new ChordInterval(
        ChordInterval.minorMajorSeventhThirdInversionIntervals, 'Minor Major 7 (3rd Inversion)');

    static diminishedSeventhFirstInversion: ChordInterval = new ChordInterval(
        ChordInterval.diminishedSeventhFirstInversionIntervals, 'Diminished Seventh (1st Inversion)');
    static diminishedSeventhSecondInversion: ChordInterval = new ChordInterval(
        ChordInterval.diminishedSeventhSecondInversionIntervals, 'Diminished Seventh (2nd Inversion)');
    static diminishedSeventhThirdInversion: ChordInterval = new ChordInterval(
        ChordInterval.diminishedSeventhThirdInversionIntervals, 'Diminished Seventh (3rd Inversion)');

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
        ChordInterval.diminishedSecondInversion,
        ChordInterval.augmentedFirstInversion,
        ChordInterval.augmentedSecondInversion,
        ChordInterval.majorSeventhFirstInversion,
        ChordInterval.majorSeventhSecondInversion,
        ChordInterval.majorSeventhThirdInversion,
        ChordInterval.dominantFirstInversion,
        ChordInterval.dominantSecondInversion,
        ChordInterval.dominantThirdInversion,
        ChordInterval.minorSeventhFirstInversion,
        ChordInterval.minorSeventhSecondInversion,
        ChordInterval.minorSeventhThirdInversion,
        ChordInterval.minorMajorSeventhFirstInversion,
        ChordInterval.minorMajorSeventhSecondInversion,
        ChordInterval.minorMajorSeventhThirdInversion,
        ChordInterval.diminishedSeventhFirstInversion,
        ChordInterval.diminishedSeventhSecondInversion,
        ChordInterval.diminishedSeventhThirdInversion
    ];
}
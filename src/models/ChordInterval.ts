import {Interval} from "./Interval";
import {MusicSet} from "./MusicSet";

export class ChordInterval {
    private _intervals: MusicSet<Interval>;
    private _name: string;
    static majorIntervals: Interval[] = [Interval.unison, Interval.majorThird, Interval.perfectFifth];
    static minorIntervals: Interval[] = [Interval.unison, Interval.minorThird, Interval.perfectFifth];
    static diminishedIntervals: Interval[] = [Interval.unison, Interval.minorThird, Interval.tritone];
    static augmentedIntervals: Interval[] = [Interval.unison, Interval.majorThird, Interval.minorSixth];
    static majorSeventhIntervals: Interval[] = [Interval.unison, Interval.majorThird, Interval.perfectFifth, Interval.majorSeventh];
    static dominantIntervals: Interval[] = [Interval.unison, Interval.majorThird, Interval.perfectFifth, Interval.minorSeventh];
    static minorSeventhIntervals: Interval[] = [Interval.unison, Interval.minorThird, Interval.perfectFifth, Interval.minorSeventh];
    static minorMajorSeventhIntervals: Interval[] = [Interval.unison, Interval.minorThird, Interval.perfectFifth, Interval.majorSeventh];
    static diminishedSeventhIntervals: Interval[] = [Interval.unison, Interval.minorThird, Interval.tritone, Interval.minorSeventh];

    static major: ChordInterval = new ChordInterval(ChordInterval.majorIntervals, 'Major');
    static minor: ChordInterval = new ChordInterval(ChordInterval.minorIntervals, 'Minor');
    static diminished: ChordInterval = new ChordInterval(ChordInterval.diminishedIntervals, 'Diminished');
    static augmented: ChordInterval = new ChordInterval(ChordInterval.augmentedIntervals, 'Augmented');
    static majorSeventh: ChordInterval = new ChordInterval(ChordInterval.majorSeventhIntervals, 'Major Seventh');
    static dominant: ChordInterval = new ChordInterval(ChordInterval.dominantIntervals, 'Dominant');
    static minorSeventh: ChordInterval = new ChordInterval(ChordInterval.minorSeventhIntervals, 'Minor Seventh');
    static minorMajorSeventh: ChordInterval = new ChordInterval(ChordInterval.minorMajorSeventhIntervals, 'Minor Major Seventh');
    static diminishedSeventh: ChordInterval = new ChordInterval(ChordInterval.diminishedSeventhIntervals, 'Diminished Seventh');

    static intervals: ChordInterval[] = [
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
    constructor(intervals: Interval[] = [], name: string = '') {
        this._intervals = new MusicSet<Interval>(intervals);
        if (name === '') {
            this._name = this.getNameByIntervals();
        } else {
            this._name = name;
        }

    }
    equalIntervals(chordInterval: Interval[]): boolean {
        return this._intervals.notesArray.every((interval: Interval, index: number): boolean => {
            return interval === chordInterval[index];
        });
    }
    getNameByIntervals(): string {
        // this._intervals.notesArray.forEach((interval: Interval): void => {
        //     console.log('Interval: ', interval.name);
        // });
        let chordName: string;
        if (this.equalIntervals(ChordInterval.majorIntervals)) {
            chordName = 'Major';
        } else if (this.equalIntervals(ChordInterval.minorIntervals)) {
            chordName = 'Minor';
        } else if (this.equalIntervals(ChordInterval.diminishedIntervals)) {
            chordName = 'Diminished';
        } else if (this.equalIntervals(ChordInterval.augmentedIntervals)) {
            chordName = 'Augmented';
        } else if (this.equalIntervals(ChordInterval.majorSeventhIntervals)) {
            chordName = 'Major Seventh';
        } else if (this.equalIntervals(ChordInterval.dominantIntervals)) {
            chordName = 'Dominant';
        } else if (this.equalIntervals(ChordInterval.minorSeventhIntervals)) {
            chordName = 'Minor Seventh';
        } else if (this.equalIntervals(ChordInterval.minorMajorSeventhIntervals)) {
            chordName = 'Minor Major Seventh';
        } else if (this.equalIntervals(ChordInterval.diminishedSeventhIntervals)) {
            chordName = 'Diminished Seventh';
        } else {
            chordName = 'Unknown';
        }
        return chordName;
    }
    get intervals(): MusicSet<Interval> {
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
import {ChordInterval} from "../../../models/chord/ChordInterval";
import {Interval} from "../../../models/chord/Interval";

describe('ChordInterval', (): void => {
    describe('getNameByIntervals', (): void => {
        it('returns Major for major chord', (): void => {
            const chordInterval: ChordInterval = new ChordInterval();
            chordInterval.intervals.add(Interval.unison);
            chordInterval.intervals.add(Interval.majorThird);
            chordInterval.intervals.add(Interval.perfectFifth);
            expect(chordInterval.getNameByIntervals()).toBe('Major');
        });
    });
    describe('constructor', (): void => {
        it('adds the intervals passed', (): void => {
            const intervals: Interval[] = [Interval.unison, Interval.majorThird, Interval.perfectFifth];
            const chordInterval: ChordInterval = new ChordInterval(intervals);
            expect(chordInterval.intervals.asArray.includes(Interval.unison)).toBe(true);
            expect(chordInterval.intervals.asArray.includes(Interval.majorThird)).toBe(true);
            expect(chordInterval.intervals.asArray.includes(Interval.perfectFifth)).toBe(true);
            expect(chordInterval.intervals.asArray.length).toBe(3);
            expect(chordInterval.intervals.asArray.includes(Interval.majorSixth)).toBe(false);
        });
    });
});
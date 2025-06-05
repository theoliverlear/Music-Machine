import {ChordInterval} from "../../models/chord/ChordInterval";
import {Interval} from "../../models/chord/Interval";

describe('ChordInterval', (): void => {
    describe('getNameByIntervals', (): void => {
        it('returns Major for major chord', (): void => {
            let chordInterval: ChordInterval = new ChordInterval();
            chordInterval.intervals.add(Interval.unison);
            chordInterval.intervals.add(Interval.majorThird);
            chordInterval.intervals.add(Interval.perfectFifth);
            expect(chordInterval.getNameByIntervals()).toBe('Major');
        });
    });
});
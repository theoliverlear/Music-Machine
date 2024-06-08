import {Interval} from "./Interval";

export class ScaleToneSequence {
    MAJOR = [Interval.UNISON, Interval.MAJOR_SECOND, Interval.MAJOR_THIRD, Interval.PERFECT_FOURTH, Interval.PERFECT_FIFTH, Interval.MAJOR_SIXTH, Interval.MAJOR_SEVENTH];
    MINOR = [Interval.UNISON, Interval.MAJOR_SECOND, Interval.MINOR_THIRD, Interval.PERFECT_FOURTH, Interval.PERFECT_FIFTH, Interval.MINOR_SIXTH, Interval.MINOR_SEVENTH];
    HARMONIC_MINOR = [Interval.UNISON, Interval.MAJOR_SECOND, Interval.MINOR_THIRD, Interval.PERFECT_FOURTH, Interval.PERFECT_FIFTH, Interval.MINOR_SIXTH, Interval.MAJOR_SEVENTH];
    DORIAN = [Interval.UNISON, Interval.MAJOR_SECOND, Interval.MINOR_THIRD, Interval.PERFECT_FOURTH, Interval.PERFECT_FIFTH, Interval.MAJOR_SIXTH, Interval.MINOR_SEVENTH];
}
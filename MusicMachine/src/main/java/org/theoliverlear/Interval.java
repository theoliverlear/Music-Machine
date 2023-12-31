package org.theoliverlear;

public enum Interval {
    Unison(0),
    MinorSecond(1),
    MajorSecond(2),
    MinorThird(3),
    MajorThird(4),
    PerfectFourth(5),
    Tritone(6),
    PerfectFifth(7),
    MinorSixth(8),
    MajorSixth(9),
    MinorSeventh(10),
    MajorSeventh(11),
    Octave(12),
    MinorNinth(13),
    MajorNinth(14),
    MinorTenth(15),
    MajorTenth(16),
    PerfectEleventh(17),
    AugmentedEleventh(18),
    PerfectTwelfth(19),
    MinorThirteenth(20),
    MajorThirteenth(21);
    final int semitonesFromRoot;
    Interval(int semitonesFromRoot) {
        this.semitonesFromRoot = semitonesFromRoot;
    }
    public int getSemitonesFromRoot() {
        return this.semitonesFromRoot;
    }
    public static Interval getInterval(int semitonesFromRoot) {
        for (Interval interval : Interval.values()) {
            if (interval.getSemitonesFromRoot() == semitonesFromRoot) {
                return interval;
            }
        }
        return null;
    }
    public static Interval getInterval(Note noteOne, Note noteTwo) {
        int semitonesFromRoot = noteTwo.getNoteNumber() - noteOne.getNoteNumber();
        return getInterval(semitonesFromRoot);
    }
}

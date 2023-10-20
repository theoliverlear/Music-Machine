package org.theoliverlear;

public enum Scale {
    Major("Major", new Interval[] {
        Interval.Unison,
        Interval.MajorSecond,
        Interval.MajorThird,
        Interval.PerfectFourth,
        Interval.PerfectFifth,
        Interval.MajorSixth,
        Interval.MajorSeventh
    }),
    Minor("Minor", new Interval[] {
        Interval.Unison,
        Interval.MajorSecond,
        Interval.MinorThird,
        Interval.PerfectFourth,
        Interval.PerfectFifth,
        Interval.MinorSixth,
        Interval.MinorSeventh
    }),
    HarmonicMinor("Harmonic Minor", new Interval[] {
        Interval.Unison,
        Interval.MajorSecond,
        Interval.MinorThird,
        Interval.PerfectFourth,
        Interval.PerfectFifth,
        Interval.MinorSixth,
        Interval.MajorSeventh
    });
    final String name;
    final Interval[] intervals;
    Scale(String name, Interval[] intervals) {
        this.name = name;
        this.intervals = intervals;
    }
    //------------------------------Getters-----------------------------------
    public String getName() {
        return this.name;
    }
    public Interval[] getIntervals() {
        return this.intervals;
    }
}

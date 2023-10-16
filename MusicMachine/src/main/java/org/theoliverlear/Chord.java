package org.theoliverlear;

public class Chord {
    Note note1;
    Note note2;
    Note note3;
    Note note4;
    String chordType;
    Chord(Note note1, Note note2, Note note3) {
        this.note1 = note1;
        this.note2 = note2;
        this.note3 = note3;
        this.determineChordType();
    }
    Chord(Note note1, Note note2, Note note3, Note note4) {
        this.note1 = note1;
        this.note2 = note2;
        this.note3 = note3;
        this.note4 = note4;
        this.determineChordType();
    }
    /*
    1     0     1     1     0     0     0     1
    128   64    32    16    8     4     2     1
    128 + 0 + 32 + 16 + 0 + 0 + 0 + 1 = 177;

    177

    1 0 1 1 0 0 0 1
     */
    //------------------------------Methods-----------------------------------
    public void determineChordType() {
        int rootToThird = this.note2.getNoteNumber() - this.note1.getNoteNumber();
        int thirdToFifth = this.note3.getNoteNumber() - this.note2.getNoteNumber();
        if (rootToThird == Interval.MajorThird.getSemitonesFromRoot() &&
                thirdToFifth == Interval.MinorThird.getSemitonesFromRoot()) {
            this.chordType = "Major";
        } else if (rootToThird == Interval.MinorThird.getSemitonesFromRoot() &&
                thirdToFifth == Interval.MajorThird.getSemitonesFromRoot()) {
            this.chordType = "Minor";
        } else if (rootToThird == Interval.MajorThird.getSemitonesFromRoot() &&
                thirdToFifth == Interval.MajorThird.getSemitonesFromRoot()) {
            this.chordType = "Augmented";
        } else if (rootToThird == Interval.MinorThird.getSemitonesFromRoot() &&
        thirdToFifth == Interval.MinorThird.getSemitonesFromRoot()) {
            this.chordType = "Diminished";
        } else {
            this.chordType = "Unknown";
        }
    }
    //------------------------------Getters-----------------------------------
    public Note getNote1() {
        return this.note1;
    }
    public Note getNote2() {
        return this.note2;
    }
    public Note getNote3() {
        return this.note3;
    }
    public String getChordType() {
        return this.chordType;
    }
    //------------------------------Setters-----------------------------------
    public void setNote1(Note note1) {
        this.note1 = note1;
    }
    public void setNote2(Note note2) {
        this.note2 = note2;
    }
    public void setNote3(Note note3) {
        this.note3 = note3;
    }
    public void setChordType(String chordType) {
        this.chordType = chordType;
    }
}

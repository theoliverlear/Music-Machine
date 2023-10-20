package org.theoliverlear;

public class Chord {
    Note note1;
    Note note2;
    Note note3;
    Note note4;
    String chordType;
    //----------------------------Constructors--------------------------------
    public Chord(Note note1, Note note2, Note note3) {
        this.note1 = note1;
        this.note2 = note2;
        this.note3 = note3;
        this.determineChordType();
    }
    public Chord(Note note1, Note note2, Note note3, Note note4) {
        this.note1 = note1;
        this.note2 = note2;
        this.note3 = note3;
        this.note4 = note4;
        this.determineChordType();
    }
    //------------------------------Methods-----------------------------------
    public void determineChordType() {
        int rootToThird = this.note2.getNoteNumber() -
                          this.note1.getNoteNumber();
        int thirdToFifth = this.note3.getNoteNumber() -
                           this.note2.getNoteNumber();
        int rootToSeventh = 0;
        if (note4 != null) {
            rootToSeventh = this.note4.getNoteNumber() -
                            this.note1.getNoteNumber();
        }
        if (rootToThird == Interval.MajorThird.getSemitonesFromRoot() &&
                thirdToFifth == Interval.MinorThird.getSemitonesFromRoot()) {
            if (note4 == null) {
                this.chordType = "Major";
            } else if (rootToSeventh == Interval.MajorSeventh.getSemitonesFromRoot()) {
                this.chordType = "Major 7th";
            } else if (rootToSeventh == Interval.MinorSeventh.getSemitonesFromRoot()) {
                this.chordType = "Dominant";
            }
        } else if (rootToThird == Interval.MinorThird.getSemitonesFromRoot() &&
                thirdToFifth == Interval.MajorThird.getSemitonesFromRoot()) {
            if (note4 == null) {
                this.chordType = "Minor";
            } else if (rootToSeventh == Interval.MajorSeventh.getSemitonesFromRoot()) {
                this.chordType = "Minor Major 7th";
            } else if (rootToSeventh == Interval.MinorSeventh.getSemitonesFromRoot()) {
                this.chordType = "Minor 7th";
            }
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
    public Note getNote4() {
        return this.note4;
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
    public void setNote4(Note note4) {
        this.note4 = note4;
    }
    public void setChordType(String chordType) {
        this.chordType = chordType;
    }
}

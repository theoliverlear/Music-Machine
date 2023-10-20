package org.theoliverlear;

public class Chord {
    Note noteOne;
    Note noteTwo;
    Note noteThree;
    Note noteFour;
    String chordType;
    //----------------------------Constructors--------------------------------
    public Chord(Note noteOne, Note noteTwo, Note noteThree) {
        this.noteOne = noteOne;
        this.noteTwo = noteTwo;
        this.noteThree = noteThree;
        this.determineChordType();
    }
    public Chord(Note noteOne, Note noteTwo, Note noteThree, Note noteFour) {
        this.noteOne = noteOne;
        this.noteTwo = noteTwo;
        this.noteThree = noteThree;
        this.noteFour = noteFour;
        this.determineChordType();
    }
    //------------------------------Methods-----------------------------------
    public void determineChordType() {
        int rootToThird = this.noteTwo.getNoteNumber() -
                          this.noteOne.getNoteNumber();
        int thirdToFifth = this.noteThree.getNoteNumber() -
                           this.noteTwo.getNoteNumber();
        int rootToSeventh = 0;
        if (noteFour != null) {
            rootToSeventh = this.noteFour.getNoteNumber() -
                            this.noteOne.getNoteNumber();
        }
        if (rootToThird == Interval.MajorThird.getSemitonesFromRoot() &&
                thirdToFifth == Interval.MinorThird.getSemitonesFromRoot()) {
            if (noteFour == null) {
                this.chordType = "Major";
            } else if (rootToSeventh == Interval.MajorSeventh.getSemitonesFromRoot()) {
                this.chordType = "Major 7th";
            } else if (rootToSeventh == Interval.MinorSeventh.getSemitonesFromRoot()) {
                this.chordType = "Dominant";
            }
        } else if (rootToThird == Interval.MinorThird.getSemitonesFromRoot() &&
                thirdToFifth == Interval.MajorThird.getSemitonesFromRoot()) {
            if (noteFour == null) {
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
    public Note getNoteOne() {
        return this.noteOne;
    }
    public Note getNoteTwo() {
        return this.noteTwo;
    }
    public Note getNoteThree() {
        return this.noteThree;
    }
    public Note getNoteFour() {
        return this.noteFour;
    }
    public String getChordType() {
        return this.chordType;
    }
    //------------------------------Setters-----------------------------------
    public void setNoteOne(Note noteOne) {
        this.noteOne = noteOne;
    }
    public void setNoteTwo(Note noteTwo) {
        this.noteTwo = noteTwo;
    }
    public void setNoteThree(Note noteThree) {
        this.noteThree = noteThree;
    }
    public void setNoteFour(Note noteFour) {
        this.noteFour = noteFour;
    }
    public void setChordType(String chordType) {
        this.chordType = chordType;
    }
}

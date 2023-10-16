package org.theoliverlear;

public class Main {
    // TODO: make piano training program which plays a note, chord, or
    //  interval and asks the user to identify it

    // TODO: make training program which has notes given and asks the user to
    // play them on the piano

    public static void main(String[] args) {
        // Major
        Chord chord = new Chord(Note.C1, Note.E1, Note.G1);
        String chordType = chord.getChordType();
        System.out.println("The chord of C E G is: " + chordType);
        // Minor
        chord = new Chord(Note.C1, Note.E_FLAT_1, Note.G1);
        chordType = chord.getChordType();
        System.out.println("The chord of C Eb G is: " + chordType);
        // Augmented
        chord = new Chord(Note.C1, Note.E1, Note.G_SHARP_1);
        chordType = chord.getChordType();
        System.out.println("The chord of C E G# is: " + chordType);
        // Diminished
        chord = new Chord(Note.C1, Note.E_FLAT_1, Note.G_FLAT_1);
        chordType = chord.getChordType();
        System.out.println("The chord of C Eb Gb is: " + chordType);
    }
}
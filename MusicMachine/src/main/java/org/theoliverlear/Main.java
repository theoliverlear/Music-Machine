package org.theoliverlear;

public class Main {
    public static void main(String[] args) {
        Chord chord = new Chord(Note.C1, Note.E_FLAT_1, Note.G1);
        String chordType = chord.getChordType();
        System.out.println("The chord of C E G is: " + chordType);
    }
}
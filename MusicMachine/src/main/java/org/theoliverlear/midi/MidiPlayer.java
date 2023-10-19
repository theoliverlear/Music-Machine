package org.theoliverlear.midi;

import org.theoliverlear.Note;

import javax.sound.midi.*;
import java.util.Arrays;
import java.util.Scanner;

public class MidiPlayer {
    public static void main(String[] args) throws MidiUnavailableException {
        MidiDevice.Info[] infos = MidiSystem.getMidiDeviceInfo();
        Arrays.stream(infos).forEach(System.out::println);
        MidiDevice device = MidiSystem.getMidiDevice(infos[5]);
        device.open();
        Receiver receiver = device.getReceiver();
        //userPlayNote(receiver);
        // A 2d array of the right hand part of Fur Elise. index 0 is the note
        // in MIDI and index 1 is the note duration in milliseconds.
        int[][] rightHandNotesWithTempo = {
                {Note.E4.getNoteNumber(), 500},
                {Note.D_SHARP_4.getNoteNumber(), 500},
                {Note.E4.getNoteNumber(), 500},
                {Note.D_SHARP_4.getNoteNumber(), 500},
                {Note.E4.getNoteNumber(), 500},
                {Note.B3.getNoteNumber(), 500},
                {Note.D4.getNoteNumber(), 500},
                {Note.C4.getNoteNumber(), 500},
                {Note.A3.getNoteNumber(), 500},
                {Note.REST.getNoteNumber(), 1500},
                {Note.C3.getNoteNumber(), 500},
                {Note.E3.getNoteNumber(), 500},
                {Note.A3.getNoteNumber(), 500},
                {Note.B3.getNoteNumber(), 500},
                {Note.REST.getNoteNumber(), 1500},
                {Note.E3.getNoteNumber(), 500},
                {Note.G_SHARP_3.getNoteNumber(), 500},
                {Note.B3.getNoteNumber(), 500},
                {Note.C4.getNoteNumber(), 500},
                {Note.REST.getNoteNumber(), 1500},
                {Note.E3.getNoteNumber(), 500},
                {Note.E4.getNoteNumber(), 500},
                {Note.D_SHARP_4.getNoteNumber(), 500},
                {Note.E4.getNoteNumber(), 500},
                {Note.D_SHARP_4.getNoteNumber(), 500},
                {Note.E4.getNoteNumber(), 500},
                {Note.B3.getNoteNumber(), 500},
                {Note.D4.getNoteNumber(), 500},
                {Note.C4.getNoteNumber(), 500},
                {Note.A3.getNoteNumber(), 500},


        };
        // A 2d array of the left hand part of Fur Elise. index 0 is the note
        // in MIDI and index 1 is the note duration in milliseconds.
        int[][] leftHandNotesWithTempo = {{Note.REST.getNoteNumber(), 4000},
                {Note.A1.getNoteNumber(), 500},
                {Note.E2.getNoteNumber(), 500},
                {Note.A2.getNoteNumber(), 500},
                {Note.REST.getNoteNumber(), 1500},
                {Note.E1.getNoteNumber(), 500},
                {Note.E2.getNoteNumber(), 500},
                {Note.G_SHARP_2.getNoteNumber(), 500},
                {Note.REST.getNoteNumber(), 1500},
                {Note.A1.getNoteNumber(), 500},
                {Note.E2.getNoteNumber(), 500},
                {Note.A2.getNoteNumber(), 500},
                {Note.REST.getNoteNumber(), 1500},
                {Note.E1.getNoteNumber(), 500},
                {Note.E2.getNoteNumber(), 500},
                {Note.G_SHARP_2.getNoteNumber(), 500},
                {Note.REST.getNoteNumber(), 1500}
                };
        Thread rightHand = new Thread(() -> {
            arrayPlayNote(receiver, rightHandNotesWithTempo);
        });
        Thread leftHand = new Thread(() -> {
            arrayPlayNote(receiver, leftHandNotesWithTempo);
        });
        rightHand.start();
        //leftHand.start();
        try {
            rightHand.join();
            //leftHand.join();
        } catch (InterruptedException ex) {
            ex.printStackTrace();
        }
        receiver.close();
        device.close();
    }
    public static int noteToMidiNote(int note) {
        if (note != -1) {
            return note + 33;
        } else {
            return -1;
        }
    }
    public static void arrayPlayNote(Receiver receiver, int[][] notesWithTempo) {
       //notesWithTempo = Arrays.copyOf(notesWithTempo, 15);
        for (int[] noteWithTempo : notesWithTempo) {
            try {
                if (noteWithTempo[0] == Note.REST.getNoteNumber()) {
                    Thread.sleep((int) (noteWithTempo[1] / 1.75));
                } else {
                    System.out.println("Playing note: " + noteWithTempo[0]);
                    playNote(receiver, noteToMidiNote((noteWithTempo[0])),
                                               90, (int) (noteWithTempo[1] / 1.75));
                }
            } catch (InvalidMidiDataException ex) {
                ex.printStackTrace();
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }
    }
    public static void userPlayNote(Receiver receiver) {
        Scanner userInput = new Scanner(System.in);
        while (true) {
            System.out.println("Enter a note (0-127) or \"exit\" to quit: ");
            String response = userInput.nextLine();
            if (response.equals("exit")) {
                break;
            } else {
               try {
                   int note = Integer.parseInt(response);
                   playNote(receiver, note, 90, 1000);
               } catch (NumberFormatException ex) {
                   System.out.println("Please enter a number.");
               } catch (InvalidMidiDataException ex) {
                   ex.printStackTrace();
               }
            }
        }
    }
    public static void playNote(Receiver receiver, int note, int velocity, int noteDuration) throws InvalidMidiDataException {
        try {
            ShortMessage noteOn = new ShortMessage();
            noteOn.setMessage(ShortMessage.NOTE_ON, 0, note, velocity);
            receiver.send(noteOn, -1);
            Thread.sleep(noteDuration);
            ShortMessage noteOff = new ShortMessage();
            noteOff.setMessage(ShortMessage.NOTE_OFF, 0, note, velocity);
            receiver.send(noteOff, -1);
        } catch (InterruptedException ex) {
            ex.printStackTrace();
        }
    }
}

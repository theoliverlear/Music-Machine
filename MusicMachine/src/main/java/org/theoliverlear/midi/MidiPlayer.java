package org.theoliverlear.midi;

import org.theoliverlear.Note;

import javax.sound.midi.*;
import java.io.File;
import java.io.IOException;
import java.util.Arrays;
import java.util.Scanner;
import java.util.concurrent.CountDownLatch;

public class MidiPlayer {
    public static void main(String[] args) throws MidiUnavailableException, InvalidMidiDataException, IOException {
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
//        Thread rightHand = new Thread(() -> {
//            arrayPlayNote(receiver, rightHandNotesWithTempo);
//        });
//        Thread leftHand = new Thread(() -> {
//            arrayPlayNote(receiver, leftHandNotesWithTempo);
//        });
//        rightHand.start();
//        leftHand.start();
//        try {
//            rightHand.join();
//            leftHand.join();
//        } catch (InterruptedException ex) {
//            ex.printStackTrace();
//        }
        //File midiFile = new File("src/main/resources/sonata_in_c.mid");
        //File midiFile = new File("src/main/resources/fur_elise.mid");
        File midiFile = new File("src/main/resources/hedwigs_theme.mid");
        filePlayNoteSimple(receiver, device, midiFile);
        //filePlayNote(receiver, device, midiFile);
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
    public static void filePlayNote(Receiver receiver, MidiDevice device, File midiFile) throws MidiUnavailableException, InvalidMidiDataException, IOException {
        // Get a sequencer
        Sequencer player = MidiSystem.getSequencer(false);
        // Open the sequencer
        player.open();
        // Get a sequence from the midi file
        Sequence sequence = MidiSystem.getSequence(midiFile);
        // Set the sequence to the sequencer
        player.setSequence(sequence);
        // Set piano to the receiver
        Receiver pianoReceiver = device.getReceiver();
        // Set the sequencer to the transmitter
        Transmitter seqTransmitter = player.getTransmitter();
        // Route the transmitter to the receiver
        seqTransmitter.setReceiver(pianoReceiver);


        player.addMetaEventListener(metaEvent -> {
            if (metaEvent.getType() == 47) {
                player.close();
            }
        });
        Track[] tracks = player.getSequence().getTracks();
        Thread[] threads = new Thread[tracks.length];
        CountDownLatch countDownTimer = new CountDownLatch(tracks.length);
        for (int trackIndex = 0; trackIndex < tracks.length; trackIndex++) {
            Track track = tracks[trackIndex];
            threads[trackIndex] = new Thread(() -> {
                for (int trackEvent = 0; trackEvent < track.size(); trackEvent++) {
                    MidiEvent midiEvent = track.get(trackEvent);
                    MidiMessage midiMessage = midiEvent.getMessage();
                    if (midiMessage instanceof ShortMessage) {
                        ShortMessage note = (ShortMessage) midiMessage;
                        if (note.getCommand() == ShortMessage.NOTE_ON) {
                            int key = note.getData1();
                            int velocity = note.getData2();
                            if (velocity > 0) {
                                for (int followingEvent = trackEvent + 1; followingEvent < track.size(); followingEvent++) {
                                    MidiEvent followingMidiEvent = track.get(followingEvent);
                                    MidiMessage followingMidiMessage = followingMidiEvent.getMessage();
                                    if (followingMidiMessage instanceof ShortMessage) {
                                        ShortMessage followingNote = (ShortMessage) followingMidiMessage;
                                        if ((followingNote.getCommand() == ShortMessage.NOTE_OFF ||
                                        followingNote.getCommand() == ShortMessage.NOTE_ON && followingNote.getData2() == 0) &&
                                        followingNote.getData1() == key) {
                                            long noteDurationTicks = followingMidiEvent.getTick() - midiEvent.getTick();
                                            long noteDurationMilliSeconds = (long) ((noteDurationTicks * 60000) / (sequence.getResolution() * player.getTempoInBPM()));
                                            System.out.println("Playing note: " + key + " for " + noteDurationMilliSeconds + " milliseconds.");
                                            try {
                                                playNote(receiver, key, velocity, (int) noteDurationMilliSeconds);
                                            } catch (
                                                    InvalidMidiDataException ex) {
                                                ex.printStackTrace();
                                            }
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            });
        }
        for (Thread thread : threads) {
            thread.start();
        }
        for (Thread thread : threads) {
            try {
                thread.join();
            } catch (InterruptedException ex) {
                ex.printStackTrace();
            }
        }
        player.close();
    }
    public static void filePlayNoteSimple(Receiver receiver, MidiDevice device, File midiFile) throws MidiUnavailableException, InvalidMidiDataException, IOException {
        Sequencer player = MidiSystem.getSequencer(false);
        player.open();

        Sequence sequence = MidiSystem.getSequence(midiFile);

        player.setSequence(sequence);

        Receiver pianoReceiver = device.getReceiver();

        player.getTransmitter().setReceiver(pianoReceiver);

        player.start();

        player.addMetaEventListener(metaEvent -> {
            if (metaEvent.getType() == 47) {
                player.close();
            }
        });
        while (player.isRunning()) {
            try {
                Thread.sleep(1000);
            } catch (InterruptedException ex) {
                ex.printStackTrace();
            }
        }
        player.close();
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
        public static void playNote(Receiver receiver, int note, int velocity, long noteDuration) throws InvalidMidiDataException {
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

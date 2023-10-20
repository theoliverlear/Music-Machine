package org.theoliverlear.midi;

import org.theoliverlear.Note;

import javax.sound.midi.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Scanner;
import java.util.concurrent.atomic.AtomicBoolean;

public class MidiPrinter {
    MidiDevice device;
    Receiver receiver;
    Transmitter transmitter;
    String sharpOrFlat;
    HashMap<Integer, Note> midiNoteMap = new HashMap<>();
    //----------------------------Constructors--------------------------------
    public MidiPrinter(MidiDevice device) throws MidiUnavailableException {
        this.device = device;
        this.transmitter = device.getTransmitter();
        this.sharpOrFlat = "Sharp";
        ArrayList<Note> notes = new ArrayList<>(Arrays.asList(Note.values()));
        System.out.println("Notes: " + notes);
        for (Note note : notes) {
            if (note.getNoteName().contains(this.sharpOrFlat) ||
                    note.getNoteName().contains("Natural")) {
                this.midiNoteMap.put(convertMidiNote(note.getNoteNumber()), note);
            }
        }
        this.transmitter.setReceiver(new Receiver() {
            @Override
            public void send(MidiMessage message, long timeStamp) {
                if (message instanceof ShortMessage) {
                    ShortMessage shortMessage = (ShortMessage) message;
                    int key = shortMessage.getData1();
                    int velocity = shortMessage.getData2();
                    if (ShortMessage.NOTE_ON == shortMessage.getCommand() &&
                            velocity > 0) {
                        System.out.println("Key: " + midiNoteMap.get(key).getNoteName() + " Velocity: " + velocity);
                    }
                }
            }
            @Override
            public void close() {
                System.out.println("Receiver closed.");
            }
        });

    }
    //------------------------------Methods-----------------------------------
    public static int convertMidiNote(int midiKey) {
        return midiKey + 21;
    }
    public void printMidiInput() throws MidiUnavailableException {
        this.device.open();

        this.device.close();
    }
    public ShortMessage getMidiNote() throws MidiUnavailableException {
        ShortMessage midiNote = new ShortMessage();
        return midiNote;
    }
    public static void main(String[] args) throws MidiUnavailableException, InterruptedException {
        MidiDevice.Info[] infos = MidiSystem.getMidiDeviceInfo();
        //MidiDevice device = MidiSystem.getMidiDevice(infos[5]);
        MidiDevice device = MidiSystem.getMidiDevice(infos[11]);
        MidiPrinter midiPrinter = new MidiPrinter(device);
        Thread thread = new Thread(() -> {
            Scanner userInput = new Scanner(System.in);
            String exit = "";
            do {
                System.out.println("Type \"exit\" to exit or press enter to continue.");
                exit = userInput.next();
                if (exit.contains("exit")) {
                    System.out.println("Exiting...");
                    break;
                }
            } while (true);
        });
        midiPrinter.device.open();
        thread.start();
        thread.join();

        midiPrinter.device.close();
        //midiPrinter.printMidiInput();
    }
}

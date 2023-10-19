package org.theoliverlear.midi;

import javax.sound.midi.*;
import java.util.Arrays;

public class MidiPrinter {
    MidiDevice device;
    Receiver receiver;
    Transmitter transmitter;
    //----------------------------Constructors--------------------------------
    public MidiPrinter(MidiDevice device) throws MidiUnavailableException {
        this.device = device;
        this.receiver = device.getReceiver();
        this.transmitter = device.getTransmitter();
        this.transmitter.setReceiver(this.receiver);
    }
    //------------------------------Methods-----------------------------------
    public void printMidiInput() throws MidiUnavailableException {
        this.device.open();
        this.device.close();
    }
    public void getMidiNote() throws MidiUnavailableException {
        this.device.getTransmitter().setReceiver(new Receiver() {
            @Override
            public void send(MidiMessage message, long timeStamp) {
                if (message instanceof ShortMessage) {
                    ShortMessage noteMsg = (ShortMessage) message;
                    if (noteMsg.getCommand() == ShortMessage.NOTE_ON) {
                        System.out.println("Note on: " + noteMsg.getData1());
                    } else if (noteMsg.getCommand() == ShortMessage.NOTE_OFF) {
                        System.out.println("Note off: " + noteMsg.getData1());
                    }
                }
            }
            @Override
            public void close() {}
        });
    }
    public static void main(String[] args) throws MidiUnavailableException {
        MidiDevice.Info[] infos = MidiSystem.getMidiDeviceInfo();
        MidiDevice device = MidiSystem.getMidiDevice(infos[5]);
        MidiPrinter midiPrinter = new MidiPrinter(device);
        midiPrinter.printMidiInput();
    }
}

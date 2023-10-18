package org.theoliverlear.midi;

import javax.sound.midi.MidiDevice;
import javax.sound.midi.MidiSystem;
import javax.sound.midi.MidiUnavailableException;
import javax.sound.midi.Synthesizer;
import java.util.Arrays;

public class MidiInfo {
    public static void main(String[] args) throws MidiUnavailableException {
        MidiDevice.Info[] infos = MidiSystem.getMidiDeviceInfo();
        Arrays.stream(infos).forEach(System.out::println);
        MidiDevice device = MidiSystem.getMidiDevice(infos[5]);
        
    }
}


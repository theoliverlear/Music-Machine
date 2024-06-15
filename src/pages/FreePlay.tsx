import React from 'react';
import Piano from "../components/piano/Piano";
import MidiController from "../components/midi/MidiController";
import Title from "../components/title/Title";
import MidiPopup from "../components/midi/MidiPopup";


function FreePlay() {
    const [midiInput, setMidiInput] = React.useState<WebMidi.MIDIInput | undefined>(undefined);
    function handleMidiMessage(message: WebMidi.MIDIMessageEvent) {
        console.log('Midi Message Received');

    }
    return (
        <div>
            <Title title="Free Play" size={1}/>
            <MidiController />
            <Piano />
        </div>
    );
}
export default FreePlay;
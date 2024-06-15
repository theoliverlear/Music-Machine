import React, {useEffect, useState} from 'react';
import MidiPopup from "./MidiPopup";
import MidiDevice from "./MidiDevice";

function MidiController() {
    const [midiInput, setMidiInput] = useState<WebMidi.MIDIInput | undefined>(undefined);
    const [midiOutput, setMidiOutput] = useState<WebMidi.MIDIOutput | undefined>(undefined);
    function handleMidiDeviceSelection(inputDevice: WebMidi.MIDIInput | undefined, outputDevice: WebMidi.MIDIOutput | undefined) {
        console.log('Midi Device Selected');
        setMidiInput(inputDevice);
        setMidiOutput(outputDevice);
    }
    return (
        <div>
            <MidiPopup onMidiDeviceSelected={handleMidiDeviceSelection} />
            <MidiDevice input={midiInput} output={midiOutput} />
        </div>
    )
}
export default MidiController;
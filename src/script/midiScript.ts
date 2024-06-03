navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);

function onMIDISuccess(midiAccess: any) {
    const inputs = midiAccess.inputs;
    const outputs = midiAccess.outputs;

    console.log('MIDI Access Object', midiAccess);

    for (let input of inputs.values()) {
        console.log('MIDI input', input);
    }

    for (let output of outputs.values()) {
        console.log('MIDI output', output);
    }
}

function onMIDIFailure() {
    console.log('Could not access your MIDI devices.');
}

console.log('MIDI Script Loaded');
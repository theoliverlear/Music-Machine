import React from 'react';
import './MidiPiano.scss';
import MidiPopup from "../midi-popup/MidiPopup";
import Piano from "../../element-group-piano/piano/Piano";

function MidiPiano() {
    return (
        <div className={"midi-piano"}>
            <MidiPopup onMidiDeviceSelected={() => null}/>
            <Piano currentNotes={[]}/>
        </div>
    );
}

export default MidiPiano;
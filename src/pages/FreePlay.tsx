import React from 'react';
import Piano from "../components/piano/Piano";
import MidiController from "../components/midi/MidiController";
import Title from "../components/title/Title";

function FreePlay() {
    return (
        <div>
            <Title title="Free Play" size={1}/>
            <MidiController />
            <Piano />
        </div>
    );
}
export default FreePlay;
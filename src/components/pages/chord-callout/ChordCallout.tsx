import React, {ReactElement, useState} from 'react';
import './ChordCallout.scss';
import {Metronome} from "../../../models/metronome/Metronome";
import NavBar
    from "../../elements/element-group-menu/element-group-nav-bar/nav-bar/NavBar";
import Button from "../../elements/element-group-native/button/Button";
import {ElementSize} from "../../../models/ElementSize";
import ChordCalloutPicker from '../../elements/element-group-chord-callout/element-group-chord-callout-picker/chord-callout-picker/ChordCalloutPicker';
import MidiPiano
    from "../../elements/element-group-midi/midi-piano/MidiPiano";
import {
    ChordCalloutOptionType
} from "../../elements/element-group-chord-callout/element-group-chord-callout-picker/chord-callout-option/models/ChordCalloutOptionType";
import PageTitle
    from "../../elements/element-group-text/page-title/PageTitle";

function ChordCallout(): ReactElement {
    const [metronome, setMetronome] = useState<Metronome>(new Metronome(85, 4, 0.8));
    const [gameModePicked, setGameModePicked] = useState<boolean>(false);
    const [gameMode, setGameMode] = useState<string>();
    const [midiDeviceSelected, setMidiDeviceSelected] = useState<boolean>(false);

    function handleGameModeChange(gameMode: ChordCalloutOptionType) {
        setGameModePicked(true);
        setGameMode(gameMode);
    }
    function handleGameModePicked(): void {

    }
    return (
        <div className={"chord-callout"}>
            <NavBar/>
            <PageTitle text={"Chord Callout"}/>
            <Button text={"Metronome"} elementSize={ElementSize.MEDIUM} handleClick={metronome.toggle}/>
            {!gameModePicked &&
                <ChordCalloutPicker onOptionSelected={handleGameModeChange}/>}
            {gameModePicked &&
                <MidiPiano onNoteChange={() => null}
                        onMidiDeviceSelected={() => null}/>}
        </div>
    );
}
export default ChordCallout;
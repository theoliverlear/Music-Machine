import React, {ReactElement, useState} from 'react';
import './ChordCallout.scss';
import {Metronome} from "../../../models/metronome/Metronome";
import NavBar
    from "../../elements/element-group-menu/element-group-nav-bar/nav-bar/NavBar";
import Button from "../../elements/element-group-native/button/Button";
import {ElementSize} from "../../../models/ElementSize";
import ChordCalloutPicker
    from '../../elements/element-group-chord-callout/element-group-chord-callout-picker/chord-callout-picker/ChordCalloutPicker';
import MidiPiano
    from "../../elements/element-group-midi/midi-piano/MidiPiano";
import {
    ChordCalloutOptionType
} from "../../elements/element-group-chord-callout/element-group-chord-callout-picker/chord-callout-option/models/ChordCalloutOptionType";
import PageTitle
    from "../../elements/element-group-text/page-title/PageTitle";
import ChordDisplay
    from "../../elements/element-group-chord-callout/element-group-chord-display/chord-display/ChordDisplay";
import {Note} from "../../../models/note/Note";
import {ChordCalloutGame} from "./models/ChordCalloutGame";
import CountdownTimer
    from "../../elements/element-group-game/countdown-timer/CountdownTimer";
import {usePiano} from "../../../hooks/piano/usePiano";

function ChordCallout(): ReactElement {
    const [game, setGame] = useState<ChordCalloutGame>(new ChordCalloutGame());
    const [metronome, setMetronome] = useState<Metronome>(new Metronome(85, 4, 0.8));
    const [gameModePicked, setGameModePicked] = useState<boolean>(false);
    const [gameMode, setGameMode] = useState<ChordCalloutOptionType>(ChordCalloutOptionType.KEYS);
    const {
        currentNotes,
        midiDeviceSelected,
        handleMidiDeviceSelected,
        handleNoteChange
    } = usePiano();

    function handleGameModeChange(gameMode: ChordCalloutOptionType): void {
        setGameModePicked(true);
        setGameMode(gameMode);
    }

    return (
        <div className={"chord-callout"}>
            <NavBar/>
            <PageTitle text={"Chord Callout"}/>
            <Button text={"Metronome"} elementSize={ElementSize.MEDIUM} handleClick={metronome.toggle}/>
            {!gameModePicked &&
                <ChordCalloutPicker onOptionSelected={handleGameModeChange}/>}
            {gameModePicked &&
                <MidiPiano onNoteChange={handleNoteChange}
                           onMidiDeviceSelected={handleMidiDeviceSelected}/>}
            {gameModePicked &&
                <ChordDisplay chordType={gameMode} currentNotes={game.getCurrentChord().notes.asArray()}/>}
            <CountdownTimer timeInSeconds={5}/>
        </div>
    );
}
export default ChordCallout;
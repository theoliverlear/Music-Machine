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

function ChordCallout(): ReactElement {
    const [metronome, setMetronome] = useState<Metronome>(new Metronome(85, 4, 0.8));
    const [gameModePicked, setGameModePicked] = useState<boolean>(false);
    const [gameMode, setGameMode] = useState<ChordCalloutOptionType>(ChordCalloutOptionType.KEYS);
    const [midiDeviceSelected, setMidiDeviceSelected] = useState<boolean>(false);
    const [currentNotes, setCurrentNotes] = useState<Note[]>([]);

    function handleNoteChange(currentNotes: Note[]): void {
        currentNotes = Note.sortNotes(currentNotes);
        setCurrentNotes(currentNotes);
    }

    function handleGameModeChange(gameMode: ChordCalloutOptionType): void {
        setGameModePicked(true);
        setGameMode(gameMode);
    }

    function handleMidiDeviceSelected(isSelected: boolean): void {
        setMidiDeviceSelected(isSelected);
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
                <ChordDisplay chordType={gameMode} currentNotes={currentNotes}/>}
        </div>
    );
}
export default ChordCallout;
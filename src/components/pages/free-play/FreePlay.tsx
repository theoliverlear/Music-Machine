import React, {ReactElement, useState} from 'react';
import "./FreePlay.scss";
import {Note} from "../../../models/note/Note";
import CurrentNotes
    from "../../elements/element-group-note/current-notes/CurrentNotes";
import CurrentChord
    from "../../elements/element-group-note/element-group-chord/current-chord/CurrentChord";
import {Chord} from "../../../models/chord/Chord";
import NavBar
    from "../../elements/element-group-menu/element-group-nav-bar/nav-bar/NavBar";
import PitchSlider
    from "../../elements/element-group-setting/pitch-slider/PitchSlider";
import PageTitle
    from "../../elements/element-group-text/page-title/PageTitle";
import MidiPiano
    from "../../elements/element-group-midi/midi-piano/MidiPiano";
import {usePiano} from "../../../hooks/piano/usePiano";
import {usePitch} from "../../../hooks/piano/usePitch";


function FreePlay(): ReactElement {
    const [currentChord, setCurrentChord] = useState<Chord>(new Chord());
    const {
        currentNotes,
        midiDeviceSelected,
        handleMidiDeviceSelected,
        handleNoteChange
    } = usePiano();

    function updateCurrentNotes(newNotes: Note[]): void {
        handleNoteChange(newNotes);
        currentChord.updateChordByCurrentNotes(newNotes);
        setCurrentChord(currentChord);
    }

    const {
        pitchState,
        pitchType,
        handlePitchChange,
        handlePitchTypeSelection,
        getPitch,
    } = usePitch();

    return (
        <div className={"free-play"}>
            <NavBar/>
            <PitchSlider onPitchSelection={handlePitchChange}
            onPitchTypeSelection={handlePitchTypeSelection}/>
            <PageTitle text="Free Play"/>
            {midiDeviceSelected && (<div className={"input-info-div"}>
                    <CurrentChord currentChord={currentChord}
                                  pitch={getPitch(currentNotes)}/>
                    <CurrentNotes currentNotes={currentNotes}
                                  pitch={getPitch(currentNotes)} pitchType={pitchType}/>
            </div>)}
            <MidiPiano onNoteChange={updateCurrentNotes} onMidiDeviceSelected={handleMidiDeviceSelected}/>
        </div>
    );
}
export default FreePlay;
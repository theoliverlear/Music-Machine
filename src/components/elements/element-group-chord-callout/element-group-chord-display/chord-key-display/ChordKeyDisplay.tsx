import React, {ReactElement} from 'react';
import './ChordKeyDisplay.scss';
import {Note} from "../../../../../models/note/Note";
import Piano from "../../../element-group-piano/piano/Piano";

interface ChordDisplayProps {
    currentNotes: Note[];
}

function ChordKeyDisplay(props: ChordDisplayProps): ReactElement {
    function getKeyLimits(): [number, number] {
        const firstNote: Note = props.currentNotes[0];
        const lastNote: Note = props.currentNotes[props.currentNotes.length - 1];
        return [firstNote.noteData.noteNumber - 12, lastNote.noteData.noteNumber + 12];
    }

    return (
        <div className={"chord-key-display"}>
            <Piano currentNotes={props.currentNotes} keyLimits={getKeyLimits()}/>
        </div>
    );
}

export default ChordKeyDisplay;
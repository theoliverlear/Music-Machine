import React, {ReactElement} from 'react';
import './ChordDisplay.scss';
import {
    ChordCalloutOptionType
} from "../../element-group-chord-callout-picker/chord-callout-option/models/ChordCalloutOptionType";
import ChordKeyDisplay from "../chord-key-display/ChordKeyDisplay";
import ChordSheetDisplay from "../chord-sheet-display/ChordSheetDisplay";
import ChordNameDisplay from "../chord-name-display/ChordNameDisplay";
import {Note} from "../../../../../models/note/Note";

interface ChordDisplayProps {
    chordType: ChordCalloutOptionType;
    currentNotes: Note[];
}

function ChordDisplay(props: ChordDisplayProps): ReactElement {
    function getDisplayElement(): ReactElement {
        switch (props.chordType) {
            case ChordCalloutOptionType.KEYS:
                return <ChordKeyDisplay currentNotes={props.currentNotes}/>;
            case ChordCalloutOptionType.SHEET_MUSIC:
                return <ChordSheetDisplay/>;
            case ChordCalloutOptionType.NAME:
                return <ChordNameDisplay/>;
            default:
                throw new Error("Unknown chord type: " + props.chordType);
        }
    }

    return (
        <div className={"chord-display"}>
            {getDisplayElement()}
        </div>
    );
}

export default ChordDisplay;
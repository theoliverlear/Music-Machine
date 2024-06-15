import React from 'react';
import OpeningWhiteKeyOctave from "./OpeningWhiteKeyOctave";
import OpeningBlackKeyOctave from "./OpeningBlackKeyOctave";
import {Note} from "../../../../models/Note";

interface OpeningOctaveProps {
    currentNotes: Note[];
    isNotePlayed: (dataNote: string) => boolean;
}

function OpeningOctave(props: OpeningOctaveProps) {
    return (
        <div className={"octave-container opening-octave"}>
            <OpeningWhiteKeyOctave currentNotes={props.currentNotes} isNotePlayed={props.isNotePlayed}/>
            <OpeningBlackKeyOctave currentNotes={props.currentNotes} isNotePlayed={props.isNotePlayed}/>
        </div>
    );
}
export default OpeningOctave;
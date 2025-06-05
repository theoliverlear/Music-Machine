import React from 'react';
import OpeningWhiteKeyOctave from "../opening-white-key-octave/OpeningWhiteKeyOctave";
import OpeningBlackKeyOctave from "../opening-black-key-octave/OpeningBlackKeyOctave";
import {Note} from "../../../../../../models/note/Note";

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
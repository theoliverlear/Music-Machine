import React, {useState} from 'react';
import Title from "../../title/Title";
import {Chord} from "../../../models/Chord";
import {Note} from "../../../models/Note";

interface CurrentChordProps {
    currentChord: Chord;
}

function CurrentChord(props: CurrentChordProps) {
    return (
        <div>
            <Title title="Current Chord: " size={4} />
            <Title title={props.currentChord.name} size={5} />
        </div>
    );
}
export default CurrentChord;
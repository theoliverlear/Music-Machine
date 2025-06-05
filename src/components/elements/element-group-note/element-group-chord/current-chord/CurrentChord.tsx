import React, {useState} from 'react';
import Title from "../../../element-group-native/title/Title";
import {Chord} from "../../../../../models/chord/Chord";
import {Note} from "../../../../../models/note/Note";

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
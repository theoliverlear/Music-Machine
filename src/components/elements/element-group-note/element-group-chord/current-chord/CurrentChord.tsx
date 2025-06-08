import React, {ReactElement} from 'react';
import Title from "../../../element-group-native/title/Title";
import {Chord} from "../../../../../models/chord/Chord";
import {TagType} from "../../../../../models/html/TagType";

interface CurrentChordProps {
    currentChord: Chord;
}

function CurrentChord(props: CurrentChordProps): ReactElement {
    return (
        <div className={"current-chord"}>
            <Title text="Current Chord: " tagType={TagType.H4} />
            {props.currentChord.notes.size == 0 && <Title text="None" tagType={TagType.H5} />}
            {props.currentChord.notes.size != 0 && <Title text={props.currentChord.fullName} tagType={TagType.H5}/>}
        </div>
    );
}
export default CurrentChord;
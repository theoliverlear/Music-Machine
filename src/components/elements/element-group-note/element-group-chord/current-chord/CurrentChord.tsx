import React, {ReactElement} from 'react';
import Title from "../../../element-group-native/title/Title";
import {Chord} from "../../../../../models/chord/Chord";
import {TagType} from "../../../../../models/html/TagType";
import {
    Pitch
} from "../../../element-group-setting/pitch-slider/models/types";

interface CurrentChordProps {
    currentChord: Chord;
    pitch?: Pitch;
}

function CurrentChord(props: CurrentChordProps): ReactElement {
    function getChordName(): string {
        if (props.pitch) {
            return props.currentChord.getPitchedFullName(props.pitch);
        } else {
            return props.currentChord.fullName;
        }
    }
    return (
        <div className={"current-chord"}>
            <Title text="Current Chord: " tagType={TagType.H4} />
            {props.currentChord.notes.size === 0 && <Title text="None" tagType={TagType.H5} />}
            {props.currentChord.notes.size !== 0 && <Title text={getChordName()} tagType={TagType.H5}/>}
        </div>
    );
}
export default CurrentChord;
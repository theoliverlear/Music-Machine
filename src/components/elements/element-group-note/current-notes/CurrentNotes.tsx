import React, {ReactElement} from 'react';
import {Note} from "../../../../models/note/Note";
import CurrentNote from "../current-note/CurrentNote";
import Title from "../../element-group-native/title/Title";
import './CurrentNotes.css';
import {TagType} from "../../../../models/html/TagType";
import {Pitch} from "../../element-group-setting/pitch-slider/models/types";

interface CurrentNotesProps {
    currentNotes: Note[];
    pitch?: Pitch;
}

function CurrentNotes(props: CurrentNotesProps): ReactElement {
    function getCurrentNotes(): Note[] {
        return props.currentNotes.sort((noteOne, noteTwo) => noteOne.noteNumber - noteTwo.noteNumber);
    }
    return (
        <div className={"current-notes"}>
            <Title text="Current Notes: " tagType={TagType.H4} />
            {getCurrentNotes().length === 0 && <Title text={"None"} tagType={TagType.H5}/>}
            <div className={"notes"}>
                {getCurrentNotes().map((note, index) => <CurrentNote key={index} currentNote={note} pitch={props.pitch}/>)}
            </div>
        </div>
    );
}
export default CurrentNotes;
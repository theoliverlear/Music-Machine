import React, {ReactElement} from 'react';
import {Note} from "../../../../models/note/Note";
import CurrentNote from "../current-note/CurrentNote";
import Title from "../../element-group-native/title/Title";
import './CurrentNotes.css';
import {TagType} from "../../../../models/html/TagType";

interface CurrentNotesProps {
    currentNotes: Note[];
}

function CurrentNotes(props: CurrentNotesProps): ReactElement {
    return (
        <div className="title-with-notes">
            <Title text="Current Notes: " tagType={TagType.H4} />
            {props.currentNotes.length === 0 && <Title text={"None"} tagType={TagType.H5}/>}
            <div className="current-notes">
                {props.currentNotes.map((note, index) => <CurrentNote key={index} currentNote={note}/>)}
            </div>
        </div>
    );
}
export default CurrentNotes;
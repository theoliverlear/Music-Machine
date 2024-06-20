import React from "react";
import {Note} from "../../../models/Note";
import Title from "../../title/Title";

interface CurrentNoteProps {
    currentNote: Note;
}

function CurrentNote(props: CurrentNoteProps) {
    return (
        <div className="current-note">
            <Title title={props.currentNote.noteData.noteName} size={3} />
        </div>
    );
}
export default CurrentNote;
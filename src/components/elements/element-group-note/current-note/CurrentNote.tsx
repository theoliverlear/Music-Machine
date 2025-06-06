import React from "react";
import {Note} from "../../../../models/note/Note";
import Title from "../../element-group-native/title/Title";

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
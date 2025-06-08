import React, {ReactElement} from "react";
import {Note} from "../../../../models/note/Note";
import Title from "../../element-group-native/title/Title";
import {TagType} from "../../../../models/html/TagType";

interface CurrentNoteProps {
    currentNote: Note;
}

function CurrentNote(props: CurrentNoteProps): ReactElement {
    return (
        <div className="current-note">
            <Title text={props.currentNote.noteData.noteName} tagType={TagType.H3} />
        </div>
    );
}
export default CurrentNote;
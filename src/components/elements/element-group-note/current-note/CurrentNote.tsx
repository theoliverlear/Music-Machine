import React, {ReactElement} from "react";
import {Note} from "../../../../models/note/Note";
import Title from "../../element-group-native/title/Title";
import {TagType} from "../../../../models/html/TagType";
import {Pitch} from "../../element-group-setting/pitch-slider/models/types";
import './CurrentNote.scss';
import {MutableNote} from "../../../../models/note/MutableNote";

interface CurrentNoteProps {
    currentNote: Note;
    pitch?: Pitch;
}

function CurrentNote(props: CurrentNoteProps): ReactElement {
    function getText(): string {
        if (props.pitch) {
            const mutableNote = new MutableNote(props.currentNote);
            return mutableNote.mutateAndGetName(props.pitch);
        } else {
            return props.currentNote.noteData.noteName;
        }
    }

    return (
        <div className="current-note">
            <Title text={getText()} tagType={TagType.H3} />
        </div>
    );
}
export default CurrentNote;
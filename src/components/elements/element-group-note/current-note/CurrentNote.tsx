import React, {ReactElement} from "react";
import {Note} from "../../../../models/note/Note";
import Title from "../../element-group-native/title/Title";
import {TagType} from "../../../../models/html/TagType";
import {Pitch} from "../../element-group-setting/pitch-slider/models/types";

interface CurrentNoteProps {
    currentNote: Note;
    pitch?: Pitch;
}

function CurrentNote(props: CurrentNoteProps): ReactElement {
    function getText(): string {
        if (props.pitch) {
            if (props.pitch === "flat") {
                return props.currentNote.noteData.asFlat;
            } else {
                return props.currentNote.noteData.noteName;
            }
        } else {
            return props.currentNote.noteData.asSharp;
        }
    }

    return (
        <div className="current-note">
            <Title text={getText()} tagType={TagType.H3} />
        </div>
    );
}
export default CurrentNote;
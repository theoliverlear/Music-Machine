import React, {ReactElement} from "react";
import {Note} from "../../../../models/note/Note";
import Title from "../../element-group-native/title/Title";
import {TagType} from "../../../../models/html/TagType";
import {Pitch} from "../../element-group-setting/pitch-slider/models/types";
import './CurrentNote.scss';

interface CurrentNoteProps {
    currentNote: Note;
    pitch?: Pitch;
}

function CurrentNote(props: CurrentNoteProps): ReactElement {
    function getText(): string {
        if (props.pitch) {
            // TODO: Drop this business logic into a service class. Perhaps
            //       NoteFactory.ts.
            if (props.pitch === "sharp") {
                if (props.currentNote.isSharp()) {
                    return props.currentNote.noteData.noteName;
                } else if (props.currentNote.isFlat()) {
                    if (props.currentNote.isSharp()) {
                        return props.currentNote.noteData.asSharp();
                    } else {
                        return props.currentNote.noteData.noteName;
                    }
                } else {
                    return props.currentNote.noteData.asSharp();
                }
            } else if (props.pitch === "flat") {
                if (props.currentNote.isSharp()) {
                    return props.currentNote.noteData.asFlat();
                } else {
                    return props.currentNote.noteData.noteName;
                }
            } else if (props.pitch === "natural") {
                return props.currentNote.noteData.noteName;
            }
        } else {
            return props.currentNote.noteData.noteName;
        }
        return props.currentNote.noteData.noteName;
    }

    return (
        <div className="current-note">
            <Title text={getText()} tagType={TagType.H3} />
        </div>
    );
}
export default CurrentNote;
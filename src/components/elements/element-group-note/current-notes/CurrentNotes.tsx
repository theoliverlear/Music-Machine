import React, {ReactElement} from 'react';
import {Note} from "../../../../models/note/Note";
import CurrentNote from "../current-note/CurrentNote";
import Title from "../../element-group-native/title/Title";
import './CurrentNotes.scss';
import {TagType} from "../../../../models/html/TagType";
import {
    Pitch,
    PitchType
} from "../../element-group-setting/pitch-slider/models/types";
import {NoteFactory} from "../../../../models/note/NoteFactory";

interface CurrentNotesProps {
    currentNotes: Note[];
    pitch?: Pitch;
    pitchType?: PitchType;
}

function CurrentNotes(props: CurrentNotesProps): ReactElement {
    function getCurrentNotes(): Note[] {
        if (props.pitch && props.pitchType) {
            if (props.pitchType === "auto") {
                return NoteFactory.getNoteWithPitches(props.currentNotes)[0];
            } else if (props.pitchType === "manual") {
                return props.currentNotes;
            }
        }
        return props.currentNotes;
    }
    function getCurrentPitches(): Pitch[] {
        let noteWithPitches: Pitch[] = NoteFactory.getNoteWithPitches(props.currentNotes)[1];
        if (props.pitchType === "auto") {
            return noteWithPitches;
        }
        if (props.pitch) {
            for (let i = 0; i < noteWithPitches.length; i++) {
                const currentPitch: Pitch = noteWithPitches[i];
                if (currentPitch === "sharp") {
                    if (props.pitch === "flat") {
                        noteWithPitches[i] = "flat";
                    }
                } else if (currentPitch === "flat") {
                    if (props.pitch === "sharp") {
                        noteWithPitches[i] = "sharp";
                    }
                }
            }
        }
        return noteWithPitches;
    }

    return (
        <div className={"current-notes"}>
            <Title text="Current Notes: " tagType={TagType.H4} />
            {getCurrentNotes().length === 0 && <Title text={"None"} tagType={TagType.H5}/>}
            <div className={"notes"}>
                {getCurrentNotes().map((note: Note, index: number) => (
                    <CurrentNote
                        key={index}
                        currentNote={note}
                        pitch={getCurrentPitches()[index]}
                    />
                ))}
            </div>
        </div>
    );
}
export default CurrentNotes;
import React from 'react';
import {Note} from "../../../models/Note";
import {MidiNote} from "../../../models/MidiNote";
import CurrentNote from "./CurrentNote";
import Title from "../../title/Title";
import './CurrentNotes.css';

interface CurrentNotesProps {
    currentNotes: Note[];
}

function CurrentNotes(props: CurrentNotesProps) {
    return (
        <div className="title-with-notes">
            <Title title="Current Notes: " size={4} />
            <div className="current-notes">
                {/*<CurrentNote currentNote={new Note(new MidiNote(50))} />*/}
                {/*<CurrentNote currentNote={new Note(new MidiNote(52))} />*/}
                {props.currentNotes.map((note, index) => <CurrentNote key={index} currentNote={note} />)}
            </div>
        </div>
    );
}
export default CurrentNotes;
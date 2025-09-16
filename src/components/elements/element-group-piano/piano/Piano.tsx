import React, {ReactElement} from 'react';
import OpeningOctave from "../element-group-octave/element-group-opening/opening-octave/OpeningOctave";
import KeyOctave from "../element-group-octave/key-octave/KeyOctave";
import ClosingOctave from "../element-group-octave/element-group-closing/closing-octave/ClosingOctave";
import './Piano.scss';
import {Note} from "../../../../models/note/Note";
import {NoteData} from "../../../../models/note/NoteData";

interface PianoProps {
    currentNotes: Note[];
    keyLimits?: [number, number];
}
function Piano(props: PianoProps): ReactElement {
    function isNotePlayed(dataNote: string): boolean {
        const [firstNote, secondNote] = dataNote.split(" | ");
        const isPlayed: boolean = props.currentNotes.some(note => note.noteData.fullNoteName === firstNote || note.noteData.fullNoteName === secondNote);
        return isPlayed;
    }
    //----------------------------Limit-Octave--------------------------------
    function shouldLimitOctave(limits: [number, number] | undefined, octave: number): boolean {
        if (!limits) {
            return false;
        }
        const lowNote: NoteData = NoteData.getByNoteNumber(limits[0]);
        const highNote: NoteData = NoteData.getByNoteNumber(limits[1]);
        return lowNote.octave > octave || highNote.octave < octave;
    }
    //-----------------------Get-Element-By-Octave----------------------------
    function getElementByOctave(octaveNumber: number): ReactElement {
        switch (octaveNumber) {
            case 0:
                return (
                    <>
                        {!shouldLimitOctave(props.keyLimits, 0) && (
                            <OpeningOctave currentNotes={props.currentNotes}
                                           isNotePlayed={isNotePlayed}
                                           key={octaveNumber}/>
                        )}
                    </>
                );
            case 8:
                return (
                    <>
                        {!shouldLimitOctave(props.keyLimits, 8) && (
                            <ClosingOctave currentNotes={props.currentNotes}
                                           isNotePlayed={isNotePlayed}
                                           key={octaveNumber}/>
                        )}
                    </>
                );
            default:
                return (
                    <>
                        {!shouldLimitOctave(props.keyLimits, octaveNumber) && (
                            <KeyOctave octaveNumber={octaveNumber}
                                       currentNotes={props.currentNotes}
                                       isNotePlayed={isNotePlayed}
                                       key={octaveNumber}/>
                        )}
                    </>
                )
        }
    }
    //=============================-Element-==================================
    return (
        <div className="piano">
            <div className="key-container">
                {Array.from({length: 9}, (_: unknown, i: number): ReactElement => getElementByOctave(i))}
            </div>
        </div>
    );
}
export default Piano;
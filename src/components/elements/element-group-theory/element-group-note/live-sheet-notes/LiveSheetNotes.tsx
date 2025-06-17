import React, {ReactElement, useEffect, useRef} from "react";
import "./LiveSheetNotes.scss";
import Vex, {
    Factory, Formatter, RenderContext,
    Renderer, Stave,
    StaveConnector,
    StaveNote,
    VexFlow, Voice,
    KeySignature as VexKeySignature
} from "vexflow";
import {Note} from "../../../../../models/note/Note";
import {
    Pitch, PitchType
} from "../../../element-group-setting/pitch-slider/models/types";
import {KeySignature} from "../../../../../models/signature/KeySignature";
import {MutableNote} from "../../../../../models/note/MutableNote";

interface LiveSheetNotesProps {
    currentNotes: Note[];
    keySignature?: KeySignature;
    pitch?: Pitch;
    pitchType?: PitchType;
}

function LiveSheetNotes(props: LiveSheetNotesProps): ReactElement {
    const elementRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!elementRef.current) return;
        elementRef.current.innerHTML = "";
        const renderer = new Renderer(elementRef.current, Renderer.Backends.SVG);
        renderer.resize(400, 325);
        const context: RenderContext = renderer.getContext();
        const stave: Stave = new Stave(10, 40, 400);
        stave.addClef("treble").addTimeSignature("4/4");
        if (props.keySignature) {
            const keySignature: VexKeySignature = props.keySignature.toVexFlowSignature();
            stave.addModifier(keySignature);
        }
        stave.setContext(context).draw();
        // TODO: Create new static method or refactor to pass key signatures.
        let trebleNote: StaveNote;
        let bassNote: StaveNote;
        if (props.keySignature) {
            const notes: MutableNote[] = MutableNote.allToMutableNotes(props.currentNotes);
            [trebleNote, bassNote] = MutableNote.allToTrebleBassChord(notes, props.keySignature);
        } else {
            [trebleNote, bassNote] = Note.allToBaseTrebleNoteChord(props.currentNotes, props.pitchType, props.pitch);
        }
        const voice: Voice = new Voice({
            numBeats: 4,
            beatValue: 4,
        });
        voice.addTickables([trebleNote]);
        new Formatter().joinVoices([voice]).format([voice], 400);
        voice.draw(context, stave);
        const bassStave: Stave = new Stave(10, 120, 400);
        bassStave.addClef("bass").addTimeSignature("4/4");
        if (props.keySignature) {
            const keySignature: VexKeySignature = props.keySignature.toVexFlowSignature();
            bassStave.addModifier(keySignature);
        }
        bassStave.setContext(context).draw();
        const bassVoice: Voice = new Voice({
            numBeats: 4,
            beatValue: 4,
        });
        bassVoice.addTickables([bassNote]);
        new Formatter().joinVoices([bassVoice]).format([bassVoice], 400);
        bassVoice.draw(context, bassStave);
    }, [props]);
    return (
        <div className={"live-sheet-notes"} ref={elementRef} id={"vf-container"}>

        </div>
    );
}

export default LiveSheetNotes;
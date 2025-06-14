import React, {ReactElement, useEffect, useRef} from "react";
import "./LiveSheetNotes.scss";
import Vex, {
    Factory, Formatter, RenderContext,
    Renderer, Stave,
    StaveConnector,
    StaveNote,
    VexFlow, Voice
} from "vexflow";
import {Note} from "../../../../../models/note/Note";

interface LiveSheetNotesProps {
    currentNotes: Note[];
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
        stave.setContext(context).draw();
        const [trebleNote, bassNote]: [StaveNote, StaveNote] = Note.allToBaseTrebleNoteChord(props.currentNotes);
        const voice: Voice = new Voice({
            numBeats: 4,
            beatValue: 4,
        });
        voice.addTickables([trebleNote]);
        new Formatter().joinVoices([voice]).format([voice], 400);
        voice.draw(context, stave);
        const bassStave: Stave = new Stave(10, 120, 400);
        bassStave.addClef("bass").addTimeSignature("4/4");
        bassStave.setContext(context).draw();
        const bassVoice: Voice = new Voice({
            numBeats: 4,
            beatValue: 4,
        });
        bassVoice.addTickables([bassNote]);
        new Formatter().joinVoices([bassVoice]).format([bassVoice], 400);
        bassVoice.draw(context, bassStave);
    }, [props.currentNotes]);
    return (
        <div className={"live-sheet-notes"} ref={elementRef} id={"vf-container"}>

        </div>
    );
}

export default LiveSheetNotes;
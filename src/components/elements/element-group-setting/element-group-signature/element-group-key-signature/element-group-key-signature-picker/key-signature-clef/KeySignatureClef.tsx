import React, {ReactElement, useEffect, useRef} from 'react';
import './KeySignatureClef.scss';
import {
    KeySignature
} from "../../../../../../../models/signature/KeySignature";
import {RenderContext, Renderer, Stave, KeySignature as VexKeySignature} from "vexflow";

interface KeySignatureClefProps {
    keySignature: KeySignature;
}

function KeySignatureClef(props: KeySignatureClefProps): ReactElement {
    function getId(): string {
        return props.keySignature.toString().toLowerCase().replace(" ", "-");
    }
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!elementRef.current) return;
        elementRef.current.innerHTML = "";
        const renderer = new Renderer(elementRef.current, Renderer.Backends.SVG);
        renderer.resize(150, 100);
        const context: RenderContext = renderer.getContext();
        const stave: Stave = new Stave(10, 40, 120, {
            spaceAboveStaffLn: 0,
            spaceBelowStaffLn: 0,
        });
        stave.addClef("treble");
        const keySignature: VexKeySignature = props.keySignature.toVexFlowSignature();
        stave.addModifier(keySignature);
        stave.setContext(context).draw();
        const svg = elementRef.current.querySelector("svg");
        if (!svg) return;
        svg.setAttribute("preserveAspectRatio", "xMinYMin meet");
    }, []);

    return (
        <div className={"key-signature-clef"} ref={elementRef} id={getId()}>

        </div>
    );
}

export default KeySignatureClef;
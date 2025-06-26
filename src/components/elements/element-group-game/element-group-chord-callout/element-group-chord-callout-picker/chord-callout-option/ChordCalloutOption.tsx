import React, {ReactElement, useEffect, useRef} from 'react';
import './ChordCalloutOption.scss';
import {ChordCalloutOptionType} from "./models/ChordCalloutOptionType";
import {Note} from "../../../../../../models/note/Note";
import Piano from "../../../../element-group-piano/piano/Piano";
import Title from "../../../../element-group-native/title/Title";
import {TagType} from "../../../../../../models/html/TagType";
import Subtitle from "../../../../element-group-text/subtitle/Subtitle";
import {Chord} from "../../../../../../models/chord/Chord";
import {
    Formatter,
    RenderContext,
    Renderer,
    Stave,
    StaveNote,
    Voice
} from "vexflow";
import Button from "../../../../element-group-native/button/Button";
import {ElementSize} from "../../../../../../models/ElementSize";

interface ChordCalloutOptionProps {
    optionType: ChordCalloutOptionType;
    onOptionSelected: (optionType: ChordCalloutOptionType) => void;
}

function ChordCalloutOption(props: ChordCalloutOptionProps): ReactElement {
    const [currentNotes, setCurrentNotes] = React.useState<Note[]>([Note.fromMidiNumber(60),
        Note.fromMidiNumber(63),
        Note.fromMidiNumber(67)]);
    const elementRef = useRef<HTMLDivElement>(null);
    function getKeyOptionElement(): ReactElement {
        return (
            <div className={"key-option option-type"}>
                <Piano currentNotes={currentNotes} keyLimits={[currentNotes[0].noteNumber, currentNotes[2].noteNumber]}/>
            </div>
        );
    }

    function getMultiplierTextElement(): ReactElement {
        return (
            <div className={"multiplier-text"}>
                <Title text={props.optionType} tagType={TagType.H3}/>
                <Subtitle text={getMultiplierText(props.optionType)} tagType={TagType.H5}/>
                <hr/>
            </div>
        );
    }

    function getSheetOptionElement(): ReactElement {
        return (
            <div className={"sheet-option option-type"}>
                <div ref={elementRef}>

                </div>
            </div>
        )
    }

    function getNameOptionElement(): ReactElement {
        const chord: Chord = new Chord(currentNotes);
        return (
            <div className={"name-option option-type"}>
                <Title text={chord.fullName} tagType={TagType.H3}/>
            </div>
        );
    }

    useEffect(() => {
        if (!elementRef.current) return;
        elementRef.current.innerHTML = "";
        const renderer = new Renderer(elementRef.current, Renderer.Backends.SVG);
        renderer.resize(300, 100);
        const context: RenderContext = renderer.getContext();
        context.scale(1.025, 1.025);
        const stave: Stave = new Stave(10, 40, 300, {
            spaceAboveStaffLn: 0,
            spaceBelowStaffLn: 0,
        });
        stave.addClef("treble");
        stave.setContext(context).draw();
        const staveNote: StaveNote = Note.allToStaveNoteChord(currentNotes);
        const voice: Voice = new Voice({
            numBeats: 4,
            beatValue: 4,
        });
        voice.addTickables([staveNote]);
        new Formatter().joinVoices([voice]).format([voice], 300);
        voice.draw(context, stave);
        const svg = elementRef.current.querySelector("svg");
        if (!svg) return;
        svg.setAttribute("preserveAspectRatio", "xMinYMin meet");
    }, []);

    function getMultiplierText(optionType: ChordCalloutOptionType): string {
        return "Multiplier: " + ChordCalloutOptionType.getMultiplierByType(optionType) * 100 + "%";
    }

    function getOptionElement(optionType: ChordCalloutOptionType): ReactElement {
        switch (optionType) {
            case ChordCalloutOptionType.KEYS:
                return getKeyOptionElement();
            case ChordCalloutOptionType.SHEET_MUSIC:
                return getSheetOptionElement();
            case ChordCalloutOptionType.NAME:
                return getNameOptionElement();
            default:
                throw new Error(`Unknown option type: ${optionType}`);
        }
    }

    return (
        <div className={"chord-callout-option"} onClick={() => props.onOptionSelected(props.optionType)}>
            {getMultiplierTextElement()}
            {getOptionElement(props.optionType)}
            <Button text={'Select'} elementSize={ElementSize.MEDIUM}/>
        </div>
    );
}

export default ChordCalloutOption;
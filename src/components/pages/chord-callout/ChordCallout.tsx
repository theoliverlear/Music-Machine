import React, {ReactElement} from 'react';
import './ChordCallout.scss';
import {Metronome} from "../../../models/metronome/Metronome";
import NavBar
    from "../../elements/element-group-menu/element-group-nav-bar/nav-bar/NavBar";
import Button from "../../elements/element-group-native/button/Button";
import {ElementSize} from "../../../models/ElementSize";

function ChordCallout(): ReactElement {
    const metronome: Metronome = new Metronome(85, 4, 1);
    return (
        <div className={"chord-callout"}>
            <NavBar/>
            <Button text={"Metronome"} elementSize={ElementSize.MEDIUM} handleClick={metronome.toggle}/>
        </div>
    );
}
export default ChordCallout;
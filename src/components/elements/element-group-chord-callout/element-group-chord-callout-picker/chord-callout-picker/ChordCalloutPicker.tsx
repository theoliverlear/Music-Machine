import React, {ReactElement} from 'react';
import './ChordCalloutPicker.scss';
import ChordCalloutOption from "../chord-callout-option/ChordCalloutOption";
import {
    ChordCalloutOptionType
} from "../chord-callout-option/models/ChordCalloutOptionType";

interface ChordCalloutPickerProps {
    onOptionSelected: (optionType: ChordCalloutOptionType) => void;
}

function ChordCalloutPicker(props: ChordCalloutPickerProps): ReactElement {
    function handleOptionSelected(optionType: ChordCalloutOptionType): void {
        props.onOptionSelected(optionType);
    }

    return (
        <div className={"chord-callout-picker"}>
            <ChordCalloutOption optionType={ChordCalloutOptionType.KEYS} onOptionSelected={handleOptionSelected}/>
            <ChordCalloutOption optionType={ChordCalloutOptionType.SHEET_MUSIC} onOptionSelected={handleOptionSelected}/>
            <ChordCalloutOption optionType={ChordCalloutOptionType.NAME} onOptionSelected={handleOptionSelected}/>
        </div>
    )
}
export default ChordCalloutPicker;
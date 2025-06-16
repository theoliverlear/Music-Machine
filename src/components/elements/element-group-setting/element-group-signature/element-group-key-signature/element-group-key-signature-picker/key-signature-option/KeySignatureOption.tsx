import React, {ReactElement} from 'react';
import './KeySignatureOption.scss';
import {AnalogousKeys} from "../../../../../../../models/signature/types";
import Title from "../../../../../element-group-native/title/Title";
import {TagType} from "../../../../../../../models/html/TagType";
import KeySignatureClef from "../key-signature-clef/KeySignatureClef";

interface KeySignatureOptionProps {
    analogousKeys: AnalogousKeys;
    onClick?: (keySignature: AnalogousKeys) => void;
}

function KeySignatureOption(props: KeySignatureOptionProps): ReactElement {
    function handleClick(): void {
        if (props.onClick) {
            props.onClick(props.analogousKeys);
        }
    }
    return (
        <div className="key-signature-option" onClick={handleClick}>
            <KeySignatureClef keySignature={props.analogousKeys.major} />
            <Title text={props.analogousKeys.major.toString()} tagType={TagType.H5}/>
            <Title text={props.analogousKeys.minor.toString()} tagType={TagType.H6}/>
        </div>
    );
}

export default KeySignatureOption;
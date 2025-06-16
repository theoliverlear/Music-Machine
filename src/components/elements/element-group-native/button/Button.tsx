import React, {ReactElement} from "react";
import './Button.scss';
import {ElementSize} from "../../../../models/ElementSize";
import {TagType} from "../../../../models/html/TagType";
import Title from "../title/Title";

interface ButtonProps {
    text: string;
    elementSize: ElementSize;
    handleClick?: () => void;
}

function Button(props: ButtonProps): ReactElement {
    function getTagType(): TagType {
        switch (props.elementSize) {
            case ElementSize.LARGE:
                return TagType.H3;
            case ElementSize.MEDIUM:
                return TagType.H4;
            case ElementSize.SMALL:
                return TagType.H5;
            default:
                return TagType.H6;
        }
    }
    return (
        <div className={"button"} onClick={props.handleClick}>
            <Title text={props.text} tagType={getTagType()}/>
        </div>
    );
}

export default Button;
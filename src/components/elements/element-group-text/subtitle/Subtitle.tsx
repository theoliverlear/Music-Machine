import React, {ReactElement} from 'react';
import './Subtitle.scss';
import {TagType} from "../../../../models/html/TagType";

interface SubtitleProps {
    text: string;
    tagType: TagType;
    className?: string;
}

function Subtitle(props: SubtitleProps): ReactElement {
    function headingSize(): ReactElement {
        switch (props.tagType) {
            case TagType.H1:
                return <h1>{props.text}</h1>;
            case TagType.H2:
                return <h2>{props.text}</h2>;
            case TagType.H3:
                return <h3>{props.text}</h3>;
            case TagType.H4:
                return <h4>{props.text}</h4>;
            case TagType.H5:
                return <h5>{props.text}</h5>;
            case TagType.H6:
                return <h6>{props.text}</h6>;
            case TagType.P:
                return <p>{props.text}</p>;
            case TagType.SPAN:
                return <span>{props.text}</span>;
            default:
                return <h1>{props.text}</h1>;
        }
    }
    return (
        <div className={`subtitle ${props.className ? props.className : ''}`}>
            {headingSize()}
        </div>
    )
}
export default Subtitle;
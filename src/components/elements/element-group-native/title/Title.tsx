import React, {ReactElement} from 'react';
import './Title.css';
import {TagType} from "../../../../models/html/TagType";

interface TitleProps {
    text: string;
    tagType: TagType;
    onClick?: (text: string) => void;
}

function Title(props: TitleProps): ReactElement {
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
    // Refactor onClick to be more modular. Right now it depends on a "title".
    return (
        <div className="title" onClick={() => props.onClick ? props.onClick(props.text) : null}>
            {headingSize()}
        </div>
    );

}
export default Title;
import React from 'react';
import './Title.css';
function Title(props: {title: string, size: number, onClick?: (title: string) => void}) {
    function headingSize() {
        switch (props.size) {
            case 1:
                return <h1>{props.title}</h1>;
            case 2:
                return <h2>{props.title}</h2>;
            case 3:
                return <h3>{props.title}</h3>;
            case 4:
                return <h4>{props.title}</h4>;
            case 5:
                return <h5>{props.title}</h5>;
            case 6:
                return <h6>{props.title}</h6>;
            default:
                return <h1>{props.title}</h1>;
        }
    }
    // Refactor onClick to be more modular. Right now it depends on a "title".
    return (
        <div className="title-div" onClick={() => props.onClick ? props.onClick(props.title) : null}>
            {headingSize()}
        </div>
    );

}
export default Title;
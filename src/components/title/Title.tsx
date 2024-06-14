import React from 'react';
import './Title.css';
function Title(props: {title: string, size: number}) {
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
    return (
        <div className="title-div">
            {headingSize()}
        </div>
    );

}
export default Title;
import React from 'react';
import Title from "../../title/Title";

function Menu(props: {title: string, listItemsTitles: string[], listItemSize: number}) {
    return (
        <div className="menu-div">
            <Title title={props.title} size={1}/>
            <div className="menu-items-div">
                {props.listItemsTitles.map((title, index) => {
                    return <div key={index} className="menu-item-div">
                        <Title title={title} size={props.listItemSize}/>
                    </div>
                })}
            </div>
        </div>
    );
}
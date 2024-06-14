import React from 'react';
import Title from "../../title/Title";
import MenuItem from "./MenuItem";
import './Menu.css';

function Menu(props: {title: string,
    titleSize: number,
    listItemsTitles: string[],
    listItemSize: number,
    onMenuItemClick?: (title: string) => void}) {
    return (
        <div className="menu-div">
            <Title title={props.title} size={props.titleSize}/>
            <div className="menu-items-div">
                {props.listItemsTitles.map((listItemTitle: string) => <MenuItem title={listItemTitle} titleSize={props.listItemSize} onMenuItemClick={props.onMenuItemClick}/>)}
            </div>
        </div>
    );
}
export default Menu;
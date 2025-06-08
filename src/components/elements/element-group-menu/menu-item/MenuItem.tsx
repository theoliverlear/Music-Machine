import React from 'react';
import Title from "../../element-group-native/title/Title";
import {TagType} from "../../../../models/html/TagType";

interface MenuItemProps {
    text: string;
    tagType: TagType;
    onMenuItemClick?: (title: string) => void;
}

function MenuItem(props: MenuItemProps) {
    return (
        <div className="menu-item-div">
            <Title text={props.text} tagType={props.tagType} onClick={props.onMenuItemClick}/>
        </div>
    );
}
export default MenuItem;
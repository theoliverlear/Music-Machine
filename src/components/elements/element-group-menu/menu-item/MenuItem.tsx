import React from 'react';
import Title from "../../element-group-native/title/Title";

function MenuItem(props: { title: string, titleSize: number, onMenuItemClick?: (title: string) => void }) {
    return (
        <div className="menu-item-div">
            <Title title={props.title} size={props.titleSize} onClick={props.onMenuItemClick} />
        </div>
    );
}
export default MenuItem;
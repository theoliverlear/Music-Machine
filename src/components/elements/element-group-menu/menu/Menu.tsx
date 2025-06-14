import React, {ReactElement} from 'react';
import Title from "../../element-group-native/title/Title";
import MenuItem from "../menu-item/MenuItem";
import './Menu.scss';
import {TagType} from "../../../../models/html/TagType";

interface MenuProps {
    title: string;
    tagType: TagType;
    listItemsTitles: string[];
    listItemTagType: TagType;
    onMenuItemClick?: (title: string) => void;
}

function Menu(props: MenuProps): ReactElement {
    return (
        <div className={"menu"}>
            <Title className="top-menu-title" text={props.title} tagType={props.tagType}/>
            <div className={"menu-items-div"}>
                {props.listItemsTitles.map((listItemTitle: string) => {
                    return <MenuItem text={listItemTitle}
                                     key={listItemTitle}
                                     tagType={props.listItemTagType}
                                     onMenuItemClick={props.onMenuItemClick}/>;
                })}
            </div>
        </div>
    );
}
export default Menu;
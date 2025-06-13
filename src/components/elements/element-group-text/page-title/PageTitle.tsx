import React from 'react';
import {TagType} from "../../../../models/html/TagType";
import Title from "../../element-group-native/title/Title";
import './PageTitle.scss';

interface PageTitleProps {
    text: string;
}

function PageTitle(props: PageTitleProps) {
    return (
        <div className={"page-title"}>
            <Title text={props.text} tagType={TagType.H1}/>
        </div>
    );
}

export default PageTitle;
import React, {ReactElement} from 'react';

import {Link} from "react-router-dom";
import Title from "../../elements/element-group-native/title/Title";
import {TagType} from "../../../models/html/TagType";


function Home(): ReactElement {
    return (
        <div className="home">
            <Title text="Music Machine" tagType={TagType.H1}/>
            <hr/>
            <div className={"menu-item"}>
                <Link to={"/free-play"} className="link-no-style">
                    <Title text="Free Play" tagType={TagType.H3} />
                </Link>
            </div>
            <div className={"menu-item"}>
                <Title text="Learn Songs" tagType={TagType.H3} />
            </div>
            <div className={"menu-item"}>
                <Title text="Music Theory Engine" tagType={TagType.H3} />
            </div>
        </div>
    );
}
export default Home;
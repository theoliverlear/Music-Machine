import React from 'react';

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import FreePlay from "../free-play/FreePlay";
import Title from "../../elements/element-group-native/title/Title";
function Home(props: {className: string}) {
    return (
        <div className="home">
            <Title title="Music Machine" size={1}/>
            <hr />
            <div className={props.className}>
                <Title title="Learn Songs" size={3} />
            </div>
            <div className={props.className}>
                <Title title="Music Theory Engine" size={3} />
            </div>
            <div className={props.className}>
                <Link to={"/free-play"} className="link-no-style">
                    <Title title="Free Play" size={3} />
                </Link>
            </div>
        </div>
    );
}
export default Home;
import React from 'react';
import PageTitle
    from "../../elements/element-group-text/page-title/PageTitle";
import NavBar
    from "../../elements/element-group-menu/element-group-nav-bar/nav-bar/NavBar";
import './TheoryEngine.css';

function TheoryEngine() {
    return (
        <div className={"theory-engine"}>
            <NavBar/>
            <PageTitle text={"Theory Engine"}/>
        </div>
    )
}

export default TheoryEngine;
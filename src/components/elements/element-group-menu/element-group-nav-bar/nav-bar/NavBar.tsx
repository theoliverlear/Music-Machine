import React from 'react';
import './NavBar.scss';
import HomeButton from "../../home-button/HomeButton";

function NavBar() {
    return (
        <div className={"nav-bar"}>
            <nav>
                <HomeButton/>
            </nav>
        </div>
    );
}
export default NavBar;
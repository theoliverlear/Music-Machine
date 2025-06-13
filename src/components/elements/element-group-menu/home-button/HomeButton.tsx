import React from "react";
import Image from "../../element-group-native/image/Image";
import {homeIconImageAsset} from "../../../../assets/imageAssets";
import './HomeButton.scss';
import {Link} from "react-router-dom";

function HomeButton() {
    return (
        <Link to={"/"} className="link-no-style">
            <div className={"home-button"}>
                <Image imageAsset={homeIconImageAsset}/>
            </div>
        </Link>
    )
}
export default HomeButton;
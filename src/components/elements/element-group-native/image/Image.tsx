import React, {ReactElement} from "react";
import './Image.css';
import {ImageAsset} from "../../../../assets/imageAssets";

interface ImageProps {
    imageAsset: ImageAsset;
}

function Image(props: ImageProps): ReactElement {
    return (
        <div className={"image"}>
            <img src={props.imageAsset.src} alt={props.imageAsset.alt}/>
        </div>
    )
}
export default Image;
import React, {useEffect, useState} from 'react';
import {ImageAsset} from "../../../../../assets/imageAssets";
import Image from "../../../element-group-native/image/Image";
import "./BinarySlider.css";

interface BinarySliderProps<Asset> {
    assetLeft: Asset;
    assetRight: Asset;
    onAssetSelected: (asset: Asset) => void;
}

function BinarySlider<Asset>(props: BinarySliderProps<Asset>) {
    const [selectedAsset, setSelectedAsset] = useState<Asset>(props.assetLeft);
    function isImageSlider(): boolean {
        return props.assetLeft as ImageAsset !== undefined;
    }

    function selectAsset(asset: Asset) {
        props.onAssetSelected(asset);
        setSelectedAsset(asset);
    }

    useEffect(() => {
        setSelectedAsset(props.assetLeft);
    }, [props.assetLeft, props.assetRight]);

    function getClasses(side: string): string {
        if (side === "left") {
            let classes: string = "binary-asset-left binary-option";
            if (selectedAsset === props.assetLeft) {
                classes += " slider-selected";
            }
            return classes;
        } else {
            let classes: string = "binary-asset-right binary-option";
            if (selectedAsset === props.assetRight) {
                classes += " slider-selected";
            }
            return classes;
        }
    }



    return (
        <div className={"binary-slider"}>
            <div className={getClasses("left")} onClick={() => selectAsset(props.assetLeft)}>
                {isImageSlider() &&
                <Image imageAsset={props.assetLeft as ImageAsset}/>}
            </div>
            <div className={getClasses("right")} onClick={() => selectAsset(props.assetRight)}>
                {isImageSlider() &&
                <Image imageAsset={props.assetRight as ImageAsset}/>}
            </div>
        </div>
    );
}
export default BinarySlider;
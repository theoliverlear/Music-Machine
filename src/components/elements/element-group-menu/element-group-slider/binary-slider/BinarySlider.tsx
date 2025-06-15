import React, {ReactElement, useEffect, useState} from 'react';
import {ImageAsset} from "../../../../../assets/imageAssets";
import Image from "../../../element-group-native/image/Image";
import "./BinarySlider.scss";

interface BinarySliderProps<Asset> {
    assetLeft: Asset;
    assetRight: Asset;
    onAssetSelected: (asset: Asset) => void;
    selectedAsset?: Asset;
}

function BinarySlider<Asset>(props: BinarySliderProps<Asset>): ReactElement {
    const [selectedAsset, setSelectedAsset] = useState<Asset | undefined>(props.assetLeft);
    function isImageSlider(): boolean {
        return props.assetLeft as ImageAsset !== undefined;
    }

    function selectAsset(asset: Asset) {
        props.onAssetSelected(asset);
        setSelectedAsset(asset);
    }

    useEffect(() => {
        setSelectedAsset(props.selectedAsset ?? undefined);
    }, [props.selectedAsset]);


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
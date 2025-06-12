// A slider that allows the user to adjust whether to use sharps or flats in the pitch notation.

import React from 'react';
import './PitchSlider.css';
import BinarySlider
    from "../../element-group-menu/element-group-slider/binary-slider/BinarySlider";
import {
    flatTheoryImageAsset, ImageAsset,
    sharpTheoryImageAsset
} from "../../../../assets/imageAssets";
import {Pitch} from "./models/types";

interface PitchSliderProps {
    onPitchSelection: (pitch: Pitch) => void;
}

function PitchSlider(props: PitchSliderProps) {

    function handlePitchSelection(imageAsset: ImageAsset) {
        if (imageAsset === sharpTheoryImageAsset){
            props.onPitchSelection("sharp");
        } else if (imageAsset === flatTheoryImageAsset) {
            props.onPitchSelection("flat");
        }
    }
    return (
        <div className={"pitch-slider"}>
            <BinarySlider<ImageAsset>
                assetLeft={sharpTheoryImageAsset}
                assetRight={flatTheoryImageAsset}
                onAssetSelected={handlePitchSelection}
            />
        </div>
    );
}

export default PitchSlider;
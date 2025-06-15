import React, {ReactElement, useEffect, useState} from 'react';
import './PitchSlider.scss';
import BinarySlider
    from "../../element-group-menu/element-group-slider/binary-slider/BinarySlider";
import {
    flatTheoryImageAsset,
    ImageAsset,
    sharpTheoryImageAsset
} from "../../../../assets/imageAssets";
import {Pitch, PitchType} from "./models/types";
import Title from "../../element-group-native/title/Title";
import {TagType} from "../../../../models/html/TagType";

interface PitchSliderProps {
    onPitchSelection: (pitch: Pitch) => void;
    onPitchTypeSelection: (pitchType: PitchType) => void;
}

function PitchSlider(props: PitchSliderProps): ReactElement {
    const [pitchType, setPitchType] = useState<PitchType>("auto");
    const [selectedBinaryAsset, setSelectedBinaryAsset] = useState<ImageAsset | undefined>(undefined);

    function handlePitchTypeSelection(pitchType: PitchType) {
        props.onPitchTypeSelection(pitchType);
    }

    function handlePitchSelection(imageAsset: ImageAsset): void {
        if (imageAsset === sharpTheoryImageAsset){
            props.onPitchSelection("sharp");
        } else if (imageAsset === flatTheoryImageAsset) {
            props.onPitchSelection("flat");
        }
        setSelectedBinaryAsset(imageAsset);
        setPitchType("manual");
        props.onPitchTypeSelection("manual");
    }

    function getPitchTypeClasses(): string {
        let classes: string = "auto-button";
        if (pitchType === "auto") {
            classes += " selected";
        }
        return classes;
    }

    useEffect(() => {
        if (pitchType === "auto") {
            props.onPitchSelection("natural");
        }
    }, [pitchType, props]);

    function selectAutoPitch() {
        props.onPitchSelection("natural");
        setPitchType("auto");
        handlePitchTypeSelection("auto");
        setSelectedBinaryAsset(undefined);
    }

    return (
        <div className={"pitch-slider"}>
            <BinarySlider<ImageAsset>
                assetLeft={sharpTheoryImageAsset}
                assetRight={flatTheoryImageAsset}
                onAssetSelected={handlePitchSelection}
                selectedAsset={selectedBinaryAsset}
            />
            <div className={getPitchTypeClasses()} onClick={selectAutoPitch}>
                <Title text={"Auto"} tagType={TagType.H4}/>
            </div>
        </div>
    );
}

export default PitchSlider;
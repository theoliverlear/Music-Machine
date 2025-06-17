import {KeySignature} from "./KeySignature";
import {
    Pitch
} from "../../components/elements/element-group-setting/pitch-slider/models/types";

export type PitchAccidental = "none" | Pitch;

export type AnalogousKeys = {
    major: KeySignature,
    minor: KeySignature
};
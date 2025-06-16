import {KeySignature} from "./KeySignature";

export type PitchAccidental = "none" | "sharp" | "flat" | "natural";

export type AnalogousKeys = {
    major: KeySignature,
    minor: KeySignature
};
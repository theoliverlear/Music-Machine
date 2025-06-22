import {Mutable} from "../behavior/Mutable";
import {
    Pitch
} from "../../components/elements/element-group-setting/pitch-slider/models/types";
import {Chord} from "./Chord";

export class MutableChord implements Mutable<Pitch> {
    private _baseChord: Chord;
    private _mutatedFullName: string;

    constructor(baseChord: Chord = new Chord(),
                pitch: Pitch = "natural") {
        this._baseChord = baseChord;
        this._mutatedFullName = baseChord.fullName;
    }

    mutate(mutator: Pitch): void {

    }
}
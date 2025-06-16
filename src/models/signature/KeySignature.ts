import {
    Pitch
} from "../../components/elements/element-group-setting/pitch-slider/models/types";
import { Note } from "../note/Note";
import {PitchAccidental} from "./types";
import {MutableNote} from "../note/MutableNote";

export class KeySignature {
    private _name: string;
    private _pitchC: Pitch;
    private _pitchD: Pitch;
    private _pitchE: Pitch;
    private _pitchF: Pitch;
    private _pitchG: Pitch;
    private _pitchA: Pitch;
    private _pitchB: Pitch;
    private _pitches: Pitch[];
    constructor(name: string = "C Major",
                pitchC: Pitch = "natural",
                pitchD: Pitch = "natural",
                pitchE: Pitch = "natural",
                pitchF: Pitch = "natural",
                pitchG: Pitch = "natural",
                pitchA: Pitch = "natural",
                pitchB: Pitch = "natural") {
        this._pitchC = pitchC;
        this._pitchD = pitchD;
        this._pitchE = pitchE;
        this._pitchF = pitchF;
        this._pitchG = pitchG;
        this._pitchA = pitchA;
        this._pitchB = pitchB;
        this._name = name;
        this._pitches = [this._pitchC,
                         this._pitchD,
                         this._pitchE,
                         this._pitchF,
                         this._pitchG,
                         this._pitchA,
                         this._pitchB];
    }

    getAccidentals(notes: MutableNote[]): PitchAccidental[] {
        return notes.map((note: MutableNote): PitchAccidental => this.getAccidental(note));
    }

    getAccidental(note: MutableNote): PitchAccidental {
        let noteNumber: number;
        const baseNoteName: string = note.baseNote.noteData.noteName;
        const notes: string[] = ["C", "D", "E", "F", "G", "A", "B"];
        noteNumber = notes.indexOf(baseNoteName.charAt(0).toUpperCase());
        if (KeySignature.flatKeys.includes(this)) {
            if (note.isSharp()) {
                note.mutate("flat");
                noteNumber = notes.indexOf(note.mutatedName.charAt(0).toUpperCase());
                note.mutate("sharp");
            }
        }
        if (noteNumber === -1) {
            throw new Error(`Unknown note name: ${baseNoteName}`);
        }
        const comparedPitch: Pitch = this._pitches[noteNumber];
        switch (comparedPitch) {
            case "natural":
                if (note.isNatural()) {
                    return "none";
                } else if (note.isSharp()) {
                    return "sharp";
                } else if (note.isFlat()) {
                    return "flat";
                } else {
                    throw new Error(`Unknown pitch: ${comparedPitch}`);
                }
            case "sharp":
                if (note.isSharp()) {
                    return "none";
                } else if (note.isFlat()) {
                    return "sharp";
                } else if (note.isNatural()) {
                    return "natural";
                } else {
                    throw new Error(`Unknown pitch: ${comparedPitch}`);
                }
            case "flat":
                if (note.isFlat()) {
                    return "none";
                } else if (note.isSharp()) {
                    return "flat";
                } else if (note.isNatural()) {
                    return "natural";
                } else {
                    throw new Error(`Unknown pitch: ${comparedPitch}`);
                }
            default:
                throw new Error(`Unknown pitch: ${comparedPitch}`);
        }
    }
    //-----------------------------------------C           D          E          F          G          A          B
    static readonly C_MAJOR_PITCHES: Pitch[] = ["natural", "natural", "natural", "natural", "natural", "natural", "natural"];
    static readonly G_MAJOR_PITCHES: Pitch[] = ["natural", "natural", "natural", "sharp", "natural", "natural", "natural"];
    static readonly D_MAJOR_PITCHES: Pitch[] = ["sharp", "natural", "natural", "sharp", "natural", "natural", "natural"];
    static readonly A_MAJOR_PITCHES: Pitch[] = ["sharp", "natural", "natural", "sharp", "sharp", "natural", "natural"];
    static readonly E_MAJOR_PITCHES: Pitch[] = ["sharp", "sharp", "natural", "sharp", "sharp", "natural", "natural"];
    static readonly B_MAJOR_PITCHES: Pitch[] = ["sharp", "sharp", "natural", "sharp", "sharp", "sharp", "natural"];
    static readonly F_SHARP_MAJOR_PITCHES: Pitch[] = ["sharp", "sharp", "sharp", "sharp", "sharp", "sharp", "natural"];
    static readonly C_SHARP_MAJOR_PITCHES: Pitch[] = ["sharp", "sharp", "sharp", "sharp", "sharp", "sharp", "sharp"];

    static readonly F_MAJOR_PITCHES: Pitch[] = ["natural", "natural", "natural", "natural", "natural", "natural", "flat"];
    static readonly B_FLAT_MAJOR_PITCHES: Pitch[] = ["natural", "natural", "flat", "natural", "natural", "natural", "flat"];
    static readonly E_FLAT_MAJOR_PITCHES: Pitch[] = ["natural", "natural", "flat", "natural", "natural", "flat", "flat"];
    static readonly A_FLAT_MAJOR_PITCHES: Pitch[] = ["natural", "flat", "flat", "natural", "natural", "flat", "flat"];
    static readonly D_FLAT_MAJOR_PITCHES: Pitch[] = ["natural", "flat", "flat", "natural", "flat", "flat", "flat"];
    static readonly G_FLAT_MAJOR_PITCHES: Pitch[] = ["flat", "flat", "flat", "natural", "flat", "flat", "flat"];
    static readonly C_FLAT_MAJOR_PITCHES: Pitch[] = ["flat", "flat", "flat", "flat", "flat", "flat", "flat"];

    static readonly A_MINOR_PITCHES: Pitch[] = KeySignature.C_MAJOR_PITCHES;
    static readonly E_MINOR_PITCHES: Pitch[] = KeySignature.G_MAJOR_PITCHES;
    static readonly B_MINOR_PITCHES: Pitch[] = KeySignature.D_MAJOR_PITCHES;
    static readonly F_SHARP_MINOR_PITCHES: Pitch[] = KeySignature.A_MAJOR_PITCHES;
    static readonly C_SHARP_MINOR_PITCHES: Pitch[] = KeySignature.E_MAJOR_PITCHES;
    static readonly G_SHARP_MINOR_PITCHES: Pitch[] = KeySignature.B_MAJOR_PITCHES;
    static readonly D_SHARP_MINOR_PITCHES: Pitch[] = KeySignature.F_SHARP_MAJOR_PITCHES;
    static readonly A_SHARP_MINOR_PITCHES: Pitch[] = KeySignature.C_SHARP_MAJOR_PITCHES;

    static readonly D_MINOR_PITCHES: Pitch[] = KeySignature.F_MAJOR_PITCHES;
    static readonly G_MINOR_PITCHES: Pitch[] = KeySignature.B_FLAT_MAJOR_PITCHES;
    static readonly C_MINOR_PITCHES: Pitch[] = KeySignature.E_FLAT_MAJOR_PITCHES;
    static readonly F_MINOR_PITCHES: Pitch[] = KeySignature.A_FLAT_MAJOR_PITCHES;
    static readonly B_FLAT_MINOR_PITCHES: Pitch[] = KeySignature.D_FLAT_MAJOR_PITCHES;
    static readonly E_FLAT_MINOR_PITCHES: Pitch[] = KeySignature.G_FLAT_MAJOR_PITCHES;
    static readonly A_FLAT_MINOR_PITCHES: Pitch[] = KeySignature.C_FLAT_MAJOR_PITCHES;

    static readonly cMajor: KeySignature = new KeySignature('C Major', ...KeySignature.C_MAJOR_PITCHES);
    static readonly gMajor: KeySignature = new KeySignature('G Major', ...KeySignature.G_MAJOR_PITCHES);
    static readonly dMajor: KeySignature = new KeySignature('D Major', ...KeySignature.D_MAJOR_PITCHES);
    static readonly aMajor: KeySignature = new KeySignature('A Major', ...KeySignature.A_MAJOR_PITCHES);
    static readonly eMajor: KeySignature = new KeySignature('E Major', ...KeySignature.E_MAJOR_PITCHES);
    static readonly bMajor: KeySignature = new KeySignature('B Major', ...KeySignature.B_MAJOR_PITCHES);
    static readonly fSharpMajor: KeySignature = new KeySignature('F# Major', ...KeySignature.F_SHARP_MAJOR_PITCHES,);
    static readonly cSharpMajor: KeySignature = new KeySignature('C# Major', ...KeySignature.C_SHARP_MAJOR_PITCHES,);

    static readonly fMajor: KeySignature = new KeySignature('F Major', ...KeySignature.F_MAJOR_PITCHES);
    static readonly bFlatMajor: KeySignature = new KeySignature('Bb Major', ...KeySignature.B_FLAT_MAJOR_PITCHES);
    static readonly eFlatMajor: KeySignature = new KeySignature('Eb Major', ...KeySignature.E_FLAT_MAJOR_PITCHES);
    static readonly aFlatMajor: KeySignature = new KeySignature('Ab Major', ...KeySignature.A_FLAT_MAJOR_PITCHES);
    static readonly dFlatMajor: KeySignature = new KeySignature('Db Major', ...KeySignature.D_FLAT_MAJOR_PITCHES);
    static readonly gFlatMajor: KeySignature = new KeySignature('Gb Major', ...KeySignature.G_FLAT_MAJOR_PITCHES);
    static readonly cFlatMajor: KeySignature = new KeySignature('Cb Major', ...KeySignature.C_FLAT_MAJOR_PITCHES);

    static readonly aMinor: KeySignature = new KeySignature('A Minor', ...KeySignature.A_MINOR_PITCHES);
    static readonly eMinor: KeySignature = new KeySignature('E Minor', ...KeySignature.E_MINOR_PITCHES);
    static readonly bMinor: KeySignature = new KeySignature('B Minor', ...KeySignature.B_MINOR_PITCHES);
    static readonly fSharpMinor: KeySignature = new KeySignature('F# Minor', ...KeySignature.F_SHARP_MINOR_PITCHES);
    static readonly cSharpMinor: KeySignature = new KeySignature('C# Minor', ...KeySignature.C_SHARP_MINOR_PITCHES);
    static readonly gSharpMinor: KeySignature = new KeySignature('G# Minor', ...KeySignature.G_SHARP_MINOR_PITCHES);
    static readonly dSharpMinor: KeySignature = new KeySignature('D# Minor', ...KeySignature.D_SHARP_MINOR_PITCHES);
    static readonly aSharpMinor: KeySignature = new KeySignature('A# Minor', ...KeySignature.A_SHARP_MINOR_PITCHES);

    static readonly dMinor: KeySignature = new KeySignature('D Minor', ...KeySignature.D_MINOR_PITCHES);
    static readonly gMinor: KeySignature = new KeySignature('G Minor', ...KeySignature.G_MINOR_PITCHES);
    static readonly cMinor: KeySignature = new KeySignature('C Minor', ...KeySignature.C_MINOR_PITCHES);
    static readonly fMinor: KeySignature = new KeySignature('F Minor', ...KeySignature.F_MINOR_PITCHES);
    static readonly bFlatMinor: KeySignature = new KeySignature('Bb Minor', ...KeySignature.B_FLAT_MINOR_PITCHES);
    static readonly eFlatMinor: KeySignature = new KeySignature('Eb Minor', ...KeySignature.E_FLAT_MINOR_PITCHES);
    static readonly aFlatMinor: KeySignature = new KeySignature('Ab Minor', ...KeySignature.A_FLAT_MINOR_PITCHES);

    static readonly flatKeys: KeySignature[] = [
        KeySignature.fMajor,
        KeySignature.bFlatMajor,
        KeySignature.eFlatMajor,
        KeySignature.aFlatMajor,
        KeySignature.dFlatMajor,
        KeySignature.gFlatMajor,
        KeySignature.cFlatMajor,
        KeySignature.fMinor,
        KeySignature.bFlatMinor,
        KeySignature.eFlatMinor,
        KeySignature.aFlatMinor,
        KeySignature.gMinor,
        KeySignature.dMinor,
        KeySignature.cMinor,
    ];
}
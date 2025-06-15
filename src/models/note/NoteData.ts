export class NoteData {
    private _noteNumber: number;
    private _noteName: string;
    private _octave: number;
    private _fullNoteName: string;
    private _altFlatName: string;
    private _altFullFlatName: string;
    private _altSharpName: string;
    private _altFullSharpName: string;
    private _frequency: number;
    static notes: NoteData[] = [
        new NoteData(0, 'A', 0, 'A0', 'Bbb', 'Bbb0', 'G##', 'G##0', 27.5000),
        new NoteData(1, 'A#', 0, 'A#0', 'Bb', 'Bb0', 'A#', 'A#0', 29.1352),
        new NoteData(2, 'B', 0, 'B0', 'Cb', 'Cb0', 'A##', 'A##0', 30.8677),
        new NoteData(3, 'C', 1, 'C1', 'Dbb', 'Dbb1', 'B#', 'B#1', 32.7032),
        new NoteData(4, 'C#', 1, 'C#1', 'Db', 'Db1', 'C#', 'C#1', 34.6478),
        new NoteData(5, 'D', 1, 'D1', 'Ebb', 'Ebb1', 'C##', 'C##1', 36.7081),
        new NoteData(6, 'D#', 1, 'D#1', 'Eb', 'Eb1', 'D#', 'D#1', 38.8909),
        new NoteData(7, 'E', 1, 'E1', 'Fb', 'Fb1', 'D##', 'D##1', 41.2034),
        new NoteData(8, 'F', 1, 'F1', 'Gbb', 'Gbb1', 'E#', 'E#1', 43.6535),
        new NoteData(9, 'F#', 1, 'F#1', 'Gb', 'Gb1', 'F#', 'F#1', 46.2493),
        new NoteData(10, 'G', 1, 'G1', 'Abb', 'Abb1', 'F##', 'F##1', 48.9994),
        new NoteData(11, 'G#', 1, 'G#1', 'Ab', 'Ab1', 'G#', 'G#1', 51.9131),
        new NoteData(12, 'A', 1, 'A1', 'Bbb', 'Bbb1', 'G##', 'G##1', 55.0000),
        new NoteData(13, 'A#', 1, 'A#1', 'Bb', 'Bb1', 'A#', 'A#1', 58.2705),
        new NoteData(14, 'B', 1, 'B1', 'Cb', 'Cb1', 'A##', 'A##1', 61.7354),
        new NoteData(15, 'C', 2, 'C2', 'Dbb', 'Dbb2', 'B#', 'B#2', 65.4064),
        new NoteData(16, 'C#', 2, 'C#2', 'Db', 'Db2', 'C#', 'C#2', 69.2957),
        new NoteData(17, 'D', 2, 'D2', 'Ebb', 'Ebb2', 'C##', 'C##2', 73.4162),
        new NoteData(18, 'D#', 2, 'D#2', 'Eb', 'Eb2', 'D#', 'D#2', 77.7817),
        new NoteData(19, 'E', 2, 'E2', 'Fb', 'Fb2', 'D##', 'D##2', 82.4069),
        new NoteData(20, 'F', 2, 'F2', 'Gbb', 'Gbb2', 'E#', 'E#2', 87.3071),
        new NoteData(21, 'F#', 2, 'F#2', 'Gb', 'Gb2', 'F#', 'F#2', 92.4986),
        new NoteData(22, 'G', 2, 'G2', 'Abb', 'Abb2', 'F##', 'F##2', 97.9989),
        new NoteData(23, 'G#', 2, 'G#2', 'Ab', 'Ab2', 'G#', 'G#2', 103.826),
        new NoteData(24, 'A', 2, 'A2', 'Bbb', 'Bbb2', 'G##', 'G##2', 110.000),
        new NoteData(25, 'A#', 2, 'A#2', 'Bb', 'Bb2', 'A#', 'A#2', 116.541),
        new NoteData(26, 'B', 2, 'B2', 'Cb', 'Cb2', 'A##', 'A##2', 123.471),
        new NoteData(27, 'C', 3, 'C3', 'Dbb', 'Dbb3', 'B#', 'B#3', 130.813),
        new NoteData(28, 'C#', 3, 'C#3', 'Db', 'Db3', 'C#', 'C#3', 138.591),
        new NoteData(29, 'D', 3, 'D3', 'Ebb', 'Ebb3', 'C##', 'C##3', 146.832),
        new NoteData(30, 'D#', 3, 'D#3', 'Eb', 'Eb3', 'D#', 'D#3', 155.563),
        new NoteData(31, 'E', 3, 'E3', 'Fb', 'Fb3', 'D##', 'D##3', 164.814),
        new NoteData(32, 'F', 3, 'F3', 'Gbb', 'Gbb3', 'E#', 'E#3', 174.614),
        new NoteData(33, 'F#', 3, 'F#3', 'Gb', 'Gb3', 'F#', 'F#3', 184.997),
        new NoteData(34, 'G', 3, 'G3', 'Abb', 'Abb3', 'F##', 'F##3', 195.998),
        new NoteData(35, 'G#', 3, 'G#3', 'Ab', 'Ab3', 'G#', 'G#3', 207.652),
        new NoteData(36, 'A', 3, 'A3', 'Bbb', 'Bbb3', 'G##', 'G##3', 220.000),
        new NoteData(37, 'A#', 3, 'A#3', 'Bb', 'Bb3', 'A#', 'A#3', 233.082),
        new NoteData(38, 'B', 3, 'B3', 'Cb', 'Cb3', 'A##', 'A##3', 246.942),
        new NoteData(39, 'C', 4, 'C4', 'Dbb', 'Dbb4', 'B#', 'B#4', 261.626),
        new NoteData(40, 'C#', 4, 'C#4', 'Db', 'Db4', 'C#', 'C#4', 277.183),
        new NoteData(41, 'D', 4, 'D4', 'Ebb', 'Ebb4', 'C##', 'C##4', 293.665),
        new NoteData(42, 'D#', 4, 'D#4', 'Eb', 'Eb4', 'D#', 'D#4', 311.127),
        new NoteData(43, 'E', 4, 'E4', 'Fb', 'Fb4', 'D##', 'D##4', 329.628),
        new NoteData(44, 'F', 4, 'F4', 'Gbb', 'Gbb4', 'E#', 'E#4', 349.228),
        new NoteData(45, 'F#', 4, 'F#4', 'Gb', 'Gb4', 'F#', 'F#4', 369.994),
        new NoteData(46, 'G', 4, 'G4', 'Abb', 'Abb4', 'F##', 'F##4', 391.995),
        new NoteData(47, 'G#', 4, 'G#4', 'Ab', 'Ab4', 'G#', 'G#4', 415.305),
        new NoteData(48, 'A', 4, 'A4', 'Bbb', 'Bbb4', 'G##', 'G##4', 440.000),
        new NoteData(49, 'A#', 4, 'A#4', 'Bb', 'Bb4', 'A#', 'A#4', 466.164),
        new NoteData(50, 'B', 4, 'B4', 'Cb', 'Cb4', 'A##', 'A##4', 493.883),
        new NoteData(51, 'C', 5, 'C5', 'Dbb', 'Dbb5', 'B#', 'B#5', 523.251),
        new NoteData(52, 'C#', 5, 'C#5', 'Db', 'Db5', 'C#', 'C#5', 554.365),
        new NoteData(53, 'D', 5, 'D5', 'Ebb', 'Ebb5', 'C##', 'C##5', 587.330),
        new NoteData(54, 'D#', 5, 'D#5', 'Eb', 'Eb5', 'D#', 'D#5', 622.254),
        new NoteData(55, 'E', 5, 'E5', 'Fb', 'Fb5', 'D##', 'D##5', 659.255),
        new NoteData(56, 'F', 5, 'F5', 'Gbb', 'Gbb5', 'E#', 'E#5', 698.456),
        new NoteData(57, 'F#', 5, 'F#5', 'Gb', 'Gb5', 'F#', 'F#5', 739.989),
        new NoteData(58, 'G', 5, 'G5', 'Abb', 'Abb5', 'F##', 'F##5', 783.991),
        new NoteData(59, 'G#', 5, 'G#5', 'Ab', 'Ab5', 'G#', 'G#5', 830.609),
        new NoteData(60, 'A', 5, 'A5', 'Bbb', 'Bbb5', 'G##', 'G##5', 880.000),
        new NoteData(61, 'A#', 5, 'A#5', 'Bb', 'Bb5', 'A#', 'A#5', 932.328),
        new NoteData(62, 'B', 5, 'B5', 'Cb', 'Cb5', 'A##', 'A##5', 987.767),
        new NoteData(63, 'C', 6, 'C6', 'Dbb', 'Dbb6', 'B#', 'B#6', 1046.50),
        new NoteData(64, 'C#', 6, 'C#6', 'Db', 'Db6', 'C#', 'C#6', 1108.73),
        new NoteData(65, 'D', 6, 'D6', 'Ebb', 'Ebb6', 'C##', 'C##6', 1174.66),
        new NoteData(66, 'D#', 6, 'D#6', 'Eb', 'Eb6', 'D#', 'D#6', 1244.51),
        new NoteData(67, 'E', 6, 'E6', 'Fb', 'Fb6', 'D##', 'D##6', 1318.51),
        new NoteData(68, 'F', 6, 'F6', 'Gbb', 'Gbb6', 'E#', 'E#6', 1396.91),
        new NoteData(69, 'F#', 6, 'F#6', 'Gb', 'Gb6', 'F#', 'F#6', 1479.98),
        new NoteData(70, 'G', 6, 'G6', 'Abb', 'Abb6', 'F##', 'F##6', 1567.98),
        new NoteData(71, 'G#', 6, 'G#6', 'Ab', 'Ab6', 'G#', 'G#6', 1661.22),
        new NoteData(72, 'A', 6, 'A6', 'Bbb', 'Bbb6', 'G##', 'G##6', 1760.00),
        new NoteData(73, 'A#', 6, 'A#6', 'Bb', 'Bb6', 'A#', 'A#6', 1864.66),
        new NoteData(74, 'B', 6, 'B6', 'Cb', 'Cb6', 'A##', 'A##6', 1975.53),
        new NoteData(75, 'C', 7, 'C7', 'Dbb', 'Dbb7', 'B#', 'B#7', 2093.00),
        new NoteData(76, 'C#', 7, 'C#7', 'Db', 'Db7', 'C#', 'C#7', 2217.46),
        new NoteData(77, 'D', 7, 'D7', 'Ebb', 'Ebb7', 'C##', 'C##7', 2349.32),
        new NoteData(78, 'D#', 7, 'D#7', 'Eb', 'Eb7', 'D#', 'D#7', 2489.02),
        new NoteData(79, 'E', 7, 'E7', 'Fb', 'Fb7', 'D##', 'D##7', 2637.02),
        new NoteData(80, 'F', 7, 'F7', 'Gbb', 'Gbb7', 'E#', 'E#7', 2793.83),
        new NoteData(81, 'F#', 7, 'F#7', 'Gb', 'Gb7', 'F#', 'F#7', 2959.96),
        new NoteData(82, 'G', 7, 'G7', 'Abb', 'Abb7', 'F##', 'F##7', 3135.96),
        new NoteData(83, 'G#', 7, 'G#7', 'Ab', 'Ab7', 'G#', 'G#7', 3322.44),
        new NoteData(84, 'A', 7, 'A7', 'Bbb', 'Bbb7', 'G##', 'G##7', 3520.00),
        new NoteData(85, 'A#', 7, 'A#7', 'Bb', 'Bb7', 'A#', 'A#7', 3729.31),
        new NoteData(86, 'B', 7, 'B7', 'Cb', 'Cb7', 'A##', 'A##7', 3951.07),
        new NoteData(87, 'C', 8, 'C8', 'Dbb', 'Dbb8', 'B#', 'B#8', 4186.01)
    ];
    constructor(noteNumber: number,
                noteName: string,
                octave: number,
                fullNoteName: string,
                altFlatName: string,
                altFullFlatName: string,
                altSharpName: string,
                altFullSharpName: string,
                frequency: number) {
        this._noteNumber = noteNumber;
        this._noteName = noteName;
        this._octave = octave;
        this._fullNoteName = fullNoteName;
        this._altFlatName = altFlatName;
        this._altFullFlatName = altFullFlatName;
        this._altSharpName = altSharpName;
        this._altFullSharpName = altFullSharpName;
        this._frequency = frequency;
    }
    static getByNoteNumber(noteNumber: number): NoteData {
        return this.notes[noteNumber];
    }
    get noteNumber(): number {
        return this._noteNumber;
    }
    get noteName(): string {
        return this._noteName;
    }
    get octave(): number {
        return this._octave;
    }

    get asFlat(): string {
        if (this.altFlatName.includes("bb")) {
            return this.noteName;
        } else {
            if (this.altFlatName.includes("Cb")) {
                // return "B";
            }
            return this.altFlatName;
        }
    }

    get asSharp(): string {
        // if (this.altSharpName.includes("##")) {
        //     return this.noteName;
        // } else {
        //     if (this.altSharpName.includes("B#")) {
        //         // return "C";
        //     }
        //     return this.altSharpName;
        // }
        return this.altSharpName;
    }

    get fullNoteName(): string {
        return this._fullNoteName;
    }
    get altFlatName(): string {
        return this._altFlatName;
    }
    get altFullFlatName(): string {
        return this._altFullFlatName;
    }
    get altSharpName(): string {
        return this._altSharpName;
    }
    get altFullSharpName(): string {
        return this._altFullSharpName;
    }
    get frequency(): number {
        return this._frequency;
    }
    setNoteNumber(noteNumber: number): void {
        this._noteNumber = noteNumber;
    }
    setNoteName(noteName: string): void {
        this._noteName = noteName;
    }
    setOctave(octave: number): void {
        this._octave = octave;
    }
    setFullNoteName(fullNoteName: string): void {
        this._fullNoteName = fullNoteName;
    }
    setAltFlatName(altFlatName: string): void {
        this._altFlatName = altFlatName;
    }
    setAltFullFlatName(altFullFlatName: string): void {
        this._altFullFlatName = altFullFlatName;
    }
    setAltSharpName(altSharpName: string): void {
        this._altSharpName = altSharpName;
    }
    setAltFullSharpName(altFullSharpName: string): void {
        this._altFullSharpName = altFullSharpName;
    }
    setFrequency(frequency: number): void {
        this._frequency = frequency;
    }
    toString(): string {
        return `NoteData{noteNumber: ${this._noteNumber}, noteName: ${this._noteName}, octave: ${this._octave}, fullNoteName: ${this._fullNoteName}, altFlatName: ${this._altFlatName}, altFullFlatName: ${this._altFullFlatName}, altSharpName: ${this._altSharpName}, altFullSharpName: ${this._altFullSharpName}, frequency: ${this._frequency}}\n`;
    }
    simpleToString(): string {
        return `${this._fullNoteName}\n`;
    }
}
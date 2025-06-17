import {KeySignature} from "../../../models/signature/KeySignature";
import {Note} from "../../../models/note/Note";
import {MidiNote} from "../../../models/midi/MidiNote";
import {MutableNote} from "../../../models/note/MutableNote";
import {PitchAccidental} from "../../../models/signature/types";

describe('KeySignature', (): void => {
    describe('getVexFlowKeyString', (): void => {
        it('can detect natural key signature', (): void => {
            const keySignature: KeySignature = KeySignature.cMajor;
            const vexFlowKeyString: string = keySignature.getVexFlowString();
            expect(vexFlowKeyString).toBe("C");
        });
        it('can detect a key signature with sharps', (): void => {
            const keySignature: KeySignature = KeySignature.fSharpMajor;
            const vexFlowKeyString: string = keySignature.getVexFlowString();
            expect(vexFlowKeyString).toBe("F#");
        });
        it('can detect a key signature with flats', (): void => {
            const keySignature: KeySignature = KeySignature.gFlatMajor;
            const vexFlowKeyString: string = keySignature.getVexFlowString();
            expect(vexFlowKeyString).toBe("Gb");
        });
    });
    describe('getAccidental', (): void => {
        it('can find no change accidentals', (): void => {
            const keySignature: KeySignature = KeySignature.cMajor;
            const cNote: Note = new Note(new MidiNote(60));
            const mutableNoteC: MutableNote = cNote.toMutableNote();
            const pitchAdjustment: PitchAccidental = keySignature.getAccidental(mutableNoteC);
            expect(pitchAdjustment).toBe("none");

            const fKeySignature: KeySignature = KeySignature.fMajor;
            const noteF: Note = new Note(new MidiNote(65)); // F
            const mutableNoteF: MutableNote = noteF.toMutableNote();
            const pitchAdjustmentF: PitchAccidental = fKeySignature.getAccidental(mutableNoteF);
            expect(pitchAdjustmentF).toBe("none");

            const bFlatNote: MutableNote = MutableNote.fromMidiNumber(70);
            bFlatNote.mutateToKeySignature(fKeySignature);
            const bFlatAccidental: PitchAccidental = fKeySignature.getAccidental(bFlatNote);
            expect(bFlatAccidental).toBe("none");
        });
        it('can find sharp accidentals', (): void => {
            const keySignature: KeySignature = KeySignature.gMajor;
            const noteFSharp: Note = new Note(new MidiNote(66)); // F#
            const mutableNoteFSharp: MutableNote = noteFSharp.toMutableNote();
            mutableNoteFSharp.mutate("flat");
            const pitchAdjustment: PitchAccidental = keySignature.getAccidental(mutableNoteFSharp);
            expect(pitchAdjustment).toBe("sharp");
        });
        it('can find flat accidentals', (): void => {
            const keySignature: KeySignature = KeySignature.fMajor;
            const aSharpNote: Note = new Note(new MidiNote(70)); // A#
            const mutableNoteBFlat: MutableNote = aSharpNote.toMutableNote();
            const pitchAdjustment: PitchAccidental = keySignature.getAccidental(mutableNoteBFlat);
            expect(pitchAdjustment).toBe("flat");

            const keySignatureMinorD: KeySignature = KeySignature.dMinor;
            const dMinorAdjustment: PitchAccidental = keySignatureMinorD.getAccidental(mutableNoteBFlat);
            expect(dMinorAdjustment).toBe("flat");
        });
    });
    describe('getAccidentals', (): void => {
        it('can validate a natural major key signature', (): void => {
            const notes: MutableNote[] = [
                new Note(new MidiNote(60)).toMutableNote(), // C
                new Note(new MidiNote(62)).toMutableNote(), // D
                new Note(new MidiNote(64)).toMutableNote(), // E
                new Note(new MidiNote(65)).toMutableNote(), // F
                new Note(new MidiNote(67)).toMutableNote(), // G
                new Note(new MidiNote(69)).toMutableNote(), // A
                new Note(new MidiNote(71)).toMutableNote()  // B
            ];
            const keySignature: KeySignature = KeySignature.cMajor;
            const expectedAccidentals: PitchAccidental[] =
                ["none", "none", "none", "none", "none", "none", "none"];
            const accidentals: PitchAccidental[] = keySignature.getAccidentals(notes);
            expect(accidentals).toEqual(expectedAccidentals);
        });
        it('can validate a major key signature with sharps', (): void => {
            const notes: MutableNote[] = [
                new Note(new MidiNote(67)).toMutableNote(), // G
                new Note(new MidiNote(69)).toMutableNote(), // A
                new Note(new MidiNote(71)).toMutableNote(), // B
                new Note(new MidiNote(72)).toMutableNote(), // C
                new Note(new MidiNote(74)).toMutableNote(), // D
                new Note(new MidiNote(76)).toMutableNote(), // E
                new Note(new MidiNote(78)).toMutableNote()  // F# || Gb
            ];
            const keySignature: KeySignature = KeySignature.gMajor;
            const expectedAccidentals: PitchAccidental[] =
                ["none", "none", "none", "none", "none", "none", "none"];
            const accidentals: PitchAccidental[] = keySignature.getAccidentals(notes);
            expect(accidentals).toEqual(expectedAccidentals);
        });
        it('can validate a major key signature with flats', (): void => {
            const notes: MutableNote[] = [
                new Note(new MidiNote(65)).toMutableNote(), // F
                new Note(new MidiNote(67)).toMutableNote(), // G
                new Note(new MidiNote(69)).toMutableNote(), // A
                new Note(new MidiNote(70)).toMutableNote(), // Bb || A#
                new Note(new MidiNote(72)).toMutableNote(), // C
                new Note(new MidiNote(74)).toMutableNote(), // D
                new Note(new MidiNote(76)).toMutableNote()  // E
            ];
            const keySignature: KeySignature = KeySignature.fMajor;
            const expectedAccidentals: PitchAccidental[] =
                ["none", "none", "none", "flat", "none", "none", "none"];
            const accidentals: PitchAccidental[] = keySignature.getAccidentals(notes);
            expect(accidentals).toEqual(expectedAccidentals);
        });
        it('can validate a natural minor key signature', (): void => {
            const notes: MutableNote[] = [
                new Note(new MidiNote(60)).toMutableNote(), // C
                new Note(new MidiNote(62)).toMutableNote(), // D
                new Note(new MidiNote(63)).toMutableNote(), // Eb || D#
                new Note(new MidiNote(65)).toMutableNote(), // F
                new Note(new MidiNote(67)).toMutableNote(), // G
                new Note(new MidiNote(68)).toMutableNote(), // Ab || G#
                new Note(new MidiNote(70)).toMutableNote()  // Bb || A#
            ];
            const keySignature: KeySignature = KeySignature.aMinor;
            const expectedAccidentals: PitchAccidental[] =
                ["none", "none", "sharp", "none", "none", "sharp", "sharp"];
            const accidentals: PitchAccidental[] = keySignature.getAccidentals(notes);
            expect(accidentals).toEqual(expectedAccidentals);
        });
        it('can validate a minor key signature with sharps', (): void => {
            const notes: MutableNote[] = [
                new Note(new MidiNote(73)).toMutableNote(), // C#
                new Note(new MidiNote(62)).toMutableNote(), // D
                new Note(new MidiNote(64)).toMutableNote(), // E
                new Note(new MidiNote(66)).toMutableNote(), // F#
                new Note(new MidiNote(67)).toMutableNote(), // G
                new Note(new MidiNote(69)).toMutableNote(), // A
                new Note(new MidiNote(71)).toMutableNote()  // B
            ];
            const keySignature: KeySignature = KeySignature.fSharpMinor;
            notes[0].mutate("flat");
            const expectedAccidentals: PitchAccidental[] =
                ["sharp", "none", "none", "none", "natural", "none", "none"];
            const accidentals: PitchAccidental[] = keySignature.getAccidentals(notes);
            expect(accidentals).toEqual(expectedAccidentals);
        });
        it('can validate a minor key signature with flats', (): void => {
            const notes: MutableNote[] = [
                new Note(new MidiNote(72)).toMutableNote(), // C
                new Note(new MidiNote(74)).toMutableNote(), // D
                new Note(new MidiNote(75)).toMutableNote(), // Eb || D#
                new Note(new MidiNote(65)).toMutableNote(), // F
                new Note(new MidiNote(67)).toMutableNote(), // G
                new Note(new MidiNote(68)).toMutableNote(), // Ab || G#
                new Note(new MidiNote(70)).toMutableNote()  // Bb || A#
            ];
            notes[6].mutate("flat");
            const keySignature: KeySignature = KeySignature.fMinor;
            const expectedAccidentals: PitchAccidental[] =
                ["none", "natural", "flat", "none", "none", "flat", "none"];
            const accidentals: PitchAccidental[] = keySignature.getAccidentals(notes);
            expect(accidentals).toEqual(expectedAccidentals);
        });
    });
});
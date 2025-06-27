import {Chord} from "../../../models/chord/Chord";
import {Note} from "../../../models/note/Note";

describe('Chord', (): void => {
    it('does not allow duplicate notes', (): void => {
        const chord: Chord = new Chord();
        const noteBase: Note = Note.fromMidiNumber(60);
        const noteDuplicate: Note = Note.fromMidiNumber(60);
        chord.addNote(noteBase);
        chord.addNote(noteDuplicate);
        expect(chord.notes.size).toBe(1);
    });
    describe('Major chords', (): void => {
        it('identifies a major chord', (): void => {
            let chord: Chord = new Chord();
            chord.addNote(Note.fromMidiNumber(60)); // C
            chord.addNote(Note.fromMidiNumber(64)); // E
            chord.addNote(Note.fromMidiNumber(67)); // G
            expect(chord.fullName).toBe("C Major");

            chord = new Chord();
            chord.addNote(Note.fromMidiNumber(65)); // F
            chord.addNote(Note.fromMidiNumber(69)); // A
            chord.addNote(Note.fromMidiNumber(72)); // C
            expect(chord.fullName).toBe("F Major");

            chord = new Chord();
            chord.addNote(Note.fromMidiNumber(69)); // A
            chord.addNote(Note.fromMidiNumber(72)); // C
            chord.addNote(Note.fromMidiNumber(76)); // E
            expect(chord.fullName).not.toBe("A Major");
        });
        it('identifies first inversion major chords', (): void => {
            let chord: Chord = new Chord();
            chord.addNote(Note.fromMidiNumber(64)); // E
            chord.addNote(Note.fromMidiNumber(67)); // G
            chord.addNote(Note.fromMidiNumber(72)); // C
            expect(chord.fullName).toBe("C Major (1st Inversion)");

            chord = new Chord();
            chord.addNote(Note.fromMidiNumber(69)); // A
            chord.addNote(Note.fromMidiNumber(72)); // C
            chord.addNote(Note.fromMidiNumber(77)); // F
            expect(chord.fullName).toBe("F Major (1st Inversion)");
        });
        it('identifies second inversion major chords', (): void => {
            let chord: Chord = new Chord();
            chord.addNote(Note.fromMidiNumber(67)); // G
            chord.addNote(Note.fromMidiNumber(72)); // C
            chord.addNote(Note.fromMidiNumber(76)); // E
            expect(chord.fullName).toBe("C Major (2nd Inversion)");

            chord = new Chord();
            chord.addNote(Note.fromMidiNumber(72)); // C
            chord.addNote(Note.fromMidiNumber(77)); // F
            chord.addNote(Note.fromMidiNumber(81)); // A
            expect(chord.fullName).toBe("F Major (2nd Inversion)");
        });
    });

    describe('Minor chords', (): void => {
        it('identifies a minor chord', (): void => {
            let chord: Chord = new Chord();
            chord.addNote(Note.fromMidiNumber(60)); // C
            chord.addNote(Note.fromMidiNumber(63)); // Eb
            chord.addNote(Note.fromMidiNumber(67)); // G
            expect(chord.fullName).toBe("C Minor");

            chord = new Chord();
            chord.addNote(Note.fromMidiNumber(65)); // F
            chord.addNote(Note.fromMidiNumber(68)); // Ab
            chord.addNote(Note.fromMidiNumber(72)); // C
            expect(chord.fullName).toBe("F Minor");

            chord = new Chord();
            chord.addNote(Note.fromMidiNumber(69)); // A
            chord.addNote(Note.fromMidiNumber(72)); // C
            chord.addNote(Note.fromMidiNumber(75)); // E
            expect(chord.fullName).not.toBe("A Minor");

            chord = new Chord();
            chord.addNote(Note.fromMidiNumber(62)); // D
            chord.addNote(Note.fromMidiNumber(65)); // F
            chord.addNote(Note.fromMidiNumber(72)); // C
            expect(chord.fullName).toBe("Unknown Chord");
        });
        it('identifies first inversion minor chords', (): void => {
            let chord: Chord = new Chord();
            chord.addNote(Note.fromMidiNumber(63)); // Eb
            chord.addNote(Note.fromMidiNumber(67)); // G
            chord.addNote(Note.fromMidiNumber(72)); // C
            expect(chord.fullName).toBe("C Minor (1st Inversion)");

            chord = new Chord();
            chord.addNote(Note.fromMidiNumber(68)); // Ab
            chord.addNote(Note.fromMidiNumber(72)); // C
            chord.addNote(Note.fromMidiNumber(77)); // F
            expect(chord.fullName).toBe("F Minor (1st Inversion)");
        });
        it('identifies second inversion minor chords', (): void => {
            let chord: Chord = new Chord();
            chord.addNote(Note.fromMidiNumber(67)); // G
            chord.addNote(Note.fromMidiNumber(72)); // C
            chord.addNote(Note.fromMidiNumber(75)); // Eb
            expect(chord.fullName).toBe("C Minor (2nd Inversion)");

            chord = new Chord();
            chord.addNote(Note.fromMidiNumber(72)); // C
            chord.addNote(Note.fromMidiNumber(77)); // F
            chord.addNote(Note.fromMidiNumber(80)); // Ab
            expect(chord.fullName).toBe("F Minor (2nd Inversion)");
        });
    });
    it('calculates without regard to input order', (): void => {
        let chord: Chord = new Chord();
        chord.addNote(Note.fromMidiNumber(64)); // E
        chord.addNote(Note.fromMidiNumber(67)); // G
        chord.addNote(Note.fromMidiNumber(60)); // C
        expect(chord.fullName).toBe("C Major");

        chord = new Chord();
        chord.addNote(Note.fromMidiNumber(67)); // G
        chord.addNote(Note.fromMidiNumber(71)); // B
        chord.addNote(Note.fromMidiNumber(74)); // D
        chord.addNote(Note.fromMidiNumber(77)); // F
        expect(chord.fullName).toBe("G Dominant");
    });

    it('identifies uninverted triads', (): void => {
        let chord: Chord = new Chord();
        chord.addNote(Note.fromMidiNumber(60)); // C
        chord.addNote(Note.fromMidiNumber(64)); // E
        chord.addNote(Note.fromMidiNumber(67)); // G
        expect(chord.isUninvertedTriad()).toBe(true);

        chord = new Chord();
        chord.addNote(Note.fromMidiNumber(60)); // C
        chord.addNote(Note.fromMidiNumber(63)); // Eb
        chord.addNote(Note.fromMidiNumber(67)); // G
        expect(chord.isUninvertedTriad()).toBe(true);

        chord = new Chord();
        chord.addNote(Note.fromMidiNumber(60)); // C
        chord.addNote(Note.fromMidiNumber(65)); // F
        chord.addNote(Note.fromMidiNumber(67)); // G
        expect(chord.isUninvertedTriad()).toBe(false);

        chord = new Chord();
        chord.addNote(Note.fromMidiNumber(65)); // F
        chord.addNote(Note.fromMidiNumber(69)); // A
        chord.addNote(Note.fromMidiNumber(74)); // D
        expect(chord.isUninvertedTriad()).toBe(false);
    });
});
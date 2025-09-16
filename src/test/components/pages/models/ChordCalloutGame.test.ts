import {
    ChordCalloutGame
} from "../../../../components/pages/chord-callout/models/ChordCalloutGame";
import {ChordDifficulty} from "../../../../models/chord/ChordDifficulty";
import {Chord} from "../../../../models/chord/Chord";

describe('ChordCalloutGame', (): void => {
    const game: ChordCalloutGame = new ChordCalloutGame();
    describe('generateRandomChord', (): void => {
        it('should create any kind of uninverted triad chord', (): void => {
            const chord: Chord = ChordCalloutGame.generateRandomChord(ChordDifficulty.EASY);
            expect(chord.fullName).not.toBe("Unknown Chord");
            expect(chord.notes.size).toBe(3);
        });
        it('should create any kind of inverted triad chord', () => {
            for (let i: number = 0; i < 100; i++) {
                const firstInversionTriad: Chord = ChordCalloutGame.generateRandomChord(ChordDifficulty.MEDIUM);
                const secondInversionTriad: Chord = ChordCalloutGame.generateRandomChord(ChordDifficulty.HARD);
                if (firstInversionTriad.isAnyInverted()) {
                    expect(firstInversionTriad.isFirstInversion()).toBe(true);
                }
                if (!secondInversionTriad.isAnySeventh()) {
                    expect(secondInversionTriad.isSecondInversion()).toBe(true);
                }
            }
        });
    });
    describe('getNoteInversionSplit', (): void => {
        it('should not exceed the difficulty limit', (): void => {
            const difficulties: ChordDifficulty[] = ChordDifficulty.values().filter(getDifficulty => getDifficulty !== ChordDifficulty.EASY);
            for (let i: number = 0; i < 60; i++) {
                difficulties.forEach(difficulty => {
                    const game: ChordCalloutGame = new ChordCalloutGame();
                    const [numNotes, inversionNum] = ChordCalloutGame.getNoteInversionSplit(difficulty);
                    expect(inversionNum + numNotes).toBe(difficulty);
                });
            }
        });
        describe('inversion limits', (): void => {
            it('should not exceed medium inversion limits', (): void => {
                for (let i: number = 0; i < 100; i++) {
                    const [numNotes, inversionNum] = ChordCalloutGame.getNoteInversionSplit(ChordDifficulty.MEDIUM);
                    const hasThreeOrFourNotes: boolean = numNotes === 3 || numNotes === 4;
                    const hasZeroOrOneInversion: boolean = inversionNum === 0 || inversionNum === 1;
                    expect(hasThreeOrFourNotes && hasZeroOrOneInversion).toBe(true);
                }
            });
            it('should not exceed hard inversion limits', (): void => {
                for (let i: number = 0; i < 100; i++) {
                    // const [numNotes, inversionNum] = ChordCalloutGame.getNoteInversionSplit(ChordDifficulty.HARD);
                    // const hasThreeOrFourNotes: boolean = numNotes === 3 || numNotes === 4;
                    // const hasZeroToTwoInversions: boolean = inversionNum >= 0 && inversionNum <= 2;
                    // expect(hasThreeOrFourNotes && hasZeroToTwoInversions).toBe(true);
                }
            });
        });
    });
    describe('getFirstInversionTriad', (): void => {
        it('should return a first inversion triad chord', (): void => {
            const chord: Chord = ChordCalloutGame.getFirstInversionTriadChord();
            expect(chord.isAnyInverted()).toBe(true);
        });
    });
    describe('getSecondInversionTriad', (): void => {
        it('should return a second inversion triad chord', (): void => {
            const chord: Chord = ChordCalloutGame.getSecondInversionTriadChord();
            // expect(chord.isAnyInverted()).toBe(true);
            // expect(chord.fullName.includes('2nd')).toBe(true);
        });
    });
    describe('getUninvertedSeventhChord', (): void => {
        it('should return an uninverted seventh chord', (): void => {
            const chord: Chord = ChordCalloutGame.getUninvertedSeventhChord();
            expect(chord.isAnyInverted()).toBe(false);
        });
    });
})
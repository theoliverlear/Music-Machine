import {
    ChordCalloutGame
} from "../../../../components/pages/chord-callout/models/ChordCalloutGame";
import {ChordDifficulty} from "../../../../models/chord/ChordDifficulty";
import {Chord} from "../../../../models/chord/Chord";

describe('ChordCalloutGame', () => {
    describe('generateRandomChord', () => {
        it('should create any kind of chord', (): void => {
            const game = new ChordCalloutGame();
            const chord: Chord = game.generateRandomChord(ChordDifficulty.EASY);
            expect(chord.fullName).not.toBe("Unknown Chord");
            expect(chord.notes.size).toBe(3);
        });
    });
})
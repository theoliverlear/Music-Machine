export enum ChordDifficulty {
    EASY = 3,
    MEDIUM = 4,
    HARD = 5,
    EXPERT = 6,
}
export namespace ChordDifficulty {
    export function getDifficulty(numNotes: number,
                                  numInversions: number): ChordDifficulty {
        if (numNotes < 3 || numInversions < 0) {
            throw new Error("Invalid number of notes or inversions for " +
                            "chord difficulty calculation.");
        }
        if (numNotes > 6 || numInversions > 3) {
            throw new Error("Number of notes or inversions exceeds the " +
                            "maximum for chord difficulty calculation.");
        }
        const totalDifficulty: number = numNotes + numInversions;
        if (totalDifficulty > ChordDifficulty.EXPERT) {
            return ChordDifficulty.EXPERT;
        }
        return totalDifficulty as ChordDifficulty;
    }
    export function values(): ChordDifficulty[] {
        return [
            ChordDifficulty.EASY,
            ChordDifficulty.MEDIUM,
            ChordDifficulty.HARD,
            ChordDifficulty.EXPERT
        ];
    }
}
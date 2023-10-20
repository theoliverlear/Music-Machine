import org.junit.Test;
import org.theoliverlear.Chord;
import org.theoliverlear.Note;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.IsEqual.equalTo;

public class ChordTest {
    Chord testMinorChord = new Chord(Note.C1, Note.E_FLAT_1, Note.G1);
    Chord testMajorChord = new Chord(Note.C1, Note.E1, Note.G1);
    Chord testAugmentedChord = new Chord(Note.C1, Note.E1, Note.G_SHARP_1);
    Chord testDiminishedChord = new Chord(Note.C1, Note.E_FLAT_1, Note.G_FLAT_1);
    Chord testUnknownChord = new Chord(Note.C1, Note.E_FLAT_1, Note.F1);
    Chord testMajor7thChord = new Chord(Note.C1, Note.E1, Note.G1, Note.B1);
    Chord testDominantChord = new Chord(Note.C1, Note.E1, Note.G1, Note.B_FLAT_1);
    Chord testMinor7thChord = new Chord(Note.C1, Note.E_FLAT_1, Note.G1, Note.B_FLAT_1);
    Chord testMinorMajor7thChord = new Chord(Note.C1, Note.E_FLAT_1, Note.G1, Note.B1);
    @Test
    public void testMinorChord() {
        assertThat("Minor", equalTo(testMinorChord.getChordType()));
    }
    @Test
    public void testMajorChord() {
        assertThat("Major", equalTo(testMajorChord.getChordType()));
    }
    @Test
    public void testAugmentedChord() {
        assertThat("Augmented", equalTo(testAugmentedChord.getChordType()));
    }
    @Test
    public void testDiminishedChord() {
        assertThat("Diminished", equalTo(testDiminishedChord.getChordType()));
    }
    @Test
    public void testUnknownChord() {
        assertThat("Unknown", equalTo(testUnknownChord.getChordType()));
    }
    @Test
    public void testMajor7thChord() {
        assertThat("Major 7th", equalTo(testMajor7thChord.getChordType()));
    }
    @Test
    public void testDominantChord() {
        assertThat("Dominant", equalTo(testDominantChord.getChordType()));
    }
    @Test
    public void testMinor7thChord() {
        assertThat("Minor 7th", equalTo(testMinor7thChord.getChordType()));
    }
    @Test
    public void testMinorMajor7thChord() {
        assertThat("Minor Major 7th", equalTo(testMinorMajor7thChord.getChordType()));
    }
}

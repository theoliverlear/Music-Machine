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
}

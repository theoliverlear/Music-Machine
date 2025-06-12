import {MusicSet} from "../models/MusicSet";
import {Note} from "../models/note/Note";
import {MidiNote} from "../models/midi/MidiNote";


describe('MusicSet', () => {
    it('can be added to', () => {
        let musicSet: MusicSet<Note> = new MusicSet<Note>();
        expect(musicSet.size).toBe(0);
        musicSet.add(new Note(new MidiNote(60)));
        expect(musicSet.size).toBe(1);
    });
    it('does not allow duplicates', () => {
        let musicSet: MusicSet<Note> = new MusicSet<Note>();
        musicSet.add(new Note(new MidiNote(60)));
        musicSet.add(new Note(new MidiNote(60)));
        expect(musicSet.size).toBe(1);
    });
});
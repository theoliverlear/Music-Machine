export class MidiNote {
    private _noteId: number;
    private _velocity: number;
    private _duration: number;
    constructor(noteId: number = 0, velocity: number = 0, timestamp: number = 0) {
        this._noteId = noteId;
        this._velocity = velocity;
        this._duration = timestamp;
    }
    stopNote(timestamp: number): void {
        this._duration = timestamp - this._duration;
    }
    get noteId(): number {
        return this._noteId;
    }
    get velocity(): number {
        return this._velocity;
    }
    get duration(): number {
        return this._duration;
    }
    setNoteId(noteId: number): void {
        this._noteId = noteId;
    }
    setVelocity(velocity: number): void {
        this._velocity = velocity;
    }
    setDuration(duration: number): void {
        this._duration = duration;
    }
}
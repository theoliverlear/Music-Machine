export class MidiDeviceInfo {
    private _id: string;
    private _name: string;
    constructor(id: string = '', name: string = '') {
        this._id = id;
        this._name = name;
    }
    get id(): string {
        return this._id;
    }
    get name(): string {
        return this._name;
    }
    setId(id: string): void {
        this._id = id;
    }
    setName(name: string): void {
        this._name = name;
    }
    toString(): string {
        return `MidiDeviceInfo{id: ${this._id}, name: ${this._name}}\n`;
    }
}
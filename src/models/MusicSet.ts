import {Equatable} from "./behavior/Equatable";

export class MusicSet<T extends Equatable> {
    private _musicItems: Set<T>;
    constructor(musicItems: T[] = []) {
        this._musicItems = new Set<T>();
        this.addAll(musicItems);
    }
    contains(musicItem: T): boolean {
        let containsItem: boolean = false;
        for (let currentMusicItem of this._musicItems) {
            if (currentMusicItem.equals(musicItem)) {
                containsItem = true;
                break;
            }
        }
        return containsItem;
    }
    add(musicItem: T): void {
        if (!this.contains(musicItem)) {
            this._musicItems.add(musicItem);
        }
    }
    addAll(musicItems: T[]): void {
        for (let musicItem of musicItems) {
            if (!this.contains(musicItem)) {
                this._musicItems.add(musicItem);
            }
        }
    }
    updateAll(musicItems: T[]): void {
        this._musicItems.clear();
        this.addAll(musicItems);
    }
    remove(musicItem: T): void {
        if (this.contains(musicItem)) {
            this._musicItems.delete(musicItem);
        }
    }
    removeAll(musicItems: T[]): void {
        for (let musicItem of musicItems) {
            if (this.contains(musicItem)) {
                this._musicItems.delete(musicItem);
            }
        }
    }

    getByIndex(index: number): T | undefined {
        if (index < 0 || index >= this._musicItems.size) {
            return undefined;
        }
        return this.asArray[index];
    }

    get musicItems(): Set<T> {
        return this._musicItems;
    }
    get size(): number {
        return this._musicItems.size;
    }
    get asArray(): T[] {
        return Array.from(this._musicItems);
    }

    set musicItems(musicItems: Set<T>) {
        this._musicItems = musicItems;
    }

    setNotes(notes: Set<T>): void {
        this._musicItems = new Set<T>(notes);
    }
}
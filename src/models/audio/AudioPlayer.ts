import {AudioAsset} from "../../assets/audioAssets";

export class AudioPlayer {
    private _audio: HTMLAudioElement;
    private _volume: number;
    constructor(volume: number = 0.5) {
        this._audio = new Audio();
        this._volume = volume;
        this._audio.volume = this._volume;
        this._audio.preload = 'auto';
    }

    get volume(): number {
        return this._volume;
    }

    set volume(value: number) {
        this._audio.volume = this._volume;
    }

    setAudioSource(source: AudioAsset): void {
        this._audio.src = source.path;
    }

    play = (): void => {
        if (this._audio && this._audio.src) {
            this.resetToStart();
            this._audio.play().catch(console.error);
        }
    }

    private resetToStart(): void {
        this._audio.currentTime = 0;
    }
}
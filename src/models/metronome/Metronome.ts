import {
    metronomeOffBeatAudioAsset,
    metronomeOnBeatAudioAsset
} from "../../assets/audioAssets";

export class Metronome {
    // TODO: A general metronome which can start manually or automatically
    //       when a user starts playing the piano.
    private _audio: HTMLAudioElement;
    private _isPlaying: boolean;
    private _bpm: number;
    private _numBeats: number;
    private _volume: number;
    constructor(bpm: number = 120,
                numBeats: number = 4,
                volume: number = 0.5) {
        this._isPlaying = false;
        this._audio = new Audio();
        this._bpm = this.normalizeBpm(bpm);
        this._numBeats = numBeats;
        this._volume = this.getVolume(volume);
        this._audio.volume = this._volume;
        this._audio.preload = 'auto';
    }

    normalizeBpm(bpm: number): number {
        if (bpm < 20) {
            return 20;
        } else if (bpm > 300) {
            return 300;
        }
        return bpm;
    }

    toggle = async (): Promise<void> => {
        if (this._isPlaying) {
            this.stop();
        } else {
            await this.start().catch(console.error);
        }
    }

    getVolume(percentage: number): number {
        if (percentage === 1) {
            return 0;
        } else if (percentage === 0) {
            return Number.MIN_VALUE;
        } else {
            return -6 * Math.log10(1 / percentage);
        }
    }

    getMillisBetweenBeats(): number {
        return (60 / this._bpm) * 1000;
    }

    stop(): void {
        this._isPlaying = false;
    }

    start = async (): Promise<void> => {
        if (this._isPlaying) {
            return;
        }
        this._isPlaying = true;
        let beatCount = 0;
        while (this._isPlaying) {
            this.setAudioSource(beatCount);
            this._audio.currentTime = 0;
            this.click();
            beatCount++;
            const millisBetweenBeats = this.getMillisBetweenBeats();
            const nextBeatTime = Date.now() + millisBetweenBeats;
            await new Promise(resolve => {
                const timeUntilNextBeat = nextBeatTime - Date.now();
                setTimeout(resolve, timeUntilNextBeat);
            });
        }
    }

    private setAudioSource(beatCount: number): void {
        if (this.playOnBeat(beatCount)) {
            this._audio.src = metronomeOnBeatAudioAsset.path;
        } else {
            this._audio.src = metronomeOffBeatAudioAsset.path;
        }
    }

    private playOnBeat(beatCount: number): boolean {
        return beatCount === 0 || beatCount % this._numBeats === 0;
    }

    click = (): void => {
        this._audio.currentTime = 0;
        this._audio.play().catch(console.error);
    }
}
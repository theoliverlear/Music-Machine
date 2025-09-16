import {
    metronomeOffBeatAudioAsset,
    metronomeOnBeatAudioAsset
} from "../../assets/audioAssets";
import {AudioPlayer} from "../audio/AudioPlayer";

export class Metronome {
    // TODO: A general metronome which can start manually or automatically
    //       when a user starts playing the piano.
    private _audio: AudioPlayer;
    private _isPlaying: boolean;
    private _bpm: number;
    private _numBeats: number;
    private _hasCountOff: boolean;
    private _countOffMeasures?: number;
    constructor(bpm: number = 120,
                numBeats: number = 4,
                volume: number = 0.5,
                hasCountOff: boolean = false,
                countOffMeasures?: number) {
        this._isPlaying = false;
        this._audio = new AudioPlayer(volume);
        this._bpm = this.normalizeBpm(bpm);
        this._numBeats = numBeats;
        this._hasCountOff = hasCountOff;
        if (countOffMeasures !== undefined) {
            this._countOffMeasures = countOffMeasures;
        }
    }

    playCountOff(): void {
        if (!this._hasCountOff || this._countOffMeasures === undefined) {
            return;
        }

    }

    playMeasure() {

    }

    set volume(percentage: number) {
        this._audio.volume = percentage;
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
        let beatCount: number = 0;
        while (this._isPlaying) {
            this.setAudioSource(beatCount);
            this.click();
            beatCount++;
            // const millisBetweenBeats: number = this.getMillisBetweenBeats();
            // const nextBeatTime: number = Date.now() + millisBetweenBeats;
            // await new Promise(resolve => {
            //     const timeUntilNextBeat: number = nextBeatTime - Date.now();
            //     setTimeout(resolve, timeUntilNextBeat);
            // });
            await this.waitTillNextBeat().catch(console.error);
        }
    }

    async waitTillNextBeat(): Promise<void> {
        const millisBetweenBeats: number = this.getMillisBetweenBeats();
        const nextBeatTime: number = Date.now() + millisBetweenBeats;
        await new Promise(resolve => {
            const timeUntilNextBeat: number = nextBeatTime - Date.now();
            setTimeout(resolve, timeUntilNextBeat);
        });
    }

    setAudioSource(beatCount: number): void {
        if (this.playOnBeat(beatCount)) {
            this._audio.setAudioSource(metronomeOnBeatAudioAsset);
        } else {
            this._audio.setAudioSource(metronomeOffBeatAudioAsset);
        }
    }

    private playOnBeat(beatCount: number): boolean {
        return beatCount === 0 || beatCount % this._numBeats === 0;
    }

    click = (): void => {
        this._audio.play();
    }
}
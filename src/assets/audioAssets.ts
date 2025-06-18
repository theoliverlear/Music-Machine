export interface AudioAsset {
    path: string;
}

export function getAudioAssetPath(assetName: string): string {
    return audioAssetPath + assetName;
}

export function getMetronomeAssetPath(assetName: string): string {
    return metronomeAssetPath + assetName;
}

const audioAssetPath: string = 'audio/';
const metronomeAssetPath: string = audioAssetPath + 'metronome/';

export const metronomeOnBeatAudioAsset: AudioAsset = {
    path: getMetronomeAssetPath('metronome_on_beat.wav')
};

export const metronomeOffBeatAudioAsset: AudioAsset = {
    path: getMetronomeAssetPath('metronome_off_beat.wav')
};
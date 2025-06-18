export enum ChordCalloutOptionType {
    KEYS = 'Keys',
    SHEET_MUSIC = 'Sheet Music',
    NAME = 'Name'
}
export namespace ChordCalloutOptionType {
    export function getMultiplierByType(type: ChordCalloutOptionType): number {
        switch (type) {
            case ChordCalloutOptionType.KEYS:
                return 1;
            case ChordCalloutOptionType.SHEET_MUSIC:
                return 1.50;
            case ChordCalloutOptionType.NAME:
                return 2;
            default:
                return 1;
        }
    }
}
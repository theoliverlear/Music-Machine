export interface ImageAsset {
    src: string;
    alt: string;
}

export function getImagePath(fileName: string): string {
    return imageAssetPath + fileName;
}
export function getLogoImagePath(fileName: string): string {
    return logoImageAssetPath + fileName;
}
export function getIconImagePath(fileName: string): string {
    return iconImageAssetPath + fileName;
}

export function getTheoryImagePath(fileName: string): string {
    return theoryImageAssetPath + fileName;
}

const imageAssetPath: string = 'images/';
const logoImageAssetPath: string = imageAssetPath + 'logo/';
const iconImageAssetPath: string = imageAssetPath + 'icon/';
const theoryImageAssetPath: string = imageAssetPath + 'theory/';

export const homeIconImageAsset: ImageAsset = {
    src: getIconImagePath('home_icon.svg'),
    alt: 'Home Icon'
};

export const sharpTheoryImageAsset: ImageAsset = {
    src: getTheoryImagePath('sharp.svg'),
    alt: 'Sharp Music Theory Icon'
};

export const flatTheoryImageAsset: ImageAsset = {
    src: getTheoryImagePath('flat.svg'),
    alt: 'Flat Music Theory Icon'
};

export const naturalTheoryImageAsset: ImageAsset = {
    src: getTheoryImagePath('natural.svg'),
    alt: 'Natural Music Theory Icon'
};

export const noteHeadTheoryImageAsset: ImageAsset = {
    src: getTheoryImagePath('note_head.svg'),
    alt: 'Note Head Music Theory Icon'
};

export const singleGrandStaffTheoryImageAsset: ImageAsset = {
    src: getTheoryImagePath('single_grand_staff.svg'),
    alt: 'Single Grand Staff Music Theory Icon'
};
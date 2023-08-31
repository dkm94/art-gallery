export type BackgroundDetails = {
    color: string;
    data: string;
}

export type Section = {
    id: number;
    title: string;
    background: BackgroundDetails;
};

export type Gallery = {
    id: number;
    img: string;
}

export type Artwork = Gallery;
export type Fashion = Gallery;
export type Portrait = Gallery;
export type Nature = Gallery;
export type Wildlife = Gallery;
export type Wedding = Gallery;

export type DisplayMode = "card" | "grid"
export type DisplayTitle = "Card" | "Grid"

export interface ICurrentBackgroundCtx {
    background: number;
}
export interface IMainProps {
    setBackground: React.Dispatch<React.SetStateAction<number>>;
    gallery: Section[];
}

export interface ICarouselProps {
    selectedGalleryName: string;
    setRotate: React.Dispatch<React.SetStateAction<boolean>>;
    rotate: boolean;
    setSwipe: React.Dispatch<React.SetStateAction<boolean>>;
    swipe: boolean;
    setFadeOut: React.Dispatch<React.SetStateAction<boolean>>;
    fadeOut: boolean;
    setMoveToBack: React.Dispatch<React.SetStateAction<boolean>>;
    moveToBack: boolean;
    array: Gallery[];
    setArray: React.Dispatch<React.SetStateAction<Gallery[]>>;
}

export interface ICarouselImageProps {
    index: number;
    alt: string;
    src: string;
    setRotate: React.Dispatch<React.SetStateAction<boolean>>;
    rotate: boolean;
    setSwipe: React.Dispatch<React.SetStateAction<boolean>>;
    swipe: boolean;
    selectedGalleryName: string;
    setMoveToBack: React.Dispatch<React.SetStateAction<boolean>>;
    moveToBack: boolean;
}

export interface ICarouselTitleProps {
    slideTransition: string;
}

export interface IProgressBarProps {
    slideLength: number;
    activePageTransition: string;
    activeSlideIndex: number;
}

export interface ICardToGridProps {
    display: DisplayMode;
    setDisplay: React.Dispatch<React.SetStateAction<DisplayMode>>;
}

export interface ICardToGridBtnProps extends ICardToGridProps {
    mode: DisplayMode;
    title: DisplayTitle;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
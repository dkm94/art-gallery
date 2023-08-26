export type BackgroundDetails = {
    color: string;
    data: string;
}

export type Section = {
    id: number;
    title: string;
    background: BackgroundDetails;
};

export type Artwork = {
    id: number;
    img: string;
}

export type Fashion = {
    id: number;
    img: string;
}

export type Portrait = {
    id: number;
    img: string;
}

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
}

export interface ICarouselImageProps {
    key: number;
    alt: string;
    src: string;
    setRotate: React.Dispatch<React.SetStateAction<boolean>>;
    rotate: boolean;
    setSwipe: React.Dispatch<React.SetStateAction<boolean>>;
    swipe: boolean;
    selectedGalleryName: string;
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
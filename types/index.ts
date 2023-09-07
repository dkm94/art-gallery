import { gallery } from './../src/constants/index';
export type BackgroundDetails = {
    color: string;
    data: string;
}

export type Section = {
    id: number;
    title: string;
    background: BackgroundDetails;
    gallery: Gallery[];
};

export type Gallery = {
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
    gallery: Section[];
    formattedArray: any[];
    setFormattedArray: React.Dispatch<React.SetStateAction<any[]>>;
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
    showViewBtn: boolean
    setShowViewBtn: React.Dispatch<React.SetStateAction<boolean>>;
    activeSlideIndex: number;
    showView:(id: number) => void;
    handleChangeRotation: (index: number) => string;
    rotationDegree: number;
}

export interface ICarouselImageProps {
    index: number;
    galleryId: number;
    src: string;
    setRotate: React.Dispatch<React.SetStateAction<boolean>>;
    rotate: boolean;
    setSwipe: React.Dispatch<React.SetStateAction<boolean>>;
    swipe: boolean;
    selectedGalleryName: string;
    setMoveToBack: React.Dispatch<React.SetStateAction<boolean>>;
    moveToBack: boolean;
    showViewBtn: boolean
    setShowViewBtn: React.Dispatch<React.SetStateAction<boolean>>;
    activeSlideIndex: number;
    showView:(id: number) => void;
    handleChangeRotation: (index: number) => string;
    rotationDegree: number;
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

export interface IViewBtnProps extends Pick<ICarouselImageProps, "showViewBtn" | "index" | "showView" | "galleryId" | "setShowViewBtn" | "rotationDegree" > {}
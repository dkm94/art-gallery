export type BackgroundDetails = {
    color: string;
    data: string;
}

export type Gallery = {
    id: number;
    img: string;
}

export type Section = {
    id: number;
    title: string;
    background: BackgroundDetails;
    gallery: Gallery[];
};

export type DisplayMode = "card" | "grid"
export type DisplayTitle = "Card" | "Grid"

export interface ICurrentBackgroundCtx {
    background: number;
}
export interface IMainProps {
    setBackground: React.Dispatch<React.SetStateAction<number>>;
    gallery: Section[];
}

export interface ICarouselProps extends Pick<IMainProps, "gallery" > {
    formattedArray: any[];
    setFormattedArray: React.Dispatch<React.SetStateAction<any[]>>;
    selectedGalleryName: string;
    setRotate: React.Dispatch<React.SetStateAction<boolean>>;
    rotate: boolean;
    setSwipe: React.Dispatch<React.SetStateAction<boolean>>;
    swipe: boolean;
    setFadeOut: React.Dispatch<React.SetStateAction<boolean>>;
    fadeOut: boolean;
    array: Gallery[];
    setArray: React.Dispatch<React.SetStateAction<Gallery[]>>;
    showViewBtn: boolean
    setShowViewBtn: React.Dispatch<React.SetStateAction<boolean>>;
    activeSlideIndex: number;
    showView:(id: number) => void;
    handleChangeRotation: (index: number) => string;
    setAnimation: React.Dispatch<React.SetStateAction<string>>;
    animation: string;
}

export interface ICarouselImageProps extends Omit<ICarouselProps, "gallery" | "formattedArray" | "setFormattedArray" | "setFadeOut" | "fadeOut" | "setArray" | "array" > {
    index: number;
    galleryId: number;
    src: string;
}

export interface ICarouselTitleProps {
    slideTransition: string;
}

export interface IProgressBarProps {
    slideLength: number;
    activePageTransition: string;
    activeSlideIndex: number;
    animation: string;
}

export interface ICardToGridProps {
    display: DisplayMode;
    setDisplay: React.Dispatch<React.SetStateAction<DisplayMode>>;
    animation: string;
}

export interface ICardToGridBtnProps extends Omit<ICardToGridProps, "animation"> {
    mode: DisplayMode;
    title: DisplayTitle;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface IViewBtnProps extends Pick<ICarouselImageProps, "showViewBtn" | "index" | "showView" | "galleryId" | "setShowViewBtn" | "setAnimation" | "animation" > {
    rotationDegree: string;
}
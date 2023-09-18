export type BackgroundDetails = {
    color: string;
    data: string;
}

export type Gallery = {
    id: number;
    img: string | null;
}

export type FormattedGallery = {
    id: number;
    values: Gallery[];
}

export type Section = {
    id: number;
    title: string;
    background: BackgroundDetails;
    gallery: Gallery[];
};

export type DisplayMode = "card" | "grid"
export type DisplayTitle = "Card" | "Grid"

export type Mode = "selected" | "not-selected"

export interface ICurrentBackgroundCtx {
    background: number;
}
export interface IMainProps {
    setBackground: React.Dispatch<React.SetStateAction<number>>;
    gallery: Section[];
    setSlideTransition: React.Dispatch<React.SetStateAction<string>>;
    setAnimation: React.Dispatch<React.SetStateAction<string>>;
    slideHeight: number;
    animation: string;
    setSlide: React.Dispatch<React.SetStateAction<number>>;
}

export interface ICarouselProps extends Pick<IMainProps, "gallery" > {
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
    showView:(id: number) => void;
    handleChangeRotation: (index: number) => string;
    setAnimation: React.Dispatch<React.SetStateAction<string>>;
    animation: string;
}

export interface ICarouselImageProps extends Pick<ICarouselProps, "setRotate" | "rotate" | "swipe" | "showViewBtn" | "setShowViewBtn" | "showView" | "handleChangeRotation" | "setAnimation" | "animation"  > {
    index: number;
    galleryId: number;
    src: string | null;
}

export interface ICarouselTitleProps {
    slideTransition: string;
    animation: string;
    height: number;
    setTitleHeight: React.Dispatch<React.SetStateAction<number>>;
    slide: number;
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

export interface IViewBtnProps extends Pick<ICarouselImageProps, "showViewBtn" | "showView" | "galleryId" | "setShowViewBtn" | "setAnimation" | "animation" > {
    rotationDegree: string;
}

export interface IPrevBtnProps {
    text: string;
    mode: Mode;
    setSlidePrev?: React.Dispatch<React.SetStateAction<boolean>>;
    slidePrev?: boolean | undefined;
    selectedGallery?: number;
    prevOne?: () => void;
    getBack?: () => void;
}

export interface INextBtnProps {
    setSlideNext: React.Dispatch<React.SetStateAction<boolean>>;
    slideNext: boolean;
    selectedGallery: number;
    max: number;
    nextOne: () => void;
}
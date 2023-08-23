export type BackgroundDetails = {
    color: string;
    data: string;
}

export type Section = {
    idx: number;
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

export interface IMainProps {
    setBackground: React.Dispatch<React.SetStateAction<number>>;
    gallery: Section[];
}

export interface ICarouselProps {
    selectedGalleryName: string;
    activeClass: string;
}

export interface ICarouselImageProps {
    key: number;
    alt: string;
    src: string;
    activeClass: string;
}
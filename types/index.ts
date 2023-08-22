export type BackgroundDetails = {
    color: string;
    data: string;
}

export type Background = {
    [key: string]: BackgroundDetails
}

export type Section = string;

export type Artwork = {
    id: number;
    img: string;
}

export type Fashion = {
    id: number;
    img: string;
}

export interface IMainProps {
    setBackground: React.Dispatch<React.SetStateAction<string>>;
}

export interface ICarouselProps {
    gallery: string;
    activeClass: string;
}

export interface ICarouselImageProps {
    key: number;
    alt: string;
    src: string;
    activeClass: string;
}
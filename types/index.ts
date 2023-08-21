export type BackgroundDetails = {
    color: string;
    data: string;
}

export type Background = {
    [key: string]: BackgroundDetails
}

export type Section = string;

export interface IMainProps {
    setBackground: React.Dispatch<React.SetStateAction<string>>;
}


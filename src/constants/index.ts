import { Artwork, Fashion, Portrait, Section, BackgroundDetails } from "./../../types"

export const backgrounds: BackgroundDetails[]  = [
    {
        color: "#000000",
        data: "https://www.transparenttextures.com/patterns/noisy.png"
    },
    {
        color: "#BB9C71",
        data: "https://www.transparenttextures.com/patterns/noisy.png"
    },
    {
        color: "#a77364",
        data: "https://www.transparenttextures.com/patterns/noisy.png"
    },
]

export const gallery: Section[] = [
    {
        idx: 0,
        title: "Fashion",
        background: backgrounds[0]
    },
    {
        idx: 1,
        title: "Artworks",
        background: backgrounds[1]
    },
    {
        idx: 2,
        title: "Portraits",
        background: backgrounds[2]
    }
]

export const artwork: Artwork[] = [
    {
        id: 1,
        img: "/src/assets/artwork/pexels-adrien-olichon-3137078.jpg"
    },
    {
        id: 2,
        img: "/src/assets/artwork/pexels-anni-roenkae-2832382.jpg"
    },
    {
        id: 3,
        img: "/src/assets/artwork/pexels-anni-roenkae-2983141.jpg"
    },
    {
        id: 4,
        img: "/src/assets/artwork/pexels-dids-2911540.jpg"
    }
]

export const fashion: Fashion[] = [
    {
        id: 1,
        img: "src/assets/fashion/pexels-cottonbro-studio-5582230.jpg"
    },
    {
        id: 2,
        img: "src/assets/fashion/pexels-cottonbro-studio-5582420.jpg"
    },
    {
        id: 3,
        img: "src/assets/fashion/pexels-cottonbro-studio-9861658.jpg"
    },
    {
        id: 4,
        img: "src/assets/fashion/pexels-harsh-kushwaha-1721558.jpg"
    }
]

export const portraits: Portrait[] = [
    {
        id: 1,
        img: "src/assets/portraits/pexels-breston-kenya-4244305.jpg"
    },
    {
        id: 2,
        img: "src/assets/portraits/pexels-ike-louie-natividad-2709385.jpg"
    },
    {
        id: 3,
        img: "src/assets/portraits/pexels-ike-louie-natividad-3310695.jpg"
    },
    {
        id: 4,
        img: "src/assets/portraits/pexels-pixabay-511313.jpg"
    }
]
import { Artwork, Fashion, Portrait, Nature, Wildlife, Wedding, Section, BackgroundDetails } from "./../../types"

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
        id: 1,
        title: "Fashion",
        background: backgrounds[0]
    },
    {
        id: 2,
        title: "Artworks",
        background: backgrounds[1]
    },
    {
        id: 3,
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
    // {
    //     id: 4,
    //     img: "/src/assets/artwork/pexels-dids-2911540.jpg"
    // }
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
    // {
    //     id: 4,
    //     img: "src/assets/fashion/pexels-harsh-kushwaha-1721558.jpg"
    // }
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
    // {
    //     id: 4,
    //     img: "src/assets/portraits/pexels-pixabay-511313.jpg"
    // }
]

export const nature: Nature[] = [
    {
        id: 1,
        img: "src/assets/nature/pexels-jonatas-tinoco-4318822.jpg"
    },
    {
        id: 2,
        img: "src/assets/nature/pexels-marlon-martinez-1450082.jpg"
    },
    {
        id: 3,
        img: "src/assets/nature/pexels-michael-block-3225517.jpg"
    }
]

export const wildlife: Wildlife[] = [
    {
        id: 1,
        img: "src/assets/wildlife/pexels-alex-andrews-2295744.jpg"
    },
    {
        id: 2,
        img: "src/assets/wildlife/pexels-pixabay-53125.jpg"
    },
    {
        id: 3,
        img: "src/assets/wildlife/pexels-richard-verbeek-572861.jpg"
    }
]

export const wedding: Wedding[] = [
    {
        id: 1,
        img: "src/assets/wedding/pexels-orione-conceição-3014764.jpg"
    },
    {
        id: 2,
        img: "src/assets/wedding/pexels-orione-conceição-3014934.jpg"
    },
    {
        id: 3,
        img: "src/assets/wedding/pexels-orione-conceição-3014937.jpg"
    }
]
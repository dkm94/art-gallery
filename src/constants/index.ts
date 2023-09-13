import { Section, BackgroundDetails, Gallery } from "./../../types"

export const backgrounds: BackgroundDetails[]  = [
    {
        color: "#9b685b",
        data: "https://www.transparenttextures.com/patterns/broken-noise.png"
    },
    {
        color: "#ad7d70",
        data: "https://www.transparenttextures.com/patterns/broken-noise.png"
    },
    {
        color: "#b58c82",
        data: "https://www.transparenttextures.com/patterns/broken-noise.png"
    },
    {
        color: "#c19d93",
        data: "https://www.transparenttextures.com/patterns/broken-noise.png"
    },
    {
        color: "#ceafa7",
        data: "https://www.transparenttextures.com/patterns/broken-noise.png"
    },
    {
        color: "#d8c2bc",
        data: "https://www.transparenttextures.com/patterns/broken-noise.png"
    },
]

export const sepia: Gallery[] = [
    {
        id: 1,
        img: "./src/assets/vitoria/pexels-vitória-santos-2842761.jpg"
    },
    {
        id: 2,
        img: "./src/assets/vitoria/pexels-vitória-santos-2863899.jpg"
    },
    {
        id: 3,
        img: "./src/assets/vitoria/pexels-vitória-santos-2922301.jpg"
    },
]

export const fashion: Gallery[] = [
    {
        id: 1,
        img: "./src/assets/esibatir/pexels-murat-esibatir-4355545.jpg"
    },
    {
        id: 2,
        img: "./src/assets/esibatir/pexels-murat-esibatir-4355628.jpg"
    },
    {
        id: 3,
        img: "./src/assets/esibatir/pexels-murat-esibatir-4355900.jpg"
    },
]

export const ebony: Gallery[] = [
    {
        id: 1,
        img: "./src/assets/kayode/pexels-abel-kayode-11592110.jpg"
    },
    {
        id: 2,
        img: "./src/assets/kayode/pexels-abel-kayode-11038878.jpg"
    },
    {
        id: 3,
        img: "./src/assets/kayode/pexels-abel-kayode-10850675.jpg"
    },
]

export const colorful: Gallery[] = [
    {
        id: 1,
        img: "./src/assets/kenya/pexels-breston-kenya-4244305.jpg"
    },
    {
        id: 2,
        img: "./src/assets/kenya/pexels-breston-kenya-4256284.jpg"
    },
    {
        id: 3,
        img: "./src/assets/kenya/pexels-breston-kenya-4256285.jpg"
    }
]

export const retro: Gallery[] = [
    {
        id: 1,
        img: "./src/assets/culha/pexels-ozan-çulha-17290634.jpg"
    },
    {
        id: 2,
        img: "./src/assets/culha/pexels-ozan-çulha-17203863.jpg"
    },
    {
        id: 3,
        img: "./src/assets/culha/pexels-ozan-çulha-17273661.jpg"
    }
]

export const fantasy: Gallery[] = [
    {
        id: 1,
        img: "./src/assets/mondi/pexels-niko-mondì-14086439.jpg"
    },
    {
        id: 2,
        img: "./src/assets/mondi/pexels-niko-mondì-14672499.jpg"
    },
    {
        id: 3,
        img: "./src/assets/mondi/pexels-niko-mondì-14672501.jpg"
    }
]

export const gallery: Section[] = [
    {
        id: 1,
        title: "Esibatir",
        background: backgrounds[0],
        gallery: fashion
    },
    {
        id: 2,
        title: "Vitória",
        background: backgrounds[1],
        gallery: sepia
    },
    {
        id: 3,
        title: "Kayode",
        background: backgrounds[2],
        gallery: ebony
    },
    {
        id: 4,
        title: "Çulha",
        background: backgrounds[3],
        gallery: retro
    },
    {
        id: 5,
        title: "Kenya",
        background: backgrounds[4],
        gallery: colorful
    },
    {
        id: 6,
        title: "MonDi",
        background: backgrounds[5],
        gallery: fantasy
    }
]
import "./Carousel.css";

import { useEffect, useState } from "react";

import { Image } from "..";
import { ICarouselProps } from "../../../types";
import { artwork, fashion, portraits } from "../../constants";

const Carousel = ({ selectedGalleryName, setRotate, rotate, setSwipe, swipe, fadeOut, setFadeOut }: ICarouselProps) => {

    const [array, setArray] = useState<any[] | string>([] || "No data available")

    useEffect(() => {
        if(selectedGalleryName === "Artworks") {
            setArray(artwork)
        } else if(selectedGalleryName === "Fashion") {
            setArray(fashion)
        } else if(selectedGalleryName === "Portraits") {
            setArray(portraits)
        } else {
            setArray("No data available")
        }
        setSwipe(false)
        setFadeOut(false)
    }, [selectedGalleryName, setFadeOut, setSwipe, rotate])


    return (
        <div className={`carousel ${fadeOut ? "fade-out" : ""}`}>
            {array?.map((item: any, index) => <Image key={index} src={item.img} alt="artwork" setRotate={setRotate} rotate={rotate} setSwipe={setSwipe} swipe={swipe} selectedGalleryName={selectedGalleryName} />)}
        </div>
    )
}

export default Carousel
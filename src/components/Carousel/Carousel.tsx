import "./Carousel.css";

import { useEffect, useState, useMemo } from "react";

import { Image } from "..";
import { Gallery, ICarouselProps } from "../../../types";
import { artwork, fashion, portraits, wildlife, nature, wedding } from "../../constants";

const Carousel = ({ 
    selectedGalleryName, 
    setRotate, 
    rotate, 
    setSwipe, 
    swipe, 
    fadeOut, 
    setFadeOut, 
    moveToBack, 
    setMoveToBack,
    array,
    setArray,
}: ICarouselProps) => {

    const arrays = useMemo(() => [fashion, artwork, portraits, wildlife, nature, wedding], []);
    
    const [errorMessage, setErrorMessage] = useState<string>("");

    if(!fashion || !wildlife){
        setErrorMessage("No data available");
    }

    useEffect(() => {
        const getCovers = arrays.map((array: any[]) => (array.length > 0 ? array[0] : null)).reverse();
        setArray(getCovers)
    }, [arrays, setArray])

    useEffect(() => {
        setSwipe(false)
        setFadeOut(false)
    }, [selectedGalleryName, setFadeOut, setSwipe, rotate, arrays, setArray])

    return (
        <div className={`carousel ${fadeOut ? "fade-out" : ""}`}>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            {array?.map((item: Gallery, index) => <Image index={index} src={item.img} alt="gallery" setRotate={setRotate} rotate={rotate} setSwipe={setSwipe} swipe={swipe} selectedGalleryName={selectedGalleryName} moveToBack={moveToBack} setMoveToBack={setMoveToBack} />)}
        </div>
    )
}

export default Carousel
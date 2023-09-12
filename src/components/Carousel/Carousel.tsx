import "./Carousel.css";

import { useEffect, useState, useMemo } from "react";

import { Image } from "..";
import { FormattedGallery, Gallery, ICarouselProps, Section } from "../../../types";
import { artwork, fashion, portraits, wildlife, nature, wedding } from "../../constants";

const Carousel = ({ 
    gallery,
    selectedGalleryName, 
    setRotate, 
    rotate, 
    setSwipe, 
    swipe, 
    fadeOut, 
    setFadeOut, 
    array,
    setArray,
    showViewBtn,
    setShowViewBtn,
    showView,
    handleChangeRotation,
    setAnimation,
    animation
}: ICarouselProps) => {

    const arrays = useMemo(() => [fashion, artwork, portraits, wildlife, nature, wedding], []);
    
    const [errorMessage, setErrorMessage] = useState<string>("");

    if(!fashion || !wildlife || !artwork || !portraits || !nature || !wedding){
        setErrorMessage("No data available");
    }
    
    useEffect(() => {
        const formattedGallery = gallery.map((item: Section) => {
            return {
                id: item.id,
                values: item.gallery
            }})
        const getCoversWithId: Gallery[] = formattedGallery.map((array: FormattedGallery) => {
            return {
                id: array.id,
                img: array.values.length > 0 ? array.values[0].img : null
            }
        }).reverse();
        setArray(getCoversWithId)
    }, [gallery, setArray])


    useEffect(() => {
        const timer = setTimeout(() => {
            setSwipe(false)
        }, 500);
        setFadeOut(false)
        return () => {
            clearTimeout(timer)
        }
    }, [selectedGalleryName, setFadeOut, setSwipe, rotate, arrays, setArray])

    return (
        <div className={`carousel ${fadeOut ? "fade-out" : ""} ${animation === "fixcards" ? "zoom-in" : animation === "zoom-out" ? "zoom-out" : ""}`}>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            {array?.map((item: Gallery, index) => (
                <Image 
                    index={index}
                    key={item.id}
                    galleryId={item.id}
                    src={item.img} 
                    setRotate={setRotate} 
                    rotate={rotate} 
                    swipe={swipe} 
                    showViewBtn={showViewBtn}
                    setShowViewBtn={setShowViewBtn}
                    showView={showView}
                    handleChangeRotation={handleChangeRotation}
                    setAnimation={setAnimation}
                    animation={animation}
                    />))}
                </div>
            )
}

export default Carousel
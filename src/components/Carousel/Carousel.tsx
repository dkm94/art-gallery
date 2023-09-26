import "./Carousel.css";

import { useEffect } from "react";

import { Image } from "..";
import { FormattedGallery, Gallery, ICarouselProps, Section } from "../../../types";

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
    }, [selectedGalleryName, setFadeOut, setSwipe, rotate, setArray])

    return (
        <div className={`carousel ${fadeOut ? "fade-out" : ""} ${animation === "fixcards" ? "zoom-in" : animation === "zoom-out" ? "zoom-out" : ""}`}>
            {array && array.map((item: Gallery, index) => (
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
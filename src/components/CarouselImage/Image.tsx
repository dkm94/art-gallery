import "./Image.css"

import { useEffect, useState } from "react"

import { ViewBtn } from "..";
import { ICarouselImageProps } from "../../../types";

const Image = ({ 
  index, 
  src, 
  alt, 
  setRotate, 
  rotate, 
  setSwipe, 
  swipe, 
  selectedGalleryName, 
  moveToBack, 
  setMoveToBack,
  showViewBtn,
  setShowViewBtn,
  activeSlideIndex
}: ICarouselImageProps) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      setRotate(true)
    }, 100);
    return () => {
      clearTimeout(timer)
    }
  }, [rotate, selectedGalleryName, setRotate, setSwipe])

  return (
    <>
      <img 
      key={index} 
      src={src} 
      alt={alt} 
      className={`img ${rotate ? "rotate" : ""} ${swipe ? "swipe-right" : ""} ${moveToBack ? "move" : ""}`}
      style={index === 0 || index === 1 ? { display: "none" } : { display: "block" }}
      onMouseEnter={() => setShowViewBtn(true)}
      onMouseLeave={() => setShowViewBtn(false)}
      />
      <ViewBtn showViewBtn={showViewBtn} index={index}  />
    </>
  )
}

export default Image
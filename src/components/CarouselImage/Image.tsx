import "./Image.css"

import { useEffect } from "react"

import { ICarouselImageProps } from "../../../types"

const Image = ({ key, src, alt, setRotate, rotate, setSwipe, swipe, selectedGalleryName }: ICarouselImageProps) => {

  useEffect(() => {
    console.log("useEffect", rotate);
  }, [rotate, selectedGalleryName, setSwipe])
  

  return (
    <img key={key} src={src} alt={alt} onLoad={() => setRotate(true)} className={`img ${rotate ? "rotate" : ""} ${swipe ? "swipe-right" : ""}`} />
  )
}

export default Image
import "./Image.css"

import { useEffect } from "react"

import { ICarouselImageProps } from "../../../types"

const Image = ({ key, src, alt, setRotate, rotate, setSwipe, swipe, selectedGalleryName }: ICarouselImageProps) => {

  useEffect(() => {
  }, [selectedGalleryName, setSwipe])
  

  return (
    <img key={key} src={src} alt={alt} onLoad={() => setRotate(true)} className={`img ${rotate ? "rotate" : ""} ${swipe ? "swipe-right" : ""}`} />
  )
}

export default Image
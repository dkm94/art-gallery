import "./Image.css"

import { useEffect } from "react"

import { ICarouselImageProps } from "../../../types"

const Image = ({ key, src, alt, setRotate, rotate, setSwipe, swipe, selectedGalleryName }: ICarouselImageProps) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      setRotate(true)
    }, 100);
    return () => {
      clearTimeout(timer)
    }
  }, [rotate, selectedGalleryName, setRotate, setSwipe])
  

  return (
    <img key={key} src={src} alt={alt} className={`img ${rotate ? "rotate" : ""} ${swipe ? "swipe-right" : ""}`} />
  )
}

export default Image
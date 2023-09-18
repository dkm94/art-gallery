import "./Carousel.css";

import { useEffect, useState } from "react";

import { ICarouselTitleProps } from '../../../types';
import { gallery } from "../../constants";


const CarouselTitle = ({ slideTransition, animation, height }: ICarouselTitleProps) => {
  
  const heightX: number = document?.getElementsByClassName("title")[0]?.offsetHeight;
  const [slideHeight, setSlideHeight] = useState<number>(heightX);
  
  useEffect(() => {
    const title = document?.getElementsByClassName("title")[0];
    const observer: ResizeObserver = new ResizeObserver((entries) => {
      const divElement: ResizeObserverEntry = entries[0];
      const height: number = divElement.contentRect.height;
      setSlideHeight(height);
    })
    title && observer.observe(title);
  }, [])

  return (
    
    <div className="title-container" style={{ height: "fit-content" }}>
    <div 
    id="page-title" 
    className={` ${animation === "fixcards" ? "slide-to-top" : ""}`}
    style={{ height: slideHeight ? slideHeight : "" }}
    >{gallery?.map((item, index) => 
    { 
      return (
      <div 
        key={index} 
        className={`title ${animation === "fixcards" ? "title-opacity" : ""}`} 
        style={slideTransition ? {transform: slideTransition, transition: "transform .5s ease-in-out"} : {} }>{item.title}</div>
      )})}</div>
  </div>  
  )
}

export default CarouselTitle
import "./Carousel.css";

import { MutableRefObject, useRef } from "react";
import { useResizeObserver } from "../../hooks";

import { ICarouselTitleProps } from '../../../types';

const CarouselTitle = ({ slideTransition, animation, height, setTitleHeight, slide, gallery }: ICarouselTitleProps) => {

  // Get the title's height
  const titleHeightRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);
  useResizeObserver(titleHeightRef, (height) => {
    setTitleHeight(height);
  });

  const calculateTransitionHeight = (): string => {
    // this function allows to recalculate the height of the title when the #page-title div is resized
    return `translateY(-${height * slide}px)`
  }

  return (
    
    <div 
      className={`title-container`} 
      style={{ 
        height, 
        top: animation === "fixcards" ? "10dvh" : "0px", 
        transform: animation === "fixcards" ? `translateY(-95dvh)` : `translateY(-${height}px)`, 
        transition: "transform .5s ease-in-out" }}
    >
      <div 
        id="page-title"
        style={{ height }}
      >{gallery?.map((item, index) => 
        { 
          return (
          <div 
            ref={titleHeightRef}
            key={index} 
            className={`title ${animation === "fixcards" ? "title-opacity" : ""}`} 
            style={slideTransition ? {transform: calculateTransitionHeight(), transition: "transform .5s ease-in-out"} : {} }>
              {item.title}
            </div>
          )
        })}
      </div>
    </div>  
  )
}

export default CarouselTitle
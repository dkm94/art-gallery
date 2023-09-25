import "./Carousel.css";

import { MutableRefObject, useRef } from "react";
import { useResizeObserver } from "../../hooks";

import { ICarouselTitleProps } from '../../../types';
import { gallery } from "../../constants";

const CarouselTitle = ({ slideTransition, animation, height, setTitleHeight, slide }: ICarouselTitleProps) => {
  // TODO fix initial title animation 

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
        top: animation === "fixcards" ? "10vh" : "0px", 
        backgroundColor: "green", 
        transform: animation === "fixcards" ? `translateY(-95vh)` : `translateY(-${height}px)`, 
        transition: "transform .5s ease-in-out" }}
    >
      <div 
        id="page-title"
        style={{ height}}
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
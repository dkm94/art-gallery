import "./Carousel.css";

import { useEffect } from "react";

import { ICarouselTitleProps } from '../../../types';
import { gallery } from "../../constants";

const CarouselTitle = ({ slideTransition, animation, height, setTitleHeight, slide }: ICarouselTitleProps) => {
console.log("🚀 ~ file: Carousel.tsx:9 ~ CarouselTitle ~ animation:", animation)

  const calculateTransitionHeight = (): string => {
    // this function allows to recalculate the height of the title when the #page-title div is resized
    return `translateY(-${height * slide}px)`
  }

  // const recalculateSlideToTop = (): string => {
  //   // this function allows to recalculate the top value of the title to improve responsive design animations
  //   // return animation === "fixcards" ? `translateY(-${height * 3.1}px)` : "translateY(0)"
  //   return animation === "fixcards" ? `translateY(-300%)` : "translateY(0)"
  // }
  
  useEffect(() => {
    const title = document?.getElementsByClassName("title")[0];

    // ResizeObserver is needed to make sure animations are still smooth when the title is resized; 
    // dynamic height values are used to manage animations
    const observer: ResizeObserver = new ResizeObserver((entries) => {
      const divElement: ResizeObserverEntry = entries[0];
      const height: number = divElement.contentRect.height;
      setTitleHeight(height);
    })
    title && observer.observe(title);
  }, [setTitleHeight])

  return (
    
    <div 
      className={`title-container ${typeof height !== "number" ? "slide-to-top" : ""}`} 
      style={{ height, top: `-${height}px` }}
    >
      <div 
        id="page-title" 
        className={` ${animation === "fixcards" ? "slide-to-top" : ""}`}
        style={{ height}}
      >{gallery?.map((item, index) => 
        { 
          return (
          <div 
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
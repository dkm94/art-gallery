import "./Carousel.css";

import { useEffect, useState } from "react";

import { ICarouselTitleProps } from '../../../types';
import { gallery } from "../../constants";

const CarouselTitle = ({ slideTransition, animation, height }: ICarouselTitleProps) => {
  const [titleHeight, setTitleHeight] = useState<number>(0);
  useEffect(() => {
    const getHeight: number = document?.getElementsByClassName("title")[0]?.offsetHeight;
    setTitleHeight(getHeight)
    console.log("get height", getHeight);
    
    return () => {
      // second
    }
  }, [])
  

  return (
  <div className="title-container">
    <div 
    id="page-title" 
    className={` ${animation === "fixcards" ? "slide-to-top" : ""}`}
    style={{ height: titleHeight }}
    >{gallery?.map((item, index) => <span key={index} className={`title ${animation === "fixcards" ? "title-opacity" : ""}`} style={slideTransition ? {transform: slideTransition, transition: "transform .5s ease-in-out"} : {} }>{item.title}</span>)}</div>
  </div>  
  )
}

export default CarouselTitle
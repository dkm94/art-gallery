import "./Carousel.css";

import { ICarouselTitleProps } from '../../../types';
import { gallery } from "../../constants";

const CarouselTitle = ({ slideTransition, animation, height }: ICarouselTitleProps) => {

  return (
  <div className="title-container">
    <div 
    id="page-title" 
    className={` ${animation === "fixcards" ? "slide-to-top" : ""}`}
    style={{ height }}
    >{gallery?.map((item, index) => <span key={index} className={`title ${animation === "fixcards" ? "title-opacity" : ""}`} style={slideTransition ? {transform: slideTransition, transition: "transform .5s ease-in-out"} : {} }>{item.title}</span>)}</div>
  </div>  
  )
}

export default CarouselTitle
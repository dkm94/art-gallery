import "./Carousel.css";

import { ICarouselTitleProps } from '../../../types';
import { gallery } from "../../constants";

const CarouselTitle = ({ slideTransition, animation }: ICarouselTitleProps) => {

  return (
    <div id="page-title" className={` ${animation === "fixcards" ? "slide-to-top" : ""}`}>{gallery?.map((item, index) => <span id="title" key={index} className={`${animation === "fixcards" ? "title-opacity" : ""}`} style={slideTransition ? {transform: slideTransition, transition: "transform .5s ease-in-out"} : {} }>{item.title}</span>)}</div>
  )
}

export default CarouselTitle
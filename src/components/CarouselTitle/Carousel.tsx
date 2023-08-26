import "./Carousel.css";

import { ICarouselTitleProps } from '../../../types';
import { gallery } from "../../constants";

const CarouselTitle = ({ slideTransition }: ICarouselTitleProps) => {

  return (
    <div className="page-title">{gallery?.map((item, index) => <span key={index} style={slideTransition ? {transform: slideTransition, transition: "transform .5s ease-in-out"} : {} }>{item.title}</span>)}</div>
  )
}

export default CarouselTitle
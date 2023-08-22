import "./Carousel.css";

import { Image } from "..";
import { ICarouselProps } from "../../../types";
import { artwork, fashion } from "../../constants";

const Carousel = ({ gallery, activeClass }: ICarouselProps) => {

    const RenderGallery = () => {
        switch (gallery) {
            case 'artwork':
                return artwork.map((item, index) => <Image key={index} src={item.img} alt="artwork" activeClass={activeClass} />)
            case 'fashion':
                return fashion.map((item, index) => <Image key={index} src={item.img} alt="fashion" activeClass={activeClass} />)
            default:
                return null
        }
    }

  return (
    <div className="carousel">
        <RenderGallery />
    </div>
  )
}

export default Carousel
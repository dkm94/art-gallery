import "./Carousel.css";

import { Image } from "..";
import { ICarouselProps } from "../../../types";
import { artwork, fashion, portraits } from "../../constants";

const Carousel = ({ selectedGalleryName, activeClass }: ICarouselProps) => {

    const RenderGallery = () => {
        switch (selectedGalleryName) {
            case 'Artworks':
                return artwork.map((item, index) => <Image key={index} src={item.img} alt="artwork" activeClass={activeClass} />)
            case 'Fashion':
                return fashion.map((item, index) => <Image key={index} src={item.img} alt="fashion" activeClass={activeClass} />)
            case "Portraits":
                return portraits.map((item, index) => <Image key={index} src={item.img} alt="portraits" activeClass={activeClass} />)
            default:
                return "No data available"
        }
    }

    return (
        <div className="carousel">
            <RenderGallery />
        </div>
    )
}

export default Carousel
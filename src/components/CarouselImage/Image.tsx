import { ICarouselImageProps } from "../../../types"
import "./Image.css"

const Image = ({ key, src, alt, activeClass }: ICarouselImageProps) => {
  return (
    <img key={key} src={src} alt={alt} className={`img ${activeClass}`} />
  )
}

export default Image
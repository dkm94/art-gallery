import { INextBtnProps } from "../../../types"

const NextBtn = ({ setSlideNext, slideNext, selectedGallery, galleryLength, nextOne }: INextBtnProps ) => {

  return (
    <div className="next-wrapper" onMouseOver={() => setSlideNext(true)} onMouseOut={() => setSlideNext(false)} >
        <button 
        className={`next-btn ${slideNext ? "next-btn-animation" : ""} ${selectedGallery === galleryLength ? "disable-btn" : ""}`} 
        onClick={nextOne} 
        disabled={selectedGallery === galleryLength}>Next</button>
        <div className={`next-line ${slideNext ? "next-line-animation" : ""}`}/>
    </div>
  )
}

export default NextBtn
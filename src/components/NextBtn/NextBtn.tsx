import { useEffect } from "react"
import { INextBtnProps } from "../../../types"

const NextBtn = ({ 
  setSlideNext, 
  slideNext, 
  selectedGallery, 
  galleryLength, 
  nextOne, 
  disableNext, 
  setDisableNext 
}: INextBtnProps ) => {

  useEffect(() => {
    if(selectedGallery === galleryLength){
      setDisableNext(true);
    } else {
      setDisableNext(false);
    }
  }, [galleryLength, selectedGallery, setDisableNext])

  return (
    <div className="next-wrapper" onMouseOver={() => setSlideNext(true)} onMouseOut={() => setSlideNext(false)} >
        <button 
        className={`next-btn ${slideNext ? "next-btn-animation" : ""} ${disableNext ? "disable-btn" : ""}`} 
        onClick={nextOne} 
        disabled={disableNext}>Next</button>
        <div className={`next-line ${slideNext ? "next-line-animation" : ""}`}/>
    </div>
  )
}

export default NextBtn
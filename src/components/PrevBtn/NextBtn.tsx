import { INextBtnProps } from "../../../types"

const NextBtn = ({ setSlideNext, slideNext, selectedGallery, galleryLength, nextOne }: INextBtnProps ) => {
  const handleMouseOver: React.MouseEventHandler<HTMLButtonElement> = () => {
    if(typeof setSlideNext !== "undefined"){
      setSlideNext(true)
    }
    return;
  }
  const handleMouseOut: React.MouseEventHandler<HTMLButtonElement> = () => {
    if(typeof setSlideNext !== "undefined"){
      setSlideNext(false)
    }
  }

  return (
    <div className="next-wrapper" onMouseOver={() => handleMouseOver} onMouseOut={() => handleMouseOut} >
        <button 
        className={`next-btn ${slideNext ? "next-btn-animation" : ""} ${selectedGallery === galleryLength ? "disable-btn" : ""}`} 
        onClick={nextOne} 
        disabled={selectedGallery === galleryLength}>Next</button>
        <div className={`next-line ${slideNext ? "next-line-animation" : ""}`}/>
    </div>
  )
}

export default NextBtn
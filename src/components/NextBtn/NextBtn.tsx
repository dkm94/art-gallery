import { INextBtnProps } from "../../../types"

const NextBtn = ({ setSlidePrev, slidePrev, selectedGallery, prevOne }: INextBtnProps ) => {
  return (
    <div className="prev-wrapper" onMouseOver={() => setSlidePrev(true)} onMouseOut={() => setSlidePrev(false)} >
        <button 
        className={`prev-btn ${slidePrev ? "prev-btn-animation" : ""} ${selectedGallery === 1 ? "disable-btn" : ""}`} 
        onClick={prevOne} 
        disabled={selectedGallery < 2}
        >Prev</button>
        <div className={`prev-line ${slidePrev ? "prev-line-animation" : ""}`}/>
    </div>
  )
}

export default NextBtn
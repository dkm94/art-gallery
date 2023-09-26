import { useEffect } from "react";

import { IPrevBtnProps } from "../../../types"

const PrevBtn = ({ 
  mode,
  text,
  setSlidePrev, 
  slidePrev, 
  selectedGallery, 
  prevOne, 
  getBack, 
  disablePrev, 
  setDisablePrev 
}: IPrevBtnProps ) => {

  const handleMouseOver: React.MouseEventHandler<HTMLDivElement> = ():void => setSlidePrev && setSlidePrev(true);

  const handleMouseOut: React.MouseEventHandler<HTMLDivElement> = ():void => setSlidePrev && setSlidePrev(false);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = ():void => {
    prevOne ? prevOne() : getBack && getBack();
  }

  useEffect(() => {
    if(setDisablePrev){
      if(selectedGallery && selectedGallery < 2){
        setDisablePrev(true);
      } else {
        setDisablePrev(false);
      }
    }
  }, [selectedGallery, setDisablePrev])

  return (
    <div 
      className="prev-wrapper" 
      onMouseOver={handleMouseOver} 
      onMouseOut={handleMouseOut} 
      style={{ position: mode === "selected" ? "absolute" : "unset", top: mode === "selected" ? "20%" : ""} } 
    >
      <button
        className={`prev-btn ${slidePrev ? "prev-btn-animation" : ""}${disablePrev ? "disable-btn" : ""}`} 
        onClick={handleClick} 
        disabled={disablePrev}
      >{text}</button>
      <div className={`prev-line ${slidePrev ? "prev-line-animation" : ""}`}/>
    </div>
  )
}

export default PrevBtn
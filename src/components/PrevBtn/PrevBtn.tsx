import "./PrevBtn.css";

import { CSSProperties, useEffect, useState } from "react";

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

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = ():void => {
    prevOne ? prevOne() : getBack && getBack();
    if(text === "Back") {
      setIsHovered(false);
    }
  }

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setSlidePrev && setSlidePrev(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setSlidePrev && setSlidePrev(false);
  };

  const containerStyle: CSSProperties = {
    position: mode === "selected" ? "absolute" : "unset", 
    top: mode === "selected" ? "25%" : ""
  }

  const lineStyle: CSSProperties = {
    height: '1px',
    width: '35px',
    transition: 'transform 0.3s ease',
    transform: isHovered ? 'translateX(45px)' : 'translateX(0)',
    backgroundColor: '#f2ede6',
  };

  const textStyle: CSSProperties = {
    flex: 1,
    textAlign: 'center',
    transition: 'transform 0.3s ease',
    transform: isHovered ? 'translateX(-45px)' : 'translateX(0)',
  };

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
    style={containerStyle} 
    >
      <button
      className={`prev-btn carousel-btn-ctn ${disablePrev ? "disable-btn" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick} 
      disabled={disablePrev}
      >
        <div className="line" style={lineStyle}></div>
        <div className="button-text" style={textStyle}>{text}</div>
      </button>
    </div>
  )
}

export default PrevBtn
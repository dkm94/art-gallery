import "./NextBtn.css";

import { useEffect, CSSProperties, useState } from "react";

import { INextBtnProps } from "../../../types";

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

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setSlideNext(true)
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setSlideNext(false)
  };

  const lineStyle: CSSProperties = {
    height: '1px',
    width: '35px',
    transition: 'transform 0.3s ease',
    transform: isHovered ? 'translateX(-45px)' : 'translateX(0)',
    backgroundColor: '#f2ede6',
  };

  const textStyle: CSSProperties = {
    flex: 1,
    textAlign: 'center',
    transition: 'transform 0.3s ease',
    transform: isHovered ? 'translateX(45px)' : 'translateX(0)',
  };

  return (
    <div className="next-wrapper">
       <button 
        className={`next-btn carousel-btn-ctn ${slideNext ? "next-btn-animation" : ""} ${disableNext ? "disable-btn" : ""}`} 
        onClick={nextOne} 
        disabled={disableNext}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
          <div className="button-text" style={textStyle}>Next</div>
          <div className="line" style={lineStyle}></div>
        </button>
    </div>
  )
}

export default NextBtn
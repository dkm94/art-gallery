import "./ViewBtn.css";

import { useEffect, useState } from "react";

import { IViewBtnProps } from "../../../types";

const ViewBtn = ({ 
  showViewBtn, 
  showView, 
  galleryId, 
  setShowViewBtn, 
  rotationDegree, 
  setAnimation, 
  animation,
  isHovered,
  slideHeight,
}: IViewBtnProps) => {
  console.log("🚀 ~ slideHeight:", slideHeight)

  const rotateBtn = (deg: string): string => {
    if (deg === "rotate(-5deg)" && animation === "") {
      return `rotate(5deg)`;
    } else if (deg === "rotate(5deg)" && animation === ""){
      return `rotate(-5deg)`;
    } else {
      return `rotate(0deg)`;
    }
  }
  
  const buttonPath = (galleryId: number) => {
    if(galleryId % 2 === 0) {
      return "translateX(0px)"
    } else {
      return "translateX(-15px)"
    }
  }

  const [hoveredStyle, setHoveredStyle] = useState({
    transform: `${rotateBtn(rotationDegree)} translateY(0) ${buttonPath(galleryId)}`,
    transition: "transform 0.3s ease-in-out",
  });

  const handleBtn = (galleryId: number) => {
    showView(galleryId);
    setAnimation("fixcards")
    setShowViewBtn(false)
  }

  useEffect(() => {
    setHoveredStyle({
      transform: isHovered ? `${rotateBtn(rotationDegree)} translateY(-250%) ${buttonPath(galleryId)}`  : `${rotateBtn(rotationDegree)} translateY(0) ${buttonPath(galleryId)}`,
      transition: "transform 0.3s ease-in-out",
    });
  }, [isHovered]);
  
  return (
      <div 
        className={`view-btn-container`}
        onClick={() => handleBtn(galleryId)}
        style={hoveredStyle}  
      >
      <div className="view-btn" >
      View
      </div>
    </div>
  )
}

export default ViewBtn
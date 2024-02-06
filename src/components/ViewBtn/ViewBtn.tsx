import "./ViewBtn.css";

// import { useEffect, useState } from "react";

import { IViewBtnProps } from "../../../types";

const ViewBtn = ({ 
  // showViewBtn, 
  showView, 
  galleryId, 
  setShowViewBtn, 
  rotationDegree, 
  setAnimation, 
  animation,
  isHovered
}: IViewBtnProps) => {
  
  const rotateBtn = (deg: string): string => {
    if (deg === "rotate(-5deg)" && animation === "") {
      return `rotate(5deg)`;
    } else if (deg === "rotate(5deg)" && animation === ""){
      return `rotate(-5deg)`;
    } else {
      return `rotate(0deg)`;
    }
  }
  
  // const buttonPath = (galleryId: number) => {
  //   if(galleryId % 2 === 0) {
  //     return "translateX(-50%)"
  //   } else {
  //     return "translateX(-50%)"
  //   }
  // }

  // const [hoveredStyle, setHoveredStyle] = useState({
  //   transform: `${rotateBtn(rotationDegree)} translate(-50%, 100%)`,
  //   transition: "transform 0.3s ease-in-out",
  //   bottom: "40%"
  // });

  const handleBtn = (galleryId: number) => {
    showView(galleryId);
    setAnimation("fixcards")
    setShowViewBtn(false)
  }

  // useEffect(() => {
  //   setHoveredStyle({
  //     // transform: isHovered ? `${rotateBtn(rotationDegree)} ${buttonPath(galleryId)}`  : `${rotateBtn(rotationDegree)} ${buttonPath(galleryId)}`,
  //     transform: isHovered ? `${rotateBtn(rotationDegree)} ${buttonPath(galleryId)}`  : `${rotateBtn(rotationDegree)} ${buttonPath(galleryId)}`,
  //     transition: "transform 0.3s ease-in-out",
  //     bottom: "40%"
  //   });
  // }, [isHovered]);
  
  return (
    <div className="view-btn-wrapper">
      <div 
        className={`view-btn-container ${isHovered ? "fadeIn" : "fadeOut"}`}
        onClick={() => handleBtn(galleryId)}
        // style={hoveredStyle} 
        style={{
            transform: `translate(-50%, -50%) ${isHovered ? `${rotateBtn(rotationDegree)}`  : `${rotateBtn(rotationDegree)}`}`,
        }} 
      >
        <div className="view-btn" >
        View
        </div>
      </div>
    </div>
  )
}

export default ViewBtn
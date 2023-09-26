import "./ViewBtn.css";

import { useEffect } from "react";

import { IViewBtnProps } from "../../../types";

const ViewBtn = ({ 
  showViewBtn, 
  showView, 
  galleryId, 
  setShowViewBtn, 
  rotationDegree, 
  setAnimation, 
  animation 
}: IViewBtnProps) => {

  // console.count("ViewBtn");
  
  const handleBtn = (galleryId: number) => {
    showView(galleryId);
    setAnimation("fixcards")
    setShowViewBtn(false)
  }

  useEffect(() => {
  }, [showViewBtn])

  const rotateBtn = (): string => {
    if (rotationDegree === "rotate(-5deg)" && animation === "") {
      return `rotate(5deg)`;
    } else if (rotationDegree === "rotate(5deg)" && animation === ""){
      return `rotate(-5deg)`;
    } else {
      return `rotate(0deg)`;
    }
  }
  
  return (
      <div 
        className={`view-btn-container`}
        onClick={() => handleBtn(galleryId)}
        style={{ transform: rotateBtn(), transition: "transform 1s ease-in" }}
      >
      <div className="view-btn" >
      View
      </div>
    </div>
  )
}

export default ViewBtn
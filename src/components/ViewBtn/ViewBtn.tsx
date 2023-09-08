import { useEffect } from "react";

import { IViewBtnProps } from "../../../types";
import "./ViewBtn.css";

const ViewBtn = ({ showViewBtn, index, showView, galleryId, setShowViewBtn, rotationDegree, setAnimation, animation }: IViewBtnProps) => {
  
  const handleBtn = (galleryId: number) => {
    showView(galleryId);
    setAnimation("fixcards")
  }

  useEffect(() => {
    console.log(showViewBtn);
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
        className={`view-btn-container ${showViewBtn ? "slide-in" : ""}`}
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
import { useEffect } from "react";

import { IViewBtnProps } from "../../../types";
import "./ViewBtn.css";

const ViewBtn = ({ showViewBtn, index, showView, galleryId, setShowViewBtn, rotationDegree, setAnimation }: IViewBtnProps) => {
  
  const handleBtn = (galleryId: number) => {
    showView(galleryId);
    setAnimation("fixcards")
  }

  useEffect(() => {
    console.log(showViewBtn);
  }, [showViewBtn])
  
  return (
      <div 
      className={`view-btn-container ${showViewBtn ? "slide-in" : ""}`}
      onClick={() => handleBtn(galleryId)}
      style={{ transform: rotationDegree === -5 ? `rotate(5deg)` : `rotate(-5deg)` }}
      >
      <div className="view-btn" >
      View
      </div>
    </div>
  )
}

export default ViewBtn
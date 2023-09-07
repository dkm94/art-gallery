import { useEffect } from "react";

import { IViewBtnProps } from "../../../types";
import "./ViewBtn.css";

const ViewBtn = ({ showViewBtn, index, showView, galleryId, setShowViewBtn, rotationDegree }: IViewBtnProps) => {
  
  const handleBtn = (galleryId: number) => {
    showView(galleryId);
  }

  useEffect(() => {
    console.log(showViewBtn);
  }, [showViewBtn])
  
  return (
      <div 
      className={`view-btn-container ${showViewBtn ? "slide-in" : ""}`}
      onClick={() => handleBtn(galleryId)}
      style={{ transform: rotationDegree === -5 ? `rotate(5deg) translate(-50%, -50%)` : `rotate(-5deg) translate(-50%, -50%)` }}
      >
      <div className="view-btn" >
      View
      </div>
    </div>
  )
}

export default ViewBtn
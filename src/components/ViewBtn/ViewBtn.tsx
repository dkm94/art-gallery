import { useEffect } from "react";

import { IViewBtnProps } from "../../../types";
import "./ViewBtn.css";

const ViewBtn = ({ showViewBtn, index, showView, galleryId, setShowViewBtn }: IViewBtnProps) => {
  
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
        >
        <div className="view-btn" >
        View
        </div>
    </div>
  )
}

export default ViewBtn
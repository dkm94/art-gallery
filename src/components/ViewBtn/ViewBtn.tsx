import { IViewBtnProps } from "../../../types";
import "./ViewBtn.css";

const ViewBtn = ({ showViewBtn, index, showView, galleryId }: IViewBtnProps) => {
  
  const handleBtn = (galleryId: number) => {
    showView(galleryId);
  }

  return (
    <div 
    className="view-btn" 
    style={{ display: showViewBtn && index === 5 ? "flex" : "none"}}
    onClick={() => handleBtn(galleryId)}
    >View</div>
  )
}

export default ViewBtn
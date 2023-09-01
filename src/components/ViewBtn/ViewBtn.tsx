import { IViewBtnProps } from "../../../types";
import "./ViewBtn.css";

const ViewBtn = ({ showViewBtn, index, showView, galleryId, setShowViewBtn }: IViewBtnProps) => {
  
  const handleBtn = (galleryId: number) => {
    showView(galleryId);
  }

  return (
    <div 
    className="view-btn" 
    onClick={() => handleBtn(galleryId)}
    >View</div>
  )
}

export default ViewBtn
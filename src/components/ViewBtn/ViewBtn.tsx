import { IViewBtnProps } from "../../../types";
import "./ViewBtn.css";

const ViewBtn = ({ showViewBtn, index, showView }: IViewBtnProps) => {
  
  const handleBtn = () => {
    showView(index);
  }

  return (
    <div 
    className="view-btn" 
    style={{ display: showViewBtn && index === 5 ? "flex" : "none"}}
    onClick={() => handleBtn()}
    >View</div>
  )
}

export default ViewBtn
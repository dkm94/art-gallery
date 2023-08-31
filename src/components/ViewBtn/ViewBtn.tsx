import { IViewBtnProps } from "../../../types";
import "./ViewBtn.css";

const ViewBtn = ({ showViewBtn, index }: IViewBtnProps) => {
  return (
    <div className="view-btn" style={{ display: showViewBtn && index === 5 ? "flex" : "none"}}>View</div>
  )
}

export default ViewBtn
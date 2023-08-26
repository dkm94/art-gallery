import { IProgressBarProps } from "../../../types";
import "./ProgressBar.css";

const ProgressBar = ({ slideLength, activePageTransition, activeSlideIndex }: IProgressBarProps) => {
    const array: number[] = [];
    
    for(let i = 1; i <= slideLength; i++){
        array.push(i);
    }

    const progressBarStyle:Record<string, string> = {
        backgroundSize: `${((activeSlideIndex + 1) / (slideLength)) * 100}% 100%`
      };

  return (
    <>
        <div className="active-page-container">
            <span className="active-page">
                {array.map((item, index) => {
                    return (
                        <span key={index}  style={activePageTransition ? {transform: activePageTransition, transition: "transform .5s ease-in-out"} : {} }>{`0${item}`}</span>
                    )
                })}
            </span>
        </div>
        <div className="progress-bar-container">
            <div className="progress-bar">
                
                <div className="progress" style={progressBarStyle}>
                    <span className="slider__label sr-only" />
                </div>
            </div>
        </div>
        <div className="page-count-wrapper">
            <span className="page-count">{`0${slideLength}`}</span>
        </div>
    </>
  )
}

export default ProgressBar
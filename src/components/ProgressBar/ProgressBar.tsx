import { forwardRef } from "react";
import { IProgressBarProps } from "../../../types";
import "./ProgressBar.css";

export type Ref = HTMLDivElement;

const ProgressBar = forwardRef<Ref, IProgressBarProps>(({
    device, 
    galleryLength, 
    activePageTransition, 
    activeSlideIndex,
    animation
}, ref) => {
    const array: number[] = [];
    
    for(let i = 1; i <= galleryLength; i++){
        array.push(i);
    }

    const progressBarStyle:Record<string, string> = {
        backgroundSize: `${((activeSlideIndex + 1) / (galleryLength)) * 100}% 100%`
      };

  return (
    <div className={`${device === "desktop" ? "progress-container" : "progress-container-mobile"} ${animation === "fixcards" ? "fadeout" : "" }`}>
        <div className={`active-page-container`}>
            <div className="active-page">
                {array.map((item, index) => {
                    return (
                        <div ref={ref} className="slide-nb" key={index}  style={activePageTransition ? {transform: activePageTransition, transition: "transform .5s ease-in-out"} : {} }>{`0${item}`}</div>
                    )
                })}
            </div>
        </div>
        <div className="progress-bar-container">
            <div className="progress-bar">
                
                <div className="progress" style={progressBarStyle}>
                    <span className="slider__label sr-only" />
                </div>
            </div>
        </div>
        <div className="page-count-wrapper">
            <span className="page-count">{`0${galleryLength}`}</span>
        </div>
    </div>
  )
})

export default ProgressBar
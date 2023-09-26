import { MutableRefObject, useRef } from "react";
import { useResizeObserver } from "../../hooks";

import { IProgressBarProps } from "../../../types";
import "./ProgressBar.css";

export type Ref = HTMLDivElement;

const ProgressBar = ({
    device, 
    galleryLength, 
    activePageTransition, 
    activeSlideIndex,
    animation,
    height,
    setActivePageTransitionHeight
}: IProgressBarProps) => {
    const array: number[] = [];

    const elementRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);
    useResizeObserver(elementRef, (height) => {
        setActivePageTransitionHeight(height);
    });
    
    for(let i = 1; i <= galleryLength; i++){
        array.push(i);
    }

    const progressBarStyle:Record<string, string> = {
        backgroundSize: `${((activeSlideIndex + 1) / (galleryLength)) * 100}% 100%`
      };

  return (
    <div className={`${device === "desktop" ? "progress-container" : "progress-container-mobile"} ${animation === "fixcards" ? "fadeout" : "" }`}>
        <div className={`active-page-container`}>
            <div className="active-page" style={{ height }}>
                {array.map((item, index) => {
                    return (
                        <div ref={elementRef} className="slide-nb" key={index}  style={activePageTransition ? {transform: activePageTransition, transition: "transform .5s ease-in-out"} : {} }>{`0${item}`}</div>
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
};

export default ProgressBar
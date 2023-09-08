import "./Image.css"

import { useEffect, useState } from "react"

import { ViewBtn } from "..";
import { ICarouselImageProps } from "../../../types";

const Image = ({ 
  index, 
  galleryId,
  src, 
  setRotate, 
  rotate, 
  setSwipe, 
  swipe, 
  selectedGalleryName, 
  showViewBtn,
  setShowViewBtn,
  activeSlideIndex,
  showView,
  handleChangeRotation,
  setAnimation,
  animation
}: ICarouselImageProps) => {
  
  const [coverId, setCoverId] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<number>(0);
  
  const imageList = document.querySelectorAll(".img");
  const firstCover = imageList[imageList.length - 1];
  const firstImageId = firstCover?.getAttribute("data-id");

  useEffect(() => {
    setCoverId(Number(firstImageId)); // Id 1ère image de couverture, change à chaque clic de NEXT
  }, [firstImageId])
  
  useEffect(() => {
    setRotate(true)
    const timer = setTimeout(() => {
      setRotate(true)
    }, 1000);
    return () => {
      clearTimeout(timer)
    }
  }, [])
  
  const displayBtn = ():void => {
    if(galleryId === coverId) {
      setSelectedImage(galleryId)
      setShowViewBtn(true)
    }
  }  

  const hideBtn = (selectedId: number):void => {
    // const previousValue = selectedImage;
    setSelectedImage(selectedId)
    setShowViewBtn(false)
  }
  
  return (
    <div
    key={index} 
    data-id={galleryId}
    className={`img ${swipe ? "swipe-right" : ""} ${animation === "fixcards" ? "fixcards" : ""}`}
    style={{ 
      animation: `${rotate ? "rotate1 1s" : ""}`, 
      transform: `${animation === "" && handleChangeRotation(index)}`,
      transition: "transform 1s ease-in-out",
      backgroundImage: `url(${src})`, 
      backgroundSize: "cover", 
      display: index === 0 || index === 1 ? "none" : "block"
    }}
    onMouseOver={displayBtn}
    onMouseOut={() => hideBtn(selectedImage)}
    >
      {showViewBtn && 
      <ViewBtn 
      key={index} 
      showViewBtn={showViewBtn} 
      setShowViewBtn={setShowViewBtn} 
      index={index} 
      showView={showView} 
      galleryId={galleryId} 
      setAnimation={setAnimation}
      rotationDegree={handleChangeRotation(index)}
      animation={animation}
      />}
    </div>
  )
}

export default Image
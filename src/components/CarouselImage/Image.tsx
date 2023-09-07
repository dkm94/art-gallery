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
  moveToBack, 
  setMoveToBack,
  showViewBtn,
  setShowViewBtn,
  activeSlideIndex,
  showView,
  handleChangeRotation
}: ICarouselImageProps) => {
  
  const [coverId, setCoverId] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<number>(0);
  
  const imageList = document.querySelectorAll(".img");
  const firstCover = imageList[imageList.length - 1];
  const firstImageId = firstCover?.getAttribute("data-id");
  
  useEffect(() => {
    console.log("here");
    setCoverId(Number(firstImageId)); // Id 1ère image de couverture, change à chaque clic de NEXT
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

  // const handleRotation = (index: number): string => {
  //   switch(index){
  //     case  5:
  //       return "rotate(-5deg)";
  //     case  4:
  //       return "rotate(5deg)"
  //     case 3:
  //       return "rotate(-10deg)"
  //     case 2:
  //       return "rotate(10deg)"
  //     default:
  //       return ""
  //   }
  // }

  const hideBtn = (selectedId: number):void => {
    const previousValue = selectedImage;
    setSelectedImage(selectedId)
    setShowViewBtn(false)
  }
  
  return (
    <div
    key={index} 
    data-id={galleryId}
    className={`img ${swipe ? "swipe-right" : ""} ${moveToBack ? "move" : ""}`}
    style={{ 
      animation: `${rotate ? "rotate1 1s" : ""}`, 
      transform: `${handleChangeRotation(index)}`,
      transition: "transform 1s ease-in-out",
      backgroundImage: `url(${src})`, 
      backgroundSize: "cover", 
      display: index === 0 || index === 1 ? "none" : "block"
    }}
    onMouseOver={displayBtn}
    onMouseOut={() => hideBtn(selectedImage)}
    >
      {showViewBtn && <ViewBtn showViewBtn={showViewBtn} setShowViewBtn={setShowViewBtn} index={index} showView={showView} galleryId={galleryId} />}
    </div>
  )
}

export default Image
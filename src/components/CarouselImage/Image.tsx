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
  showView
}: ICarouselImageProps) => {
  
  const [coverId, setCoverId] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<number>(0);
  
  const imageList = document.querySelectorAll(".img");
  const firstCover = imageList[imageList.length - 1];
  const firstImageId = firstCover?.getAttribute("data-id");

  // useEffect(() => {
  //   console.log("rotate");
    
  //   const timer = setTimeout(() => {
  //     setRotate(true)
  //   }, 100);
  //   return () => {
  //     clearTimeout(timer)
  //   }
  // }, [rotate, selectedGalleryName, setRotate, setSwipe])
  
  useEffect(() => {
    setCoverId(Number(firstImageId)); // Id 1ère image de couverture, change à chaque clic de NEXT
  }, [firstImageId])
  
  const displayBtn = ():void => {
    if(galleryId === coverId) {
      setSelectedImage(galleryId)
      setShowViewBtn(true)
    }
  }  

  const hideBtn = (selectedId: number):void => {
    const previousValue = selectedImage;
    setSelectedImage(selectedId)
    setShowViewBtn(false)
  }

  // Créer deux classes d'animations, pour rotate pour gérer le basculement de gauch à droite 
  // .rotate-left et rotate-right

  return (
    <div
    key={index} 
    data-id={galleryId}
    className={`img ${rotate ? "rotate" : ""} ${swipe ? "swipe-right" : ""} ${moveToBack ? "move" : ""}`}
    style={{backgroundImage: `url(${src})`, backgroundSize: "cover", display: index === 0 || index === 1 ? "none" : "block"}}
    onMouseOver={displayBtn}
    onMouseOut={() => hideBtn(selectedImage)}
    >
      {showViewBtn && <ViewBtn showViewBtn={showViewBtn} setShowViewBtn={setShowViewBtn} index={index} showView={showView} galleryId={galleryId} />}
    </div>
  )
}

export default Image
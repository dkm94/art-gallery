import "./Main.css";

import { useEffect, useState } from "react";

import { NextBtn, PrevBtn } from "..";
import { IMainProps, Gallery } from "../../../types";
import { CardToGrid, Carousel, ProgressBar } from "..";

const Main = ({ 
  setBackground, 
  gallery, 
  setSlideTransition, 
  setAnimation, 
  slideHeight, 
  animation, 
  setSlide, 
}: IMainProps) => {
    
    // Formatted array of gallery with id and cover image
    const [array, setArray] = useState<Gallery[]>([]);

    // External link
    const [url, setUrl] = useState<string>("");

    // Manage the rotation of the carousel
    const [oppositeDegree, setOppositeDegree] = useState<boolean>(false);
    const [rotate, setRotate] = useState<boolean>(false);
    const rotationDegre: number[] = [-5, 5, -10, 10];
    const oppositeRotationDegree:number[] = rotationDegre.map(element => element * -1);

    // Manage the selected gallery
    const [selectedGallery, setSelectedGallery] = useState<number>(1);
    const [thisGallery, setThisGallery] = useState<Gallery[] | undefined>(undefined);
    const [selectedGalleryName, setSelectedGalleryName] = useState<string>(gallery[0]?.title);
    
    // Manage the slide of the carousel
    const [slidePrev, setSlidePrev] = useState<boolean>(false);
    const [slideNext, setSlideNext] = useState<boolean>(false);
    let activeSlideIndex: number = selectedGallery - 1;

    // Slides animations
    const [swipe, setSwipe] = useState<boolean>(false);
    const [fadeOut, setFadeOut] = useState<boolean>(false);

    // Manage the view button
    const [showViewBtn, setShowViewBtn] = useState<boolean>(false);

    // handle disable button
    const [disablePrev, setDisablePrev] = useState<boolean>(false);
    const [disableNext, setDisableNext] = useState<boolean>(false);

    // Manage vertical carousel (showing active page number) 
    const slideNb: Element | null = document?.querySelector<HTMLElement>(".slide-nb");
    const defaultSlideNbHeight: number = (slideNb as HTMLElement)?.offsetHeight || 0;
    const [activePageTransitionHeight, setActivePageTransitionHeight] = useState<number>(defaultSlideNbHeight);
    
    const [activePageTransition, setActivePageTransition] = useState<string>("");

    const galleryLength:number = gallery.length;

    useEffect(() => {
      setSlide(activeSlideIndex);
      setUrl(gallery[selectedGallery - 1].external);
    }, [activeSlideIndex, gallery, selectedGallery, setSlide]);

    const moveCardToBack = ():void => {
      if(array.length > 0){
        const toIndex:number = 0;
        const fromIndex:number = array.length - 1;
        const elementToMove: Gallery = array.splice(fromIndex, 1)[0];
        array.splice(toIndex, 0, elementToMove);
      }
    }

    const bringCardToFront = ():void => {
      if(array.length > 0){
        const fromIndex: number = 0;
        const toIndex:number  = array.length - 1;
        const elementToMove: Gallery = array.splice(fromIndex, 1)[0];
        array.splice(toIndex, 0, elementToMove);
      }
    }

    const handleChangeRotation = (index: number) => {
      let array: number[] = [];
      oppositeDegree ? array = oppositeRotationDegree : array = rotationDegre;
      switch(index){
        case  5:
          return `rotate(${array[0]}deg)`;
        case  4:
          return `rotate(${array[1]}deg)`
        case 3:
          return `rotate(${array[2]}deg)`
        case 2:
          return `rotate(${array[3]}deg)`
        default:
          return `rotate(0deg)`
      }
    }

    // Display next slide
    const nextOne = ():void => {
      setFadeOut(true);
      setSwipe(true);
      setOppositeDegree(!oppositeDegree);
      setDisableNext(true);
      setTimeout(() => {
        changeTitle("next");
        moveCardToBack()
        selectedGallery < galleryLength && setSelectedGallery(selectedGallery + 1);
        setSelectedGalleryName(gallery[selectedGallery]?.title);
        setBackground(selectedGallery);
        setDisableNext(false);
      }, 500);
    }
    
    // Display previous slide
    const prevOne = ():void => {
      setFadeOut(true);
      setSwipe(true);
      setOppositeDegree(!oppositeDegree);
      setDisablePrev(true);
      setTimeout(() => {
        changeTitle("prev");
        bringCardToFront()
        selectedGallery > 0 && setSelectedGallery(selectedGallery - 1);
        const x:number = selectedGallery - 1;
        setSelectedGalleryName(gallery[x - 1]?.title);
        setBackground(x - 1);
        setDisablePrev(false);
      }, 500);
    }

    // Display the 3 images of the selected gallery
    const showView = (id:number) => {
      const thisGallery = gallery[id -1]
      setThisGallery(thisGallery.gallery);
    }
    
    // Handle the carousel title animation
    const changeTitle = (direction: string): void => {
        if(direction === "next"){
            activeSlideIndex++;
            if(activeSlideIndex === galleryLength){
                activeSlideIndex = 0;
            }
            slideHeight && setSlideTransition(`translateY(-${activeSlideIndex * slideHeight}px)`);
            slideHeight && setActivePageTransition(`translateY(-${activeSlideIndex * 21.5}px)`);
        } else if(direction === "prev"){
            activeSlideIndex--;
            if(activeSlideIndex < 0){
                activeSlideIndex = galleryLength - 1;
            }
            slideHeight && setSlideTransition(`translateY(-${activeSlideIndex * slideHeight}px)`);
            slideHeight && setActivePageTransition(`translateY(-${activeSlideIndex * 21.5}px)`);
        }
    }

    // Handle animation when the back button is clicked
    const getBack = () => {
      setThisGallery(undefined);
      setAnimation("zoom-out");
      const timer = setTimeout(() => {
        setAnimation("")
      }, 1000);
      return () => {
        clearTimeout(timer)
      }
    }

  return (
    <div className='content'>
        <section className='left-col'>
          <ProgressBar
          key={1}
          device="desktop"
          galleryLength={galleryLength} 
          activePageTransition={activePageTransition}
          height={activePageTransitionHeight}
          activeSlideIndex={activeSlideIndex} 
          animation={animation}
          setActivePageTransitionHeight={setActivePageTransitionHeight}
          />
          {thisGallery && <div data-id={thisGallery[1].id} className={`first-image ${animation === "fixcards" ? "slide-first-img" : ""}`}>
            <img src={thisGallery[1].img || ""} alt="" loading="lazy" />
          </div>}
                  
          {thisGallery && (
            <PrevBtn 
            key="selected" 
            mode="selected"
            text="Back" 
            getBack={getBack} 
            setSlidePrev={setSlidePrev}
            />
          )}
        </section>
        <section className='center-col'>
          <CardToGrid key={2} device={"mobile"} animation={animation} url={url} />
          <div className="carousel-wrapper">
            <div className={`btns-wrapper ${animation === "fixcards" ? "fadeout" : ""}`}>
              <PrevBtn 
                key={"not-selected"} 
                mode={"not-selected"} 
                text="Prev" 
                setSlidePrev={setSlidePrev} 
                slidePrev={slidePrev} 
                selectedGallery={selectedGallery} 
                prevOne={prevOne}
                disablePrev={disablePrev}
                setDisablePrev={setDisablePrev}
              />
            </div>
            <Carousel 
              gallery={gallery}
              selectedGalleryName={selectedGalleryName} 
              setRotate={setRotate} 
              rotate={rotate} 
              setSwipe={setSwipe} 
              swipe={swipe} 
              fadeOut={fadeOut} 
              setFadeOut={setFadeOut} 
              array={array}
              setArray={setArray}
              showViewBtn={showViewBtn}
              setShowViewBtn={setShowViewBtn}
              showView={showView}
              handleChangeRotation={handleChangeRotation}
              setAnimation={setAnimation}
              animation={animation}
              slideHeight={slideHeight}
            />
            <div className={`btns-wrapper ${animation === "fixcards" ? "fadeout" : ""}`}>
              <NextBtn 
              setSlideNext={setSlideNext} 
              slideNext={slideNext} 
              selectedGallery={selectedGallery} 
              galleryLength={galleryLength} 
              nextOne={nextOne}
              disableNext={disableNext}
              setDisableNext={setDisableNext}
              />
            </div>
          </div>
          <ProgressBar
          key={3}
          device="mobile"
          galleryLength={galleryLength} 
          activePageTransition={activePageTransition} 
          activeSlideIndex={activeSlideIndex} 
          animation={animation}
          height={activePageTransitionHeight}
          setActivePageTransitionHeight={setActivePageTransitionHeight}
          />
        </section>
        <section className='right-col'>
          <CardToGrid key={4} device={"desktop"} animation={animation} url={url} />
          {thisGallery && <div data-id={thisGallery[2].id} className={`third-image ${animation === "fixcards" ? "slide-third-img" : ""}`}>
            <img src={thisGallery[2].img || ""} alt="" loading="lazy" />
          </div>}
        </section>
    </div>
  )
}

export default Main;

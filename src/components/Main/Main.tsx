import "./Main.css";

import { useEffect, useState, useRef } from "react";

import { NextBtn, PrevBtn } from "..";
import { DisplayMode, IMainProps, Gallery } from "../../../types";
import { CardToGrid, Carousel, ProgressBar } from "..";
import { useResizeObserver } from "../../hooks";

//TODO: Responsive design: hide vertical carousel, and display at the bottom of the page, on top of the title
//TODO: Responsive design: hide card to grid vertical buttons, and display at the top of the page, on top of the image carousel

//TODO: Lazy loading

const Main = ({ 
  setBackground, 
  gallery, 
  setSlideTransition, 
  setAnimation, 
  slideHeight, 
  animation, 
  setSlide, 
  isPending, 
  content,
  error
}: IMainProps) => {
    // console.log("🚀 ~ file: Main.tsx:26 ~ content:", content)
    // console.log("🚀 ~ file: Main.tsx:26 ~ gallery:", gallery)
    
    const [array, setArray] = useState<Gallery[]>([]);
    const [oppositeDegree, setOppositeDegree] = useState<boolean>(false);
    const [selectedGallery, setSelectedGallery] = useState<number>(1);
    const [thisGallery, setThisGallery] = useState<Gallery[] | undefined>(undefined);
    const [selectedGalleryName, setSelectedGalleryName] = useState<string>(gallery[0].title);
    const [rotate, setRotate] = useState<boolean>(false);
    const [slidePrev, setSlidePrev] = useState<boolean>(false);
    const [slideNext, setSlideNext] = useState<boolean>(false);
    const [swipe, setSwipe] = useState<boolean>(false);
    const [fadeOut, setFadeOut] = useState<boolean>(false);
    const [showViewBtn, setShowViewBtn] = useState<boolean>(false);

    // manage vertical carousel (showing active page number) 
    const slideNb: Element | null = document?.querySelector<HTMLElement>(".slide-nb");
    const defaultSlideNbHeight: number = slideNb?.offsetHeight;
    const [activePageTransitionHeight, setActivePageTransitionHeight] = useState<number>(defaultSlideNbHeight);
    const [activePageTransition, setActivePageTransition] = useState<string>("");
    const activePageRef: React.MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);
    useResizeObserver(activePageRef, (height) => {
      setActivePageTransitionHeight(height);
    });

    const [display, setDisplay] = useState<DisplayMode>("card");

    const max:number = gallery.length;
    let activeSlideIndex: number = selectedGallery - 1;
    const slideLength:number = gallery.length;

    useEffect(() => {
      setSlide(activeSlideIndex);
    }, [activeSlideIndex, setSlide]);

    const rotationDegre: number[] = [-5, 5, -10, 10];
    const oppositeRotationDegree:number[] = rotationDegre.map(element => element * -1);

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

    const nextOne = ():void => {
      setFadeOut(true);
      setSwipe(true);
      setOppositeDegree(!oppositeDegree);
      setTimeout(() => {
        changeTitle("next");
        moveCardToBack()
        selectedGallery < max && setSelectedGallery(selectedGallery + 1);
        setSelectedGalleryName(gallery[selectedGallery]?.title);
        setBackground(selectedGallery)
      }, 500);
    }
    
    const prevOne = ():void => {
      setFadeOut(true);
      setSwipe(true);
      setOppositeDegree(!oppositeDegree);
      setTimeout(() => {
        changeTitle("prev");
        bringCardToFront()
        selectedGallery > 0 && setSelectedGallery(selectedGallery - 1);
        const x:number = selectedGallery - 1;
        setSelectedGalleryName(gallery[x - 1]?.title);
        setBackground(x - 1)
      }, 500);
    }

    const showView = (id:number) => {
      const thisGallery = gallery[id -1]
      setThisGallery(thisGallery.gallery);
    }
    
    const changeTitle = (direction: string): void => {
        if(direction === "next"){
            activeSlideIndex++;
            if(activeSlideIndex === slideLength){
                activeSlideIndex = 0;
            }
            slideHeight && setSlideTransition(`translateY(-${activeSlideIndex * slideHeight}px)`);
            slideHeight && setActivePageTransition(`translateY(-${activeSlideIndex * activePageTransitionHeight}px)`);
        } else if(direction === "prev"){
            activeSlideIndex--;
            if(activeSlideIndex < 0){
                activeSlideIndex = slideLength - 1;
            }
            slideHeight && setSlideTransition(`translateY(-${activeSlideIndex * slideHeight}px)`);
            slideHeight && setActivePageTransition(`translateY(-${activeSlideIndex * activePageTransitionHeight}px)`);
        }
    }

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
          slideLength={slideLength} 
          activePageTransition={activePageTransition} 
          activeSlideIndex={activeSlideIndex} 
          animation={animation}
          ref={activePageRef}
          />
          {thisGallery && <div data-id={thisGallery[1].id} className={`first-image ${animation === "fixcards" ? "slide-first-img" : ""}`}>
            <img src={thisGallery[1].img || ""} alt="" loading="lazy" />
          </div>}
                  
          {thisGallery && <PrevBtn key={"selected"} mode={"selected"} text="Back" getBack={getBack} setSlidePrev={setSlidePrev}  />}
        </section>
        <section className='center-col'>
          { isPending && <span>Loading...</span>}
          { error && <span>{error}</span> }
          { !isPending && !error && content && <div className="carousel-wrapper">
            <div className={`btns-wrapper ${animation === "fixcards" ? "fadeout" : ""}`}>
              <PrevBtn 
                key={"not-selected"} 
                mode={"not-selected"} 
                text="Prev" 
                setSlidePrev={setSlidePrev} 
                slidePrev={slidePrev} 
                selectedGallery={selectedGallery} 
                prevOne={prevOne} 
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
            />
            <div className={`btns-wrapper ${animation === "fixcards" ? "fadeout" : ""}`}>
              <NextBtn setSlideNext={setSlideNext} slideNext={slideNext} selectedGallery={selectedGallery} max={max} nextOne={nextOne} />
            </div>
          </div>}
        </section>
        <section className='right-col'>
          <CardToGrid display={display} setDisplay={setDisplay} animation={animation} />
          {thisGallery && <div data-id={thisGallery[2].id} className={`third-image ${animation === "fixcards" ? "slide-third-img" : ""}`}>
            <img src={thisGallery[2].img || ""} alt="" loading="lazy" />
          </div>}
        </section>
    </div>
  )
}

export default Main;

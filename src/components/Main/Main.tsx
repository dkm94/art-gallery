import "./Main.css";

import { useEffect, useState } from "react";

import { DisplayMode, IMainProps, Gallery } from "../../../types";
import { CardToGrid, Carousel, CarouselTitle, ProgressBar } from "..";

const Main = ({ setBackground, gallery }: IMainProps) => {
    const [array, setArray] = useState<Gallery[]>([]);
    const [oppositeDegree, setOppositeDegree] = useState<boolean>(false);
    const [formattedArray, setFormattedArray] = useState<any[]>([]);
    const [selectedGallery, setSelectedGallery] = useState<number>(gallery[0].id);
    const [selectedGalleryName, setSelectedGalleryName] = useState<string>(gallery[0].title);
    const [rotate, setRotate] = useState<boolean>(false);
    const [slidePrev, setSlidePrev] = useState<boolean>(false);
    const [slideNext, setSlideNext] = useState<boolean>(false);
    const [swipe, setSwipe] = useState<boolean>(false);
    const [fadeOut, setFadeOut] = useState<boolean>(false);
    const [showViewBtn, setShowViewBtn] = useState<boolean>(false);
    const [slideTransition, setSlideTransition] = useState<string>("");
    const [activePageTransition, setActivePageTransition] = useState<string>("");
    const [display, setDisplay] = useState<DisplayMode>("card");
    const [animation, setAnimation] = useState<string>("");

    const max:number = gallery.length;
    let activeSlideIndex: number = selectedGallery - 1;
    const slideLength:number = gallery.length;
    const slideHeight: number = 280;
    const activePageHeight: number = 22;

    const rotationDegre: number[] = [-5, 5, -10, 10];
    const oppositeRotationDegree = rotationDegre.map(element => element * -1);

    useEffect(() => {
      setAnimation("")
      console.log("here");
    }, [])

    const moveCardToBack = ():void => {
      if(array.length > 0){
        const toIndex = 0;
        const fromIndex = array.length - 1;
        const elementToMove = array.splice(fromIndex, 1)[0];
        array.splice(toIndex, 0, elementToMove);
      }
    }

    const bringCardToFront = ():void => {
      if(array.length > 0){
        const fromIndex = 0;
        const toIndex  = array.length - 1;
        const elementToMove = array.splice(fromIndex, 1)[0];
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
      console.log("🚀 ~ file: Main.tsx:81 ~ showView ~ id:", id)
      // pendant l'animation fixcards, masquer la progressbar à gauche et les boutons à droit, les deux boutons prev et next
      // masquer les 5 
      // animation du titre
      // selectionner la première image
      // animation zoom

    }
    
    const changeTitle = (direction: string): void => {
        if(direction === "next"){
            activeSlideIndex++;
            if(activeSlideIndex === slideLength){
                activeSlideIndex = 0;
            }
            setSlideTransition(`translateY(-${activeSlideIndex * slideHeight}px)`);
            setActivePageTransition(`translateY(-${activeSlideIndex * activePageHeight}px)`);
        } else if(direction === "prev"){
            activeSlideIndex--;
            if(activeSlideIndex < 0){
                activeSlideIndex = slideLength - 1;
            }
            setSlideTransition(`translateY(-${activeSlideIndex * slideHeight}px)`);
            setActivePageTransition(`translateY(-${activeSlideIndex * activePageHeight}px)`);
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
          />
        </section>
        <section className='center-col'>
            <CarouselTitle slideTransition={slideTransition} />
            <div className="carousel-wrapper">
              <Carousel 
                gallery={gallery}
                formattedArray={formattedArray}
                setFormattedArray={setFormattedArray}
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
                activeSlideIndex={activeSlideIndex}
                showView={showView}
                handleChangeRotation={handleChangeRotation}
                setAnimation={setAnimation}
                animation={animation}
              />
              <div className={`btns-wrapper ${animation === "fixcards" ? "fadeout" : ""}`}>
                <div className="prev-wrapper" onMouseOver={() => setSlidePrev(true)} onMouseOut={() => setSlidePrev(false)} >
                  <button className={`prev-btn ${slidePrev ? "prev-btn-animation" : ""} ${selectedGallery === 1 ? "disable-btn" : ""}`} onClick={prevOne} disabled={selectedGallery < 2}>Prev</button>
                  <div className={`prev-line ${slidePrev ? "prev-line-animation" : ""}`}/>
                </div>
                <div className="next-wrapper" onMouseOver={() => setSlideNext(true)} onMouseOut={() => setSlideNext(false)} >
                  <button className={`next-btn ${slideNext ? "next-btn-animation" : ""} ${selectedGallery === max ? "disable-btn" : ""}`} onClick={nextOne} disabled={selectedGallery === max}>Next</button>
                  <div className={`next-line ${slideNext ? "next-line-animation" : ""}`}/>
                </div>
              </div>
            </div>
        </section>
        <section className='right-col'>
          
          <CardToGrid display={display} setDisplay={setDisplay} animation={animation} />
        </section>
    </div>
  )
}

export default Main;

import "./Main.css";

import { useEffect, useState } from "react";

import { IMainProps } from "../../../types";

import { Carousel, CarouselTitle } from "..";

const Main = ({ setBackground, gallery }: IMainProps) => {
    const [selectedGallery, setSelectedGallery] = useState<number>(gallery[0].id);
    const [selectedGalleryName, setSelectedGalleryName] = useState<string>(gallery[0].title);
    const [rotate, setRotate] = useState<boolean>(false);
    const [slidePrev, setSlidePrev] = useState<boolean>(false);
    const [slideNext, setSlideNext] = useState<boolean>(false);
    const [swipe, setSwipe] = useState<boolean>(false);
    const [fadeOut, setFadeOut] = useState<boolean>(false);

    const max:number = gallery.length;

    useEffect(() => {
    }, [selectedGalleryName])

    const nextOne = ():void => {
      setFadeOut(true);
      setSwipe(true);
      setTimeout(() => {
        changeTitle("next");
        setRotate(false);
        selectedGallery < max && setSelectedGallery(selectedGallery + 1);
        setSelectedGalleryName(gallery[selectedGallery]?.title);
        setBackground(selectedGallery)
      }, 500);
    }

    const prevOne = ():void => {
      setFadeOut(true);
      setSwipe(true);
      setTimeout(() => {
        changeTitle("prev");
        setRotate(false);
        selectedGallery > 0 && setSelectedGallery(selectedGallery - 1);
        const x:number = selectedGallery - 1;
        setSelectedGalleryName(gallery[x - 1]?.title);
        setBackground(x - 1)
      }, 500);
    }

    const [slideTransition, setSlideTransition] = useState<string>("");

    let activeSlideIndex: number = selectedGallery - 1;

    const slideLenght:number = gallery.length;
    const slideHeight: number = 280;
    
    const changeTitle = (direction: string): void => {
      
        if(direction === "next"){
            activeSlideIndex++;
            if(activeSlideIndex === slideLenght){
                activeSlideIndex = 0;
            }
            setSlideTransition(`translateY(-${activeSlideIndex * slideHeight}px)`);
        } else if(direction === "prev"){
            activeSlideIndex--;
            if(activeSlideIndex < 0){
                activeSlideIndex = slideLenght - 1;
            }
            setSlideTransition(`translateY(-${activeSlideIndex * slideHeight}px)`);
        }
    }

  return (
    <div className='content'>
        <section className='left-col'>Left</section>
        <section className='center-col'>
            <CarouselTitle slideTransition={slideTransition} />
            <div className="carousel-wrapper">
              <Carousel selectedGalleryName={selectedGalleryName} setRotate={setRotate} rotate={rotate} setSwipe={setSwipe} swipe={swipe} fadeOut={fadeOut} setFadeOut={setFadeOut} />
              <div className="btns-wrapper">
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
        <section className='right-col'>Right</section>
    </div>
  )
}

export default Main;

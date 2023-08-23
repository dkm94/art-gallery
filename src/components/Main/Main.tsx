import "./Main.css";

import { useEffect, useState } from "react";

import { IMainProps } from "../../../types";

import { Carousel } from "..";

const Main = ({ setBackground, gallery }: IMainProps) => {
    const [selectedGallery, setSelectedGallery] = useState<number>(gallery[0].idx);
    const [selectedGalleryName, setSelectedGalleryName] = useState<string>(gallery[0].title);
    const [activeClass, setActiveClass] = useState<string>('');
    const [slidePrev, setSlidePrev] = useState<boolean>(false);
    const [slideNext, setSlideNext] = useState<boolean>(false);

    const max = gallery.length;

    useEffect(() => {
      setActiveClass('rotate')
    }, [gallery])

    const nextOne = () => {
      selectedGallery < max - 1 && setSelectedGallery(selectedGallery + 1);
      setSelectedGalleryName(gallery[selectedGallery + 1]?.title);
      setBackground(selectedGallery + 1)
    }

    const prevOne = () => {
      selectedGallery > 0 && setSelectedGallery(selectedGallery - 1);
      setSelectedGalleryName(gallery[selectedGallery - 1]?.title);
      setBackground(selectedGallery - 1)
    }

  return (
    <div className='content'>
        <section className='left-col'>Left</section>
        <section className='center-col'>
            <div className="page-title">
                <h1>{selectedGalleryName}</h1>
            </div>
            <div className="carousel-wrapper">
              <Carousel selectedGalleryName={selectedGalleryName} activeClass={activeClass} />
              <div className="btns-wrapper">
                <div className="prev-wrapper" onMouseEnter={() => setSlidePrev(true)} onMouseLeave={() => setSlidePrev(false)} >
                  <button className={`prev-btn ${slidePrev ? "prev-btn-animation" : ""}`} onClick={() => prevOne()}>Prev</button>
                  <div className={`prev-line ${slidePrev ? "prev-line-animation" : ""}`}/>
                </div>
                <div className="next-wrapper" onMouseEnter={() => setSlideNext(true)} onMouseLeave={() => setSlideNext(false)} >
                  <button className={`next-btn ${slideNext ? "next-btn-animation" : ""}`} onClick={() => nextOne()}>Next</button>
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

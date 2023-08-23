import "./Main.css";

import { IMainProps } from "../../../types";
import { useEffect, useState } from "react";

import { Carousel } from "..";

const Main = ({ setBackground }: IMainProps) => {
    const [section, setSection] = useState<string>('Fashion');
    const [gallery, setGallery] = useState("fashion");
    const [activeClass, setActiveClass] = useState<string>('');
    const [slidePrev, setSlidePrev] = useState<boolean>(false);
    const [slideNext, setSlideNext] = useState<boolean>(false);

    useEffect(() => {
      setActiveClass('rotate')
    }, [gallery])

  return (
    <div className='content'>
        <section className='left-col'>Left</section>
        <section className='center-col'>
            <div className="page-title">
                <h1>{section}</h1>
            </div>
            <div className="carousel-wrapper">
              <Carousel gallery={gallery} activeClass={activeClass} />
              <div className="btns-wrapper">
                <div className="prev-wrapper" onMouseEnter={() => setSlidePrev(true)} onMouseLeave={() => setSlidePrev(false)} >
                  <button className={`prev-btn ${slidePrev ? "prev-btn-animation" : ""}`}>Prev</button>
                  <div className={`prev-line ${slidePrev ? "prev-line-animation" : ""}`}/>
                </div>
                <div className="next-wrapper" onMouseEnter={() => setSlideNext(true)} onMouseLeave={() => setSlideNext(false)} >
                  <button className={`next-btn ${slideNext ? "next-btn-animation" : ""}`}>Next</button>
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

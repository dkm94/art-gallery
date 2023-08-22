import "./Main.css";

import { IMainProps } from "../../../types";
import { useEffect, useState } from "react";

import { Carousel } from "..";

const Main = ({ setBackground }: IMainProps) => {
    const [section, setSection] = useState<string>('Fashion');
    const [gallery, setGallery] = useState("fashion");
    const [activeClass, setActiveClass] = useState<string>('');
    // console.log("🚀 ~ file: Main.tsx:12 ~ Main ~ activeClass:", activeClass)

    // const delay: number = 5;

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
                <button className="prev-btn">Prev</button>
                <button className="next-btn">Next</button>
              </div>
            </div>
        </section>
        <section className='right-col'>Right</section>
    </div>
  )
}

export default Main;

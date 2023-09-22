import './App.css';

import { useState, useEffect } from "react";
import useFetch from './hooks/useFetch';

import { Cursor, Header, Main, CarouselTitle } from './components';
import { BackgroundCtx } from './context';
import { backgrounds, gallery } from './constants';

function App() {
  
  const [content, setContent] = useState<any>([]);
  const [background, setBackground] = useState<number>(0);
  const [slideTransition, setSlideTransition] = useState<string>("");
  const [animation, setAnimation] = useState<string>("");
  const title: Element | null = document?.querySelector<HTMLElement>(".title");
  const defaultHeight: number = title?.offsetHeight;
  const [titleHeight, setTitleHeight] = useState<number>(defaultHeight);

  // slide number is used to manage the title animation
  const [slide, setSlide] = useState<number>(0);
  
  const { error, isPending, response } = useFetch("gallery.json", {});

  useEffect(() => {
    const gallery = response?.gallery;
    setContent(gallery);
  }, [response])
    
  return (
    <BackgroundCtx.Provider value={{ background }}>
      <Cursor />
      <div 
        className={`app bg-fade-out`} 
        style={{ backgroundColor: backgrounds[background].color, backgroundImage: `url(${backgrounds[background].data})`}} 
      >
        <Header />
        <Main 
          setBackground={setBackground} 
          gallery={gallery} 
          setSlideTransition={setSlideTransition} 
          setAnimation={setAnimation} 
          animation={animation}
          slideHeight={titleHeight}
          setSlide={setSlide}
          isPending={isPending}
          error={error}
          content={content}
        />
        <CarouselTitle 
          slideTransition={slideTransition} 
          animation={animation} 
          height={titleHeight}
          setTitleHeight={setTitleHeight}
          slide={slide}
        />
      </div>
    </BackgroundCtx.Provider>
  )
}

export default App

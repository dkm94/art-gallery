import './App.css';

import { useState, useEffect } from "react";
import useFetch from './hooks/useFetch';

import { Cursor, Header, Main, CarouselTitle, Loader, Error } from './components';
import { BackgroundCtx } from './context';
import { backgrounds } from './constants';
import { Section } from '../types';

function App() {
  // Fetch data
  const { error, isPending, response } = useFetch("gallery.json", {});
  const [content, setContent] = useState<Section[]>([]);

  // Screen's background
  const [background, setBackground] = useState<number>(0);

  // Trigger slide animation
  const [slideTransition, setSlideTransition] = useState<string>("");
  const [animation, setAnimation] = useState<string>("");

  // Title's height
  const title: Element | null = document?.querySelector<HTMLElement>(".title");
  const defaultHeight: number = title instanceof HTMLElement ? title.offsetHeight : 0;

  const [titleHeight, setTitleHeight] = useState<number>(defaultHeight);

  // Slide number is used to manage animations
  const [slide, setSlide] = useState<number>(0);

  useEffect(() => {
    if(response){
    setContent(response);
  }
  }, [response])

  return (
    <BackgroundCtx.Provider value={{ background }}>
      <Cursor />
      <div 
        className={`app bg-fade-out`} 
        style={{ backgroundColor: backgrounds[background].color, backgroundImage: `url(${backgrounds[background].data})`}} 
      >
        <Header />
        { isPending && <Loader />}
        { error && <Error message={error} /> }
        { !isPending && !error && response && content.length > 0 && (
          <>
            <Main 
            setBackground={setBackground} 
            gallery={content} 
            setSlideTransition={setSlideTransition} 
            setAnimation={setAnimation} 
            animation={animation}
            slideHeight={titleHeight}
            setSlide={setSlide}
            />
            <CarouselTitle 
              slideTransition={slideTransition} 
              animation={animation} 
              height={titleHeight}
              setTitleHeight={setTitleHeight}
              slide={slide}
              gallery={content}
            />
          </>
          
        )}
        
      </div>
    </BackgroundCtx.Provider>
  )
}

export default App

import './App.css';

import { useState } from "react";

import { Cursor, Header, Main, CarouselTitle } from './components';
import { BackgroundCtx } from './context';
import { backgrounds, gallery } from './constants';


function App() {
  const [background, setBackground] = useState<number>(0);
  const [slideTransition, setSlideTransition] = useState<string>("");
  const [animation, setAnimation] = useState<string>("");
  const [titleHeight, setTitleHeight] = useState<number>(0);
  
  // modifier le contexte et passer toute la gallery
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
        />
        <CarouselTitle 
          slideTransition={slideTransition} 
          animation={animation} 
          height={titleHeight} 
        />
      </div>
    </BackgroundCtx.Provider>
  )
}

export default App

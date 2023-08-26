import './App.css';

import { useState } from "react";

import { Header, Main } from './components';
import { BackgroundCtx } from './context';
import { backgrounds, gallery } from './constants';


function App() {
  const [background, setBackground] = useState<number>(0);
  
  return (
    <BackgroundCtx.Provider value={{ background }}>
      <div className={`app bg-fade-out`} style={{ backgroundColor: backgrounds[background].color, backgroundImage: `url(${backgrounds[background].data})`}} >
        <Header />
        <Main setBackground={setBackground} gallery={gallery} />
      </div>
    </BackgroundCtx.Provider>
  )
}

export default App

import './App.css'
import { Header, Main } from './components'

import { backgrounds, gallery } from './constants'

import { useState } from "react"

function App() {

  const [background, setBackground] = useState<number>(0);
  
  return (
    <div className={`app bg-fade-out`} style={{ backgroundColor: backgrounds[background].color, backgroundImage: `url(${backgrounds[background].data})`}} >
      <Header />
      <Main setBackground={setBackground} gallery={gallery} />
    </div>
  )
}

export default App

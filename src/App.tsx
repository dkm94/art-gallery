import './App.css'
import { Header } from './components'

import { backgrounds } from './constants'

import React, { useState } from "react"

function App() {

  const [background, setBackground] = useState<string>('black')

  return (
    <div className='app' style={{ backgroundColor: backgrounds[background].color, backgroundImage: `url(${backgrounds[background].data})`}} >
      <Header />
    </div>
  )
}

export default App

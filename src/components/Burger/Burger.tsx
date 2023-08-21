import "./Burger.css";

import { useState } from "react";

const Burger = () => {
    const [activeClass, setActiveClass] = useState(false);

  return (
    <div className={`button-burger ${activeClass ? "button-burger_active" : ""}`} onClick={() => setActiveClass(!activeClass)}>
      <div className="button-burger__line"></div>
      <div className="button-burger__line"></div>
      <div className="button-burger__line"></div>
    </div>
  )
}

export default Burger
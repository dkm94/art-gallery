import "./Cursor.css";

import { useState, useEffect } from "react";

const Cursor = () => {
    const [position, setPosition] = useState<Record<string, number>>({x: 0, y: 0});

    useEffect(() => {
        addEventListeners();
        return () => removeEventListeners();
    }, []);
 
    const addEventListeners = (): void => {
        document.addEventListener("mousemove", onMouseMove);
    };
 
    const removeEventListeners = (): void  => {
        document.removeEventListener("mousemove", onMouseMove);
    };
 
    const onMouseMove = (e): void  => {
        setPosition({x: e.pageX, y: e.pageY});         
    };  

  return (
    <div style={{ left: `${position.x}px`, top: `${position.y}px` }} className="cursor hover" />
  )
}

export default Cursor
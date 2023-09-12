import "./CardToGrid.css";

import { ICardToGridProps } from "../../../types"
import { CardToGridBtn } from "..";

const CardToGrid = ({ display, setDisplay, animation }: ICardToGridProps) => {
  return (
    <div className={`card-to-grid ${animation === "fixcards" ? "fadeout" : ""}`}>
        <div className="card-to-grid__btn">
            <CardToGridBtn 
              key={"card"}
              display={display} 
              setDisplay={setDisplay} 
              mode={"card"} 
              title={"Card"} 
            />
            <CardToGridBtn 
              key={"grid"}
              display={display} 
              setDisplay={setDisplay} 
              mode={"grid"} 
              title={"Grid"} 
            />
        </div>
    </div>
  )
}

export default CardToGrid
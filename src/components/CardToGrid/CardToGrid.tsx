import "./CardToGrid.css";

import { ICardToGridProps } from "../../../types"
import { CardToGridBtn } from "..";

const CardToGrid = ({ display, setDisplay }: ICardToGridProps) => {
  return (
    <div className="card-to-grid">
        <div className="card-to-grid__btn">
            <CardToGridBtn 
              display={display} 
              setDisplay={setDisplay} 
              mode={"card"} 
              title={"Card"} 
            />
            <CardToGridBtn 
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
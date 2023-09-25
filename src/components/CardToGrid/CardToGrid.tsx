import "./CardToGrid.css";

import { ICardToGridProps } from "../../../types"
import { CardToGridBtn } from "..";

const CardToGrid = ({ animation, device }: ICardToGridProps) => {
  return (
    <div className={`${device === "desktop" ? "card-to-grid" : "card-to-grid-mobile"} ${animation === "fixcards" ? "fadeout" : ""}`}>
        <div className="card-to-grid__btn">
            <CardToGridBtn 
              title={"Visit the gallery"} 
            />
        </div>
    </div>
  )
}

export default CardToGrid
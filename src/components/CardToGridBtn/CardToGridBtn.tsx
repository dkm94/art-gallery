import "./CardToGridBtn.css";

import { DisplayMode, ICardToGridBtnProps } from "../../../types";
import { backgrounds } from "../../constants";
import useCurrentBackground from "../../hooks/useCurrentBackground";

const CardToGridBtn = ({ display, setDisplay, mode, title }: ICardToGridBtnProps) => {

    const { background } = useCurrentBackground((currentBackgroundCtx: { background: number }) => currentBackgroundCtx.background);

    const selectButton = (mode: DisplayMode) => {
        setDisplay(mode);
    }
    
    return (
        <button
            type="button"
            className={`${display === mode ? "active-mode" : "mode"}`} 
            onClick={() => selectButton(mode)}
            style={{ color: display === mode ? backgrounds[background]?.color : "" }}
        >
            {title}
        </button>
    )
}

export default CardToGridBtn
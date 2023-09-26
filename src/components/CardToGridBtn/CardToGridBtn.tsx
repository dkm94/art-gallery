import "./CardToGridBtn.css";

import { ICardToGridBtnProps } from "../../../types";
import { backgrounds } from "../../constants";
import useCurrentBackground from "../../hooks/useCurrentBackground";

const CardToGridBtn = ({ title, url }: ICardToGridBtnProps) => {

    const { background } = useCurrentBackground();

    return (
        <a
            type="button"
            className="active-mode"
            style={{ color: backgrounds[background]?.color, fontFamily: "serif" }}
            href={url}
            target="_blank"
            rel="noreferrer"
        >
            {title}
        </a>
    )
}

export default CardToGridBtn
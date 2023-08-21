import "./Header.css";

import { Burger } from "..";
import icon from "../../assets/dribble.png"

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Burger />
        <div className="artist">Adam Sorensen</div>
        <a href="https://dribbble.com/shots/10722222-Adam-Sorensen-Portfolio" target="blank" className="ext-link">
          <img src={icon} alt="external link" height={20}/>
        </a>
      </div>
    </header>
  )
}

export default Header
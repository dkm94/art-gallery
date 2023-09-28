import "./Header.css";

import { Burger } from "..";
import icon from "../../assets/github.png"

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Burger />
        <div className="artist">Art Gallery</div>
        <a href="https://github.com/dkm94/art-gallery" target="blank" className="ext-link">
          <img src={icon} alt="external link" height={20}/>
        </a>
      </div>
    </header>
  )
}

export default Header
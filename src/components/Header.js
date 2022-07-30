import React from "react";
import trollFace from "../images/troll-face.png";

function Header() {
  return (
    <header>
      <div className="container header">
        <img src={trollFace} alt="" className="header__img" />
        <h3 className="header__title">Meme Generator</h3>
        <h4 className="header__sub-title">React Course - Project 3</h4>
      </div>
    </header>
  );
}

export default Header;

import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="headerDiv">
      <img className="headerDiv__logoS" src="logoS.png" alt="logo" />
      <ul className="headerDiv__ul">
        <li>
          <a href="Home" className="headerDiv__ul__a">
            Home
          </a>
        </li>
        <li>
          <a href="about" className="headerDiv__ul__a">
            About
          </a>
        </li>
        <li>
          <a href="#" className="headerDiv__ul__a">
            Skills
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;

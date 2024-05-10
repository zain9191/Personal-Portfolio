import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="headerDiv">
      {/* <img className="headerDiv__logoS" src="logoS.png" alt="logo" /> */}
      <ul className="headerDiv__ul">
        <li>
          <a href="#IDHome" className="headerDiv__ul__a">
            Home
          </a>
        </li>
        <li>
          <a href="#IDabout" className="headerDiv__ul__a">
            About
          </a>
        </li>
        <li>
          <a href="#IDskills" className="headerDiv__ul__a">
            Skills
          </a>
        </li>{" "}
        <li>
          <a href="#contact" className="headerDiv__ul__a">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;

import React from "react";

function Header() {
  return (
    <div className="headerDiv">
      <ul className="headerDiv__ul">
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

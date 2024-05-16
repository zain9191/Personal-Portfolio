import React from "react";
// import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <a href="#" className="header__logo-link">
            MyPortfolio
          </a>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="#IDabout" className="header__nav-link">
                About
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#IDskills" className="header__nav-link">
                Skills
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#contact" className="header__nav-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

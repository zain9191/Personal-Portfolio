import React, { useState, useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, toggleLanguage, translations } =
    useContext(LanguageContext);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <a href="#" className="header__logo-link">
            MyPortfolio
          </a>
        </div>
        <button onClick={toggleLanguage} className="language-toggle">
          {translations[language].header.toggleLanguage}
        </button>
        <button className="burger-menu" onClick={toggleMenu}>
          ☰
        </button>
        <nav className={`header__nav ${menuOpen ? "header__nav--open" : ""}`}>
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="#IDabout" className="header__nav-link">
                {translations[language].header.about}
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#IDskills" className="header__nav-link">
                {translations[language].header.skills}
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#contact" className="header__nav-link">
                {translations[language].header.contact}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

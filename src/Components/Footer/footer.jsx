// src/Components/Footer/footer.jsx
import React, { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

const Footer = () => {
  const { language, translations } = useContext(LanguageContext);

  return (
    <footer className="footer">
      <p className="copyright">{translations[language].footer.rights}</p>
      <p className="contact">{translations[language].footer.email}</p>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/zain-frayha-7064171aa/"
          target=""
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/zain9191"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;

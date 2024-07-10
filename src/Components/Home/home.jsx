// src/Components/Home/home.jsx
import React, { useContext } from "react";
// import HomeImg from "../../assets/HomeImg.png";
import { LanguageContext } from "../../Context/LanguageContext";

function Home() {
  const { language, translations } = useContext(LanguageContext);

  return (
    <div className="Home" id="IDHome">
      <div className="Home__container">
        <div className="Home__div1">
          <h1 className="Home__h1">
            {translations[language].home.hello}
            <span className="Home__h1__dot">.</span>
          </h1>
          <br />
          <h2 className="Home__h2">
            {translations[language].home.webDeveloper}
            <br /> <br />
            <p>{translations[language].home.lookAtPortfolio}</p>
          </h2>
        </div>
        {/* <div className="Home__div2">
          <img src={HomeImg} className="Home__img" alt="Portfolio" />
        </div> */}
      </div>
    </div>
  );
}

export default Home;

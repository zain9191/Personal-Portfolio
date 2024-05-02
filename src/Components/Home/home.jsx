import React from "react";
import ScrollAnimation from "../ScrollAnimation/scrollAnimation";
import HomeImg from "../../assets/HomeImg.png";
import HomeBG from "../../assets/HomeBG.png";

function Home() {
  return (
    <div className="Home">
      <ScrollAnimation
        className="Home__BG"
        animationName="fade-in"
        triggerPoint={0.5}
      >
        <img src={HomeBG} className="Home__BG" alt="Background" />
      </ScrollAnimation>
      <div className="Home__container">
        <div>
          <ScrollAnimation
            className="Home__content"
            animationName="fade-in"
            triggerPoint={0.5}
          >
            <h1 className="Home__h1">
              Hello<span className="Home__h1__dot">.</span>
            </h1>
            <br />
            <h2 className="Home__h2">
              My name is Zain Frayha, I am a web developer.
              <br /> <br /> <p>Here is my portfolio, take a look</p>
            </h2>
          </ScrollAnimation>
        </div>
        <div>
          <ScrollAnimation
            className="Home__img"
            animationName="fade-in"
            triggerPoint={0.5}
          >
            <img src={HomeImg} className="Home__img" alt="Portfolio" />
          </ScrollAnimation>
        </div>
      </div>
      {/* <hr className="Home__line"></hr> */}
    </div>
  );
}

export default Home;

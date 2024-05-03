import React from "react";
// import ScrollAnimation from "../ScrollAnimation/scrollAnimation";
import HomeImg from "../../assets/HomeImg.png";
import HomeBG from "../../assets/HomeBG.png";

function Home() {
  return (
    <div className="Home">
      {/* <div> */}
      {/* <img src={HomeBG} className="Home__BG" alt="Background" /> */}
      {/* </div> */}
      <div className="Home__container">
        <div>
          <h1 className="Home__h1">
            Hello<span className="Home__h1__dot">.</span>
          </h1>
          <br />
          <h2 className="Home__h2">
            My name is Zain Frayha, I am a web developer.
            <br /> <br /> <p>Here is my portfolio, take a look</p>
          </h2>
        </div>
        <div>
          <img src={HomeImg} className="Home__img" alt="Portfolio" />
        </div>
      </div>
    </div>
  );
}

export default Home;

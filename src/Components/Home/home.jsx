import React from "react";
import HomeImg from "../../assets/HomeImg.png";

function Home() {
  return (
    <div className="Home" id="IDHome">
      <div className="Home__container">
        <div className="Home__div1">
          <h1 className="Home__h1">
            Hello<span className="Home__h1__dot">.</span>
          </h1>
          <br />
          <h2 className="Home__h2">
            I am a web developer.
            <br /> <br /> <p>Take a look at my portfolio</p>{" "}
          </h2>
        </div>
        <div className="Home__div2">
          <img src={HomeImg} className="Home__img" alt="Portfolio" />
        </div>
      </div>
    </div>
  );
}

export default Home;

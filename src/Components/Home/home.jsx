import HomeImg from "../../assets/HomeImg.png";
import HomeBG from "../../assets/HomeBG.png";

function Home() {
  return (
    <div className="Home">
      <img src={HomeBG} className="Home__BG" />
      <div className="Home__container">
        <div>
          <h1 className="Home__h1">
            Hello<span className="Home__h1__dot">.</span>
          </h1>
          <br />
          <h2 className="Home__h2">
            My name is Zain Frayha, I am a web devoloer.
            <br /> <br /> <p>Here is my portfolio, take a look</p>
          </h2>
        </div>
        <div>
          <img src={HomeImg} className="Home__img" />
        </div>
      </div>
      <hr className="Home__line"></hr>
    </div>
  );
}

export default Home;

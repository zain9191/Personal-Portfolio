import HomeImg from "../../assets/HomeImg.jpeg";
import HomeBG from "../../assets/HomeBG.png";

function Home() {
  return (
    <div className="Home">
      <img src={HomeBG} className="Home__BG" />
      <div className="Home__container">
        <div>
          <h1>Hello</h1> <span>.</span>
          <br />
          <p>
            My name is Zain Frayha, I am a web devoloer. Here is my portfolio,
            take a look
          </p>
        </div>
        <div>
          <img src={HomeImg} className="Home__img" />
        </div>
      </div>
    </div>
  );
}

export default Home;

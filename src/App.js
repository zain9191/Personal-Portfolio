import Header from "./Components/Header/header";
import Home from "./Components/Home/home";
import  About from "./Components/About/About";
import Skills from "./Components/Skills/skills";
import Contact from "./Components/Contcat/contact";
import '../src/Style/CSS/main.css'


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;

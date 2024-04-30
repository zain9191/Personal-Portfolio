import Header from "./Components/Header/header";
import Home from "./Components/Home/home";
import  About from "./Components/About/About";
import '../src/Style/CSS/main.css'


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;

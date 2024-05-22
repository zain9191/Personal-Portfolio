import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Header from "./Components/Header/header";
import Home from "./Components/Home/home";
import  About from "./Components/About/About";
import Skills from "./Components/Skills/skills";
import Contact from "./Components/Contcat/contact";
import '../src/Style/CSS/main.css'
// import ScrollAnimation from './Components/ScrollAnimation/scrollAnimation';
import Footer from './Components/Footer/footer';
import { BrowserRouter as Router } from 'react-router-dom';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Router>

    {/* <ScrollAnimation> */}
      <Home />
    {/* </ScrollAnimation> */}
    {/* <ScrollAnimation> */}
      <About />
    {/* </ScrollAnimation> */}
    {/* <ScrollAnimation> */}
      <Skills />
    {/* </ScrollAnimation> */}
    {/* <ScrollAnimation> */}
      <Contact />
    {/* </ScrollAnimation> */}
    <Footer/>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
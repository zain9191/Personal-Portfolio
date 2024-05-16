import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import PantherHome from "../../assets/Porojects/pantherHome.png";

import KasaHome from "../../assets/Porojects//kasa/Kasa-home.png";
import Kasa1 from "../../assets/Porojects//kasa/Kasa-1.png";
import Kasa2 from "../../assets/Porojects//kasa/Kasa-2.png";
import Kasa3 from "../../assets/Porojects//kasa/Kasa-3.png";
import Kasa4 from "../../assets/Porojects//kasa/Kasa-4.png";
import Kasa5 from "../../assets/Porojects//kasa/Kasa-5.png";

import P6Home from "../../assets/Porojects/hotTakes/P6Home.png";
import P6Home1 from "../../assets/Porojects/hotTakes/P6Home1.png";
import P6Home2 from "../../assets/Porojects/hotTakes/P6Home2.png";
import P6Home3 from "../../assets/Porojects/hotTakes/P6Home3.png";

import KanapHome from "../../assets/Porojects/kanap/KanapHome.png";
import KanapHome1 from "../../assets/Porojects/kanap/KanapHome1.png";
import KanapHome2 from "../../assets/Porojects/kanap/KanapHome2.png";
import KanapHome3 from "../../assets/Porojects/kanap/KanapHome3.png";

const projects = [
  {
    title: "Kasa",
    description: "Application React pour trouver une maison de vacances",
    imageUrl: KasaHome,
    link: "https://github.com/zain9191/P7-Kasa",
    tools: ["JavaScript", "CSS", "HTML", "React", "Node"],
    images: [KasaHome, Kasa1, Kasa2, Kasa3, Kasa4, Kasa5],
  },
  {
    title: "HotTakes",
    description: "Une application d'avis gastronomiques",
    imageUrl: P6Home,
    link: "https://github.com/zain9191/Web-Developer-P6",
    tools: ["TypeScript", "CSS", "HTML", "Angular", "Node"],
    images: [P6Home, P6Home1, P6Home2, P6Home3],
  },
  {
    title: "Kanap",
    description: "Un site web qui vend des Kanaps",
    imageUrl: KanapHome,
    link: "https://github.com/zain9191/P5-Dev-Web-Kanap",
    tools: ["JavaScript", "CSS", "HTML", "Node"],
    images: [KanapHome, KanapHome1, KanapHome2, KanapHome3],
  },
  {
    title: "La Panthère",
    description: "L'agence est spécialisée dans le design web.",
    imageUrl: PantherHome,
    link: "https://github.com/zain9191/La-Panthere",
    tools: ["CSS", "HTML"],
    images: [PantherHome],
  },
];

const About = () => {
  return (
    <section id="IDabout">
      <div className="container">
        <div className="about-content">
          <div className="about-content__div__1">
            <p>Who Am I?</p>
            <p className="about-text__1p ">
              A dedicated frontend developer. <br />
              Specialize in creating modern, responsive web applications using
              React.js.
            </p>
            <br></br>
            <p>I built websites, let me know if you need one</p>
            <br />
          </div>

          <div className="about-content__div__2">
            <p className="about-content__div__2__p">What have I done?</p>

            <div className="about__grid">
              {projects.map((project, index) => (
                <div className="projects" key={index}>
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    imageUrl={project.imageUrl}
                    link={project.link}
                    tools={project.tools}
                    images={project.images}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

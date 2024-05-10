import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import SubTitle from "../subTitle/subTitle";
import KasaHome from "../../assets/Porojects/Kasa-home.png";
import P6Home from "../../assets/Porojects/P6Home.png";
import KanapHome from "../../assets/Porojects/KanapHome.png";
import PantherHome from "../../assets/Porojects/pantherHome.png";

const projects = [
  {
    title: "Kasa",
    description: "Application React pour trouver une maison de vacances",
    imageUrl: KasaHome,
    link: "https://github.com/zain9191/P7-Kasa",
    tools: ["JavaScript", "CSS", "HTML", "React", "Node"],
  },
  {
    title: "HotTakes",
    description: "Une application d'avis gastronomiques",
    imageUrl: P6Home,
    link: "https://github.com/zain9191/Web-Developer-P6",
    tools: ["TypeScript", "CSS", "HTML", "Angular", "Node"],
  },
  {
    title: "Kanap",
    description: "Un site web qui vend des Kanaps",
    imageUrl: KanapHome,
    link: "https://github.com/zain9191/P5-Dev-Web-Kanap",
    tools: ["JavaScript", "CSS", "HTML", "Node"],
  },
  {
    title: "La Panthère",
    description: "Un site web qui vend des Kanaps",
    imageUrl: PantherHome,
    link: "https://github.com/zain9191/La-Panthere",
    tools: ["CSS", "HTML"],
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
            <p>I bulied websites, let me know if you need one</p>

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

import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import SubTitle from "../subTitle/subTitle";
import KasaHome from "../../assets/Kasa-home.png";
import P6Home from "../../assets/P6Home.png";
import P5Home from "../../assets/KanapHome.png";

const About = () => {
  const Kasa = {
    title: "Kasa",
    description: "Application React pour trouver une maison de vacances",
    imageUrl: KasaHome,
    link: "https://github.com/zain9191/P7-Kasa",
    tools: ["JavaScript", "CSS", "HTML", "React", "Node"],
    // tools: ["JavaScript"],
  };
  const LaMaisonJungle = {
    title: "Piquante",
    description: "Une application d'avis gastronomiques",
    imageUrl: P6Home,
    link: "https://github.com/zain9191/Web-Developer-P6",
  };
  const Kanap = {
    title: "Kanap",
    description: "Un site web qui vendre des Kanaps",
    imageUrl: P5Home,
    link: "https://github.com/zain9191/P5-Dev-Web-Kanap",
  };

  return (
    <section id="about">
      <div className="container">
        <div className="about-content">
          <SubTitle />
          <p className="about-text__1p ">
            A dedicated frontend developer. <br />
            Specialize in creating modern, responsive web applications using
            React.js.
          </p>
          <br />
          <p>take a look at what i have created</p>
          <div className="about__grid">
            <div className="projects">
              <ProjectCard
                title={Kasa.title}
                description={Kasa.description}
                imageUrl={Kasa.imageUrl}
                link={Kasa.link}
                tools={Kasa.tools}
              />
            </div>{" "}
            {/* <div className="projects">
              <ProjectCard
                title={LaMaisonJungle.title}
                description={LaMaisonJungle.description}
                imageUrl={LaMaisonJungle.imageUrl}
                link={LaMaisonJungle.link}
              />
            </div>{" "}
            <div className="projects">
              <ProjectCard
                title={Kanap.title}
                description={Kanap.description}
                imageUrl={Kanap.imageUrl}
                link={Kanap.link}
              />
            </div> */}
            {/* <p>
              other than hat, I love explorering emerging technologies, and
              contributor to open-source projects, as always seeking to refine
              my skills.
            </p>
            <p>
              Let's collaborate to create exceptional digital experiences that
              leave a lasting impression. Feel free to browse through my
              portfolio and reach out – I'm excited to connect!
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

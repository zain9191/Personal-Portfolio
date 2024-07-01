import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

import PantherHomeSmall from "../../assets/Porojects/Panther/pantherHomeSmall.png";
import PantherHome from "../../assets/Porojects/Panther/pantherHome.png";
import PantherHome1 from "../../assets/Porojects/Panther/pantherHome1.png";
import PantherHome2 from "../../assets/Porojects/Panther/pantherHome2.png";
import PantherHome3 from "../../assets/Porojects/Panther/pantherHome3.png";

import KasaHomeSmall from "../../assets/Porojects//kasa/Kasa-home-s.png";
import KasaHome from "../../assets/Porojects//kasa/Kasa-home.png";
import Kasa1 from "../../assets/Porojects//kasa/Kasa-1.png";
import Kasa2 from "../../assets/Porojects//kasa/Kasa-2.png";
import Kasa3 from "../../assets/Porojects//kasa/Kasa-3.png";
import Kasa4 from "../../assets/Porojects//kasa/Kasa-4.png";
import Kasa5 from "../../assets/Porojects//kasa/Kasa-5.png";

import P6HomeSmall from "../../assets/Porojects/hotTakes/P6Home-s.png";
import P6Home from "../../assets/Porojects/hotTakes/P6Home.png";
import P6Home1 from "../../assets/Porojects/hotTakes/P6Home1.png";
import P6Home2 from "../../assets/Porojects/hotTakes/P6Home2.png";
import P6Home3 from "../../assets/Porojects/hotTakes/P6Home3.png";

import KanapHomeSmall from "../../assets/Porojects/kanap/KanapHomeSmall.png";
import KanapHome from "../../assets/Porojects/kanap/KanapHome.png";
import KanapHome1 from "../../assets/Porojects/kanap/KanapHome1.png";
import KanapHome2 from "../../assets/Porojects/kanap/KanapHome2.png";
import KanapHome3 from "../../assets/Porojects/kanap/KanapHome3.png";

const projects = [
  {
    title: "Kasa",
    description:
      "Kasa project is for a rental platform for properties, allowing users to browse and view detailed information about various rental options. Built with React, the application features a responsive design and smooth user interactions, including a carousel for property images, a detailed property description, and integrated tools for enhanced user experience.",
    subdescription: "Real Estate Rental Platform",
    imageUrl: KasaHomeSmall,
    link: "https://github.com/zain9191/P7-Kasa",
    tools: ["JavaScript", "CSS", "HTML", "React", "Node"],
    images: [KasaHome, Kasa1, Kasa2, Kasa3, Kasa4, Kasa5],
  },
  {
    title: "HotTakes",
    description:
      "HotTakes is a secure API for a gastronomic review application. Developed with Angular and Express, it includes user authentication, secure data handling, and responsive front-end features",
    subdescription: "Secure API for Gastronomic Reviews",

    imageUrl: P6HomeSmall,
    link: "https://github.com/zain9191/Web-Developer-P6",
    tools: ["TypeScript", "CSS", "HTML", "Angular", "Node"],
    images: [P6Home, P6Home1, P6Home2, P6Home3],
  },
  {
    title: "Kanap",
    description:
      "Kanap is an e-commerce website for selling customizable sofas. The project emphasizes JavaScript for dynamic content and user interaction, along with a robust backend for managing product information",
    subdescription: "E-commerce Website",

    imageUrl: KanapHomeSmall,
    link: "https://github.com/zain9191/P5-Dev-Web-Kanap",
    tools: ["JavaScript", "CSS", "HTML", "Node"],
    images: [KanapHome, KanapHome1, KanapHome2, KanapHome3],
  },
  {
    title: "La Panthère",
    description:
      "La Panthère is a project focused on improving the SEO of an existing website. The project includes optimizing content, improving page load speed, and ensuring a mobile-friendly design.",
    subdescription: "SEO Optimization Project",

    imageUrl: PantherHomeSmall,
    link: "https://github.com/zain9191/La-Panthere",
    tools: ["CSS", "HTML"],
    images: [PantherHome, PantherHome1, PantherHome2, PantherHome3],
    website: "https://zain9191.github.io/La-Panthere/",
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
                    subdescription={project.subdescription}
                    imageUrl={project.imageUrl}
                    link={project.link}
                    tools={project.tools}
                    images={project.images}
                    website={project.website}
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

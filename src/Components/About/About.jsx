import React, { useContext, useEffect, useRef } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { LanguageContext } from "../../Context/LanguageContext";

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

import HomeImg from "../../assets/HomeImg.png";

const projects = [
  {
    title: "Kasa",
    description: {
      en: "Kasa project is for a rental platform for properties, allowing users to browse and view detailed information about various rental options. Built with React, the application features a responsive design and smooth user interactions, including a carousel for property images, a detailed property description, and integrated tools for enhanced user experience.",
      fr: "Le projet Kasa est une plateforme de location de propriétés, permettant aux utilisateurs de parcourir et de consulter des informations détaillées sur diverses options de location. Construit avec React, l'application offre un design réactif et des interactions utilisateur fluides, comprenant un carrousel pour les images de propriété, une description détaillée de la propriété et des outils intégrés pour une expérience utilisateur améliorée.",
    },
    subdescription: {
      en: "Real Estate Rental Platform",
      fr: "Plateforme de location immobilière",
    },
    imageUrl: KasaHomeSmall,
    link: "https://github.com/zain9191/P7-Kasa",
    tools: ["JavaScript", "CSS", "HTML", "React", "Node"],
    images: [KasaHome, Kasa1, Kasa2, Kasa3, Kasa4, Kasa5],
  },
  {
    title: "HotTakes",
    description: {
      en: "HotTakes is a secure API for a gastronomic review application. Developed with Angular and Express, it includes user authentication, secure data handling, and responsive front-end features.",
      fr: "HotTakes est une API sécurisée pour une application de critique gastronomique. Développé avec Angular et Express, il inclut l'authentification des utilisateurs, la gestion sécurisée des données et des fonctionnalités front-end réactives.",
    },
    subdescription: {
      en: "Secure API for Gastronomic Reviews",
      fr: "API sécurisée pour critiques gastronomiques",
    },
    imageUrl: P6HomeSmall,
    link: "https://github.com/zain9191/Web-Developer-P6",
    tools: ["TypeScript", "CSS", "HTML", "Angular", "Node"],
    images: [P6Home, P6Home1, P6Home2, P6Home3],
  },
  {
    title: "Kanap",
    description: {
      en: "Kanap is an e-commerce website for selling customizable sofas. The project emphasizes JavaScript for dynamic content and user interaction, along with a robust backend for managing product information.",
      fr: "Kanap est un site e-commerce pour vendre des canapés personnalisables. Le projet met l'accent sur JavaScript pour le contenu dynamique et l'interaction utilisateur, ainsi qu'un backend robuste pour la gestion des informations sur les produits.",
    },
    subdescription: {
      en: "E-commerce Website",
      fr: "Site de commerce électronique",
    },
    imageUrl: KanapHomeSmall,
    link: "https://github.com/zain9191/P5-Dev-Web-Kanap",
    tools: ["JavaScript", "CSS", "HTML", "Node"],
    images: [KanapHome, KanapHome1, KanapHome2, KanapHome3],
  },
  {
    title: "La Panthère",
    description: {
      en: "La Panthère is a project focused on improving the SEO of an existing website. The project includes optimizing content, improving page load speed, and ensuring a mobile-friendly design.",
      fr: "La Panthère est un projet axé sur l'amélioration du référencement d'un site Web existant. Le projet comprend l'optimisation du contenu, l'amélioration de la vitesse de chargement des pages et l'assurance d'un design adapté aux mobiles.",
    },
    subdescription: {
      en: "SEO Optimization Project",
      fr: "Projet d'optimisation SEO",
    },
    imageUrl: PantherHomeSmall,
    link: "https://github.com/zain9191/La-Panthere",
    tools: ["CSS", "HTML"],
    images: [PantherHome, PantherHome1, PantherHome2, PantherHome3],
    website: "https://zain9191.github.io/La-Panthere/",
  },
];

const About = () => {
  const { language, translations } = useContext(LanguageContext);
  const introRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            imgRef.current.classList.add("animated");
            textRef.current.classList.add("about-text__animated");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (introRef.current) {
      observer.observe(introRef.current);
    }

    return () => {
      if (introRef.current) {
        observer.unobserve(introRef.current);
      }
    };
  }, []);

  return (
    <section id="IDabout">
      <div className="container">
        <div className="about-content">
          <div className="about-content__div__1">
            <h2 className="underLine">{translations[language].about.whoAmI}</h2>

            <div className="about__intro" ref={introRef}>
              <img
                src={HomeImg}
                className="about__img"
                alt="Portfolio"
                ref={imgRef}
              />
              <div ref={textRef} className="about-text">
                <p className="about-text__1p">
                  {translations[language].about.developerDescription}
                </p>
                <p>{translations[language].about.buildWebsites}</p>
              </div>
            </div>
          </div>

          <div className="about-content__div__2">
            <p className="about-content__div__2__p underLine">
              {translations[language].about.whatHaveIDone}
            </p>
            <div className="about__grid">
              {projects.map((project, index) => (
                <div className="projects" key={index}>
                  <ProjectCard
                    title={project.title}
                    description={project.description[language]}
                    subdescription={project.subdescription[language]}
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

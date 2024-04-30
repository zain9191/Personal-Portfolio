import React from "react";
import ProjectCard from "../Card/card";
import KasaHome from "../../assets/Kasa-home.png";

const About = () => {
  const Kasa = {
    title: "Kasa",
    description: "Application React pour trouver une maison de vacances",
    imageUrl: KasaHome,
    link: "https://github.com/zain9191/P7-Kasa",
  };

  return (
    <section id="about">
      <div className="container">
        <div className="about-content">
          <h2 className="about-content__h2">Get to Know</h2>

          <div className="about-text">
            <p className="about-text__1p">
              Hi there! I'm Zain Frayha, a dedicated frontend developer. I
              specialize in creating modern, responsive web applications using
              React.js.
            </p>
            <div className="projects">
              <ProjectCard
                title={Kasa.title}
                description={Kasa.description}
                imageUrl={Kasa.imageUrl}
                link={Kasa.link}
              />
            </div>
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

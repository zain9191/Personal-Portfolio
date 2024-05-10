import React from "react";
import githubLogo from "../../assets/Logos/githubLogo.png";
import toolLogos from "../ToolLogos/toolLogos";

const ProjectCard = ({ title, description, imageUrl, link, tools = [] }) => {
  // console.log("Tool Logos:", toolLogos);

  return (
    <div className="project-a__card">
      <img src={imageUrl} alt={title} className="project-a__img" />
      <div className="project-a__details">
        <h3 className="project-a__card__h3">{title}</h3>
        <p className="project-a__card__description">{description}</p>

        <div className="project-a__tools">
          <span> built with:</span>
          <div className="project-a__tools--logos">
            {tools.map((tool, index) => (
              <span key={index} className="tool">
                <img src={toolLogos[tool]} alt={tool} className="tool-logo" />
                <br />
              </span>
            ))}
          </div>
        </div>

        <a
          className="project-a__link"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubLogo} alt="GitHub Logo" className="gitLogo" />
          Link to Github
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

import React from "react";

const ProjectCard = ({ title, description, imageUrl, link }) => {
  return (
    <a href="#" className="project-link">
      <div className="project-link__card">
        <img src={imageUrl} alt={title} className="project-link__img" />
        <div className="project-link__card__details">
          <h3>{title}</h3>
          <p>{description}</p>
          <a
            className="project-link__link"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Link to Github
          </a>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;

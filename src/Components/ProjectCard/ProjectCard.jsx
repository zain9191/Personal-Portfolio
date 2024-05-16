import React, { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import githubLogo from "../../assets/Logos/githubLogo.png";
import toolLogos from "../ToolLogos/toolLogos";

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "90%",
    maxHeight: "90%",
    position: "relative",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

const ProjectCard = ({ title, description, imageUrl, link, tools = [] }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
    document.querySelector("header").classList.add("hidden");
  };

  const closeModal = () => {
    setModalIsOpen(false);
    document.querySelector("header").classList.remove("hidden");
  };

  return (
    <div className="project-a__card">
      <img
        src={imageUrl}
        alt={title}
        className="project-a__img"
        onClick={openModal}
      />
      <div className="project-a__details">
        <h3 className="project-a__card__h3 project-title-hover">{title}</h3>
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

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Image Preview"
      >
        <button onClick={closeModal} className="modal-close-button">
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <img
          src={imageUrl}
          alt={title}
          style={{ width: "100%", height: "100%" }}
        />
      </Modal>
    </div>
  );
};

export default ProjectCard;

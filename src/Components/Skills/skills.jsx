// src/Components/Skills/skills.jsx
import React, { useContext } from "react";
import LanguageAnimator from "../LanguageAnimator/languageAnimator";
import SubTitle from "../subTitle/subTitle";
import { LanguageContext } from "../../Context/LanguageContext";

const Skills = () => {
  const { language, translations } = useContext(LanguageContext);
  const programmingLanguages = [
    "JavaScript",
    "Python",
    "CSS 3",
    "JQuery",
    "Angular",
    "NPM",
    "Postman",
    "Rest",
    "Json",
    "HTML",
    "SCSS",
    "TypeScript",
    "Express.js",
    "Git",
    "MongoDB",
    "Vue.js",
  ];

  return (
    <div className="skills" id="IDskills">
      <div className="skills__div__1">
        <SubTitle text={translations[language].skills.thingsIUse} />
      </div>
      <div className="skills__div__2">
        <LanguageAnimator languages={programmingLanguages} />
      </div>
    </div>
  );
};

export default Skills;

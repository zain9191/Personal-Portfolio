import React from "react";
import LanguageAnimator from "../LanguageAnimator/languageAnimator";
import SubTitle from "../subTitle/subTitle";

const Skills = () => {
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
    "Angular",
    "TypeScript",
    "Express.js",
    "Git",
    "MongoDB",
  ];

  return (
    <div className="skills" id="IDskills">
      <div className="skills__div__1">
        <SubTitle text=" THE THINGS THAT I USE:" />
      </div>
      <div className="skills__div__2">
        <LanguageAnimator languages={programmingLanguages} />
      </div>
    </div>
  );
};

export default Skills;

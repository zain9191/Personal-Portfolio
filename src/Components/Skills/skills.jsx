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
  ];

  return (
    <div className="skills">
      <div>
        <SubTitle text="the things that i use:" />
      </div>

      <div>
        <LanguageAnimator languages={programmingLanguages} />
      </div>
    </div>
  );
};

export default Skills;

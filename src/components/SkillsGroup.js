import React, { useState } from "react";
import skills from "../data/dataSkills";

const Skills = (props) => {
  const [showTechs, setShowTechs] = useState(false);

  const openCloseGroup = () => {
    if (!showTechs) {
      setShowTechs(true);
    } else if (showTechs) {
      setShowTechs(false);
    }
  };

  return (
    <div className="mb-8 md:mr-12 text-white">
      <button className="w-full" onClick={openCloseGroup}>
        <div className="grid grid-cols-skills items-center">
          <div className="text-red-600">{props.dataSkill.icon}</div>
          <div className="text-left">
            <p className="text-2xl font-serif">{props.dataSkill.name}</p>
            <p className="text-base text-gray-400">{props.dataSkill.years}</p>
          </div>
          <div className="text-right text-red-600">
            {showTechs ? props.dataSkill.arrowUp : props.dataSkill.arrowDown}
          </div>
        </div>
      </button>
      <div className={showTechs ? "grid grid-cols-skills block" : "hidden"}>
        <div></div>
        <div className="col-span-2">
          {props.dataSkill.techs.map((tech) => {
            return (
              <div
                key={tech.id}
                className="grid grid-cols-2 grid-rows-1 items-center pt-4"
              >
                <p className="font-serif text-lg">{tech.name}</p>
                <p className="text-base text-right">{tech.percents}</p>
                <div className="col-span-2">
                  <div className="overflow-hidden h-1.5 mb-4 text-xs flex rounded bg-red-300">
                    <div
                      style={{ width: tech.percents }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-600"
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const SkillsGroup = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-max">
      {skills.map((skill) => {
        return <Skills key={skill.id} dataSkill={skill} />;
      })}
    </div>
  );
};

export default SkillsGroup;

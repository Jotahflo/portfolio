import React from "react";
import skills from "../data/dataSkills";

const SkillsGroup = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-max">
      {skills.map((skill) => {
        return (
          <div
            key={skill.id}
            className="mb-4 md:mr-4 bg-gray-200 p-4 rounded-xl"
          >
            <div className="grid grid-cols-skills items-center pb-2">
              <div className="text-red-600">{skill.icon}</div>
              <p className="text-2xl font-serif text-left">{skill.name}</p>
            </div>
            <p className="text-base text-gray-500">{skill.desc}</p>
            <div className="pt-2">
              {skill.techs.map((tech) => {
                return (
                  <div
                    key={tech.id}
                    className="grid grid-cols-2 grid-rows-1 items-center"
                  >
                    <p className="font-serif text-lg">{tech.name}</p>
                    <p className="text-base text-right text-gray-500">
                      {tech.percents}
                    </p>
                    <div className="col-span-2">
                      <div className="overflow-hidden h-1.5 mb-4 flex rounded bg-red-300">
                        <div
                          style={{ width: tech.percents }}
                          className="shadow-none flex flex-col whitespace-nowrap justify-center bg-red-600"
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsGroup;

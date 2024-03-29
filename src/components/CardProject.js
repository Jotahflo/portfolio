import React from "react";
import projects from "../data/dataProjects";

const CardProject = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-max">
      {projects.map((project) => {
        return (
          <div key={project.id} className="bg-gray-700 rounded-xl p-4 mb-4 md:mr-4 shadow-sm">
            <div className="grid grid-cols-2 grid-rows-1 items-center">
              <div className="mr-2">
                <img src={project.icon} alt={project.name} width={project.size} />
              </div>
              <div>
                <p className="text-2xl text-white font-serif mb-2">{project.name}</p>
                <p className="text-base text-gray-400">{project.desc}</p>
              </div>
              <div className="col-span-2 text-right mt-2">
                <a className="text-red-600 font-medium" href={project.url}>
                  Go to Project
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardProject;

import React from "react";
import projects from "../data/dataProjects";

const SkillsGroup = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-max">
      {
        projects.map((data, key) => {
          return (
            <div key={key} className="bg-gray-200 rounded-xl p-4 mb-4 md:mr-4 shadow-sm">
              <div className="grid grid-cols-2 grid-rows-1 items-center">
                <div className="pr-2">
                  <img src={data.icon} alt={data.name}/>
                </div>
                <div>
                  <p className="text-2xl font-serif pb-2">{data.name}</p>
                  <p className="text-base text-gray-500">{data.desc}</p>
                </div>
                <div className="col-span-2 text-right pt-2 md:pt-0">
                  <a className="text-red-600 font-medium" href={data.url}>Go to Project</a>
                </div>
              </div>
            </div>
          );
        })
      }
    </div>
  )
}

export default SkillsGroup;
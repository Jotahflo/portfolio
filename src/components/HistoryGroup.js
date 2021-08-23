import React from "react";
import history from "../data/dataHistory";

const HistoryGroup = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-max">
      {history.map((data) => {
        return (
          <div className="mb-8 md:mr-12 text-white">
            <div className="grid grid-cols-skills items-center">
              <div className="text-red-600">{data.icon}</div>
              <div className="text-left">
                <p className="text-2xl font-serif">{data.year}</p>
                <p className="text-base text-gray-400">{data.desc}</p>
              </div>
            </div>
            <div className="grid grid-cols-skills">
              <div></div>
              <div></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceGroup;

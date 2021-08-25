import React from "react";
import history from "../data/dataHistory";

const HistoryGroup = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {history.map((data) => {
        return (
          <div
            key={data.id}
            className="flex flex-col md:flex-row justify-start items-center md:mb-4"
          >
            <div className="bg-gray-700 rounded-xl shadow-sm p-4 h-full w-full">
              <p className="mb-3 font-serif text-white text-2xl text-center">
                {data.year}
              </p>
              <p className="text-base text-gray-400">{data.desc}</p>
            </div>
            {data.id < history.length && (
              <div className="flex flex-col md:flex-row items-center">
                <div className="border border-2-2 border-opacity-50 border-red-600 h-5 md:h-0 md:w-5 shadow-sm"></div>
                <div className="bg-red-600 shadow-sm w-6 h-6 rounded-full"></div>
                <div className="border border-2-2 border-opacity-50 border-red-600 h-5 md:h-0 md:w-5 shadow-sm"></div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default HistoryGroup;

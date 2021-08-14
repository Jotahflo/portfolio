import React from "react";

const CardProject = (props) => {
  return (
    <div className="bg-gray-200 rounded p-4 mb-4 md:mr-4 shadow-sm">
        <p className="text-2xl font-serif pb-2">{props.titleProject}</p>
        <p className="text-base text-gray-500">{props.descProject}</p>
    </div>
  );
}

export default CardProject;
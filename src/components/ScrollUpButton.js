import React from "react";

const ScrollUpButton = (props) => {

  const classButton = "border rounded border-red-600 text-red-600 hover:bg-red-600 hover:text-white p-4 grid items-center grid-cols-" + props.gridColsClass

  return (
      <div>
        <button className={classButton}>
            <div className="font-medium">
                {props.titleButton}
            </div>
            <div>
                {props.iconButton}
            </div>
        </button>
      </div>
  );
}

export default ScrollUpButton;
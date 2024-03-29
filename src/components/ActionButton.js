import React from "react";

const ActionButton = (props) => {
  return (
    <div className={props.styleDivMaster}>
      <button
        className="rounded bg-red-600 hover:bg-red-700 text-white p-4 flex flex-row items-center"
        onClick={props.action}
      >
        <p className="font-medium mr-4">{props.titleButton}</p>
        {props.iconButton}
      </button>
    </div>
  );
};

export default ActionButton;

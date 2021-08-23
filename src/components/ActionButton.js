import React from "react";

const ActionButton = (props) => {
  return (
    <div className={props.styleDivMaster}>
      <button
        className="border rounded border-red-600 text-red-600 hover:bg-red-600 hover:text-white p-4 flex flex-row items-center"
        onClick={() => props.setShowModal(true)}
      >
        <p className="font-medium pr-4">{props.titleButton}</p>
        {props.iconButton}
      </button>
    </div>
  );
};

export default ActionButton;

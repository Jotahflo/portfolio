import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ScrollDownButton = (props) => {
  const scrollDown = () => {
    let elementSeccion = document.getElementById(props.nameIdScroll);
    elementSeccion.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="hidden md:block container mx-auto w-screen"
      onClick={scrollDown}
    >
      <div className="absolute bottom-20 lg:bottom-12">
        <button className={props.classButton}>
          <div className="pr-4 text-red-600">
            <FontAwesomeIcon icon="mouse" size="lg" />
          </div>
          <div className="font-medium pr-4">Scroll Down</div>
          <div className="text-red-600">
            <FontAwesomeIcon icon="arrow-down" size="lg" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default ScrollDownButton;

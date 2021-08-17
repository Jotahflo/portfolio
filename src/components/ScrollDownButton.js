import React from "react";

const ScrollDownButton = (props) => {

  const scrollDown = () =>{
    let elementSeccion = document.getElementById(props.nameIdScroll)
    elementSeccion.scrollIntoView({behavior: 'smooth'})
  };

  return (
    <div className="hidden md:block container mx-auto w-screen" onClick={scrollDown}>
      <div className="absolute bottom-20 lg:bottom-12">
        <button className={props.classButton}>
          <div className="pr-4 text-red-600">{props.iconButtonLeft}</div>
          <div className="font-medium pr-4">Scroll Down</div>
          <div className="text-red-600">{props.iconButtonRight}</div>
        </button>
      </div>
    </div>
  );
}

export default ScrollDownButton;
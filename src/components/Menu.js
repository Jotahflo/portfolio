import React from "react";

const Menu = (props) => {
  return (
    <div className="bg-gray-800 py-4 fixed bottom-0 lg:bottom-auto lg:top-0 w-screen z-10">
      <div className="container mx-auto grid grid-cols-2 text-white">
        <p className="text-xl font-serif">Juan</p>
        <div className="flex flex-row justify-end items-start">
          <div className="pr-6 md:pr-8 flex flex-row items-center">
            <div className="md:pr-2 text-red-600">{props.iconProjects}</div>
            <p className="text-xl font-serif hidden md:block">Projects</p>
          </div>
          <div className="pr-6 md:pr-8 flex flex-row items-center">
            <div className="md:pr-2 text-red-600">{props.iconAbout}</div>
            <p className="text-xl font-serif hidden md:block">About</p>
          </div>
          <div className="flex flex-row items-center">
            <div className="md:pr-2 text-red-600">{props.iconContact}</div>
            <p className="text-xl font-serif hidden md:block">Contact</p>
          </div>
        </div>
      </div >
    </div>
  );
}

export default Menu;
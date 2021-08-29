import React, { useState } from "react";
import { Link } from "react-router-dom";
import Contact from "../components/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="bg-gray-800 py-4 fixed bottom-0 lg:bottom-auto lg:top-0 w-screen z-10">
        <div className="container mx-auto grid grid-cols-2 text-white">
          <p className="text-xl font-serif">Juan</p>
          <div className="flex flex-row justify-end items-start">
            <Link to="/portfolio">
              <button className="mr-6 md:mr-8 flex flex-row items-center">
                <div className="md:mr-2 text-red-600">
                  <FontAwesomeIcon icon="briefcase" size="lg" />
                </div>
                <p className="text-xl font-serif hidden md:block">Projects</p>
              </button>
            </Link>
            <Link to="/portfolio/about">
              <button className="mr-6 md:mr-8 flex flex-row items-center">
                <div className="md:mr-2 text-red-600">
                  <FontAwesomeIcon icon="user" size="lg" />
                </div>
                <p className="text-xl font-serif hidden md:block">About</p>
              </button>
            </Link>
            <button
              className="flex flex-row items-center"
              onClick={() => setShowModal(true)}
            >
              <div className="md:mr-2 text-red-600">
                <FontAwesomeIcon icon="envelope" size="lg" />
              </div>
              <p className="text-xl font-serif hidden md:block">Contact</p>
            </button>
          </div>
        </div>
      </div>
      {showModal ? <Contact setShowModal={setShowModal} /> : null}
    </>
  );
};

export default Menu;

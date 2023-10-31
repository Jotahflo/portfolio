import React, { useState, Fragment } from "react";
import Contact from "../components/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
      <div className="bg-gray-800 py-4 fixed bottom-0 lg:bottom-auto lg:top-0 w-screen z-10">
        <div className="container mx-auto grid grid-cols-2 text-white">
          <p className="text-xl font-serif">Juan Flores</p>
          <div className="flex flex-row justify-end items-start">
            <button className="flex flex-row items-center" onClick={() => setShowModal(true)}>
              <div className="md:mr-2 text-red-600">
                <FontAwesomeIcon icon="envelope" size="lg" />
              </div>
              <p className="text-xl font-serif hidden md:block">Contact Me</p>
            </button>
          </div>
        </div>
      </div>
      {showModal ? <Contact setShowModal={setShowModal} /> : null}
    </Fragment>
  );
};

export default Menu;

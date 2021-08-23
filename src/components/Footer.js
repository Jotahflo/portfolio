import React, { useState } from "react";
import ActionButton from "../components/ActionButton";
import Contact from "../components/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div id="sectionFooter" className="bg-gray-800">
        <div className="container mx-auto pt-10 pb-20 grid grid-cols-1 md:grid-cols-2 h-full">
          <div>
            <p className="text-4xl text-white font-serif pb-2">Juan</p>
            <p className="text-base text-gray-400 leading-normal pb-10">
              Desarrollador Frontend
            </p>
          </div>
          <ActionButton
            titleButton="Contact Me"
            iconButton={<FontAwesomeIcon icon="envelope" size="lg" />}
            styleDivMaster="md:flex md:justify-end md:items-start"
            setShowModal={setShowModal}
          />
        </div>
      </div>
      {showModal ? <Contact setShowModal={setShowModal} /> : null}
    </>
  );
};

export default Footer;

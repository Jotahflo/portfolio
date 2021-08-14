import React from "react";
import ActionButton from '../components/ActionButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const iconEnvelope = <FontAwesomeIcon icon={faEnvelope} size="lg" />

const Footer = () => {
  return (
    <div className="bg-gray-800">
        <div className="container pt-10 pb-10 grid grid-cols-1 md:grid-cols-2 mx-auto h-full">
            <div>
                <p className="text-4xl text-white font-serif pb-2">Juan</p>
                <p className="text-base text-gray-400 leading-normal pb-10">Desarrollador Frontend</p>
            </div>
            <ActionButton titleButton="Contáctame" iconButton={iconEnvelope} gridColsClass="contacto-button" styleDivMaster="md:flex md:justify-end md:items-start" />
        </div>
    </div>
  );
}

export default Footer;
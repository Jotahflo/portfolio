import React from "react";
import './home.css';
import logo from '../Jotah-2020.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const icon = <FontAwesomeIcon icon={faUser} />

const Home = () => {
  return (
    <div className="lg:container lg:mx-auto px-4 bg-gray-100">
      <div>
        <img src={logo} alt='Logo'/>
      </div>
      <p>Hola, soy Juan</p>
      <p>Desarrollador Frontend</p>
      <p>Tengo gran conocimiento en el area de informatica y años de experiencia, trabajando con tecnologias web, mobile y diseño UI/UX, tanto en frontend, como en backend.</p>
      <div>
        <button className="border-2 border-red-600 hover:bg-red-600 text-red-600 hover:text-white">Que puedo ofrecerte {icon}</button>
      </div>
    </div>
  );
}

export default Home;

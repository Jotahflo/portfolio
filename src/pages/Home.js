import React from "react";
// import './home.css';
import ActionButton from '../components/ActionButton';
import Footer from '../components/Footer';
import CardProject from '../components/CardProject';
import logo from '../Jotah-2020.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const iconUser = <FontAwesomeIcon icon={faUser} size="lg" />
//TODO: Colocar api para proyecto y cambiar h-screen segun la cantidad de proyectos
const Home = () => {
  return (
    <div>
      <div className="bg-gray-800">
        <div className="container pt-4 pb-10 grid grid-cols-1 md:grid-cols-2 mx-auto items-center justify-items-center h-screen">
          <div className="md:order-2 py-4 lg:w-4/5">
            <img src={logo} alt='Logo'/>
          </div>
          <div className="md:order-1">
            <p className="text-4xl text-white font-serif pb-3">Hola, soy Juan</p>
            <p className="text-xl text-gray-200 font-medium pb-3">Desarrollador Frontend</p>
            <p className="text-base text-gray-400 pb-4">Tengo gran conocimiento en el area de informatica y años de experiencia, trabajando con tecnologias web, mobile y diseño UI/UX, tanto en frontend, como en backend.</p>
            <ActionButton titleButton="Que puedo ofrecerte" iconButton={iconUser} styleDivMaster="md:flex" />
          </div>
        </div>
      </div>
      <div>
        <div className="container pt-12 pb-12 mx-auto h-screen">
          <div className="pb-10 text-center">
            <p className="text-4xl font-serif pb-1">Proyectos</p>
            <p className="text-base text-gray-500">Mis trabajos mas recientes</p>
          </div>
          <div className="grid grid-cols-3 items-center text-center pb-10 md:px-40 xl:px-96">
              <p className="text-3xl font-serif">02+</p>
              <p className="text-3xl font-serif">05+</p>
              <p className="text-3xl font-serif">01+</p>
              <p className="text-sm text-gray-500">Años de experiencia</p>
              <p className="text-sm text-gray-500">Projectos completos</p>
              <p className="text-sm text-gray-500">Empresas trabajadas</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-max"> 
            <CardProject titleProject="Finansi" descProject="Videojuego de gestion empresarial, con compra y venta de bienes, prestamos bancarios y distintos inmuebles." />
            <CardProject titleProject="Contabilidad" descProject="Software multidispositivo para gestionar la contabilidad de las empresas, sin mucho conocimientos." />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
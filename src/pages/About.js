import React from "react";
import Footer from '../components/Footer';
import CardProject from '../components/CardProject';
import ScrollDownButton from '../components/ScrollDownButton';
import ScrollUpButton from '../components/ScrollUpButton';
import Menu from '../components/Menu';
import photoJF from '../images/photo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUser, faMouse, faArrowUp, faArrowDown, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const iconUser = <FontAwesomeIcon icon={faUser} size="lg" />
const iconMouse = <FontAwesomeIcon icon={faMouse} size="lg" />
const iconArrowDown = <FontAwesomeIcon icon={faArrowDown} size="lg" />
const iconArrowUp = <FontAwesomeIcon icon={faArrowUp} size="lg" />
const iconBriefcase = <FontAwesomeIcon icon={faBriefcase} size="lg" />
const iconEnvelope = <FontAwesomeIcon icon={faEnvelope} size="lg" />

//TODO: Colocar api para proyecto y cambiar h-screen segun la cantidad de proyectos
const About = () => {
  return (
    <div>
      <Menu iconProjects={iconBriefcase} iconAbout={iconUser} iconContact={iconEnvelope} />
      <ScrollUpButton iconButton={iconArrowUp}/>
      <ScrollDownButton iconButtonLeft={iconMouse} iconButtonRight={iconArrowDown} nameIdScroll="sectionSkills" classButton="p-4 flex flex-row" />
      <div id="sectionAbout">
        <div className="container mx-auto pt-4 pb-8 grid grid-cols-1 md:grid-cols-2 items-center justify-items-center h-full md:h-screen w-screen">
          <div className="md:order-1 pb-4 lg:w-4/5">
            <img className="border-2 border-gray-500 rounded-3xl shadow-sm" src={photoJF} alt='Photo Juan Flores'/>
          </div>
          <div className="md:order-2">
            <p className="text-4xl font-serif pb-3">I'm Juan, a web developer who wants to help create functional and quality.</p>
            <p className="text-base text-gray-500 pb-4">During the last two years, I have worked on the creation and maintenance of modules for the Claroline platform, using mainly: Figma, PHP and JavaScript. I have more knowledge developing at the Frontend level, but it is also possible for me to develop at the Backend level.</p>
            <p className="text-base text-gray-500 pb-4">Before starting on my path as a developer, I was working many years working as a company's accountant, which, I learned a lot about income statement processes.</p>
            <p className="text-base text-gray-500 pb-4">In my free time, I play a lot of video games, so one of my greatest goals, is to develop some professionally.</p>
          </div>
        </div>
      </div>
      <div id="sectionSkills" className="bg-gray-800">
        <div className="container mx-auto pt-12 lg:pt-24 pb-12 h-screen">
          <div className="pb-10 text-center">
            <p className="text-4xl font-serif text-white pb-1">Skills</p>
            <p className="text-base text-white">My technical level</p>
          </div>
          <CardProject />
        </div>
      </div>
      <div id="sectionExperiences">
        <div className="container mx-auto pt-12 lg:pt-24 pb-12 h-screen">
          <div className="pb-10 text-center">
            <p className="text-4xl font-serif pb-1">Experiences</p>
            <p className="text-base text-gray-500">My personal trip</p>
          </div>
          <CardProject />
        </div>
      </div>
      <Footer iconContact={iconEnvelope} />
    </div>
  );
}

export default About;
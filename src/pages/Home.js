import React from "react";
import Footer from "../components/Footer";
import CardProject from "../components/CardProject";
import ScrollDownButton from "../components/ScrollDownButton";
import ScrollUpButton from "../components/ScrollUpButton";
import SkillsGroup from "../components/SkillsGroup";
import HistoryGroup from "../components/HistoryGroup";
import Menu from "../components/Menu";
import logoJF from "../images/logoJF.png";
import photoJF from "../images/photoJF.jpg";

//TODO: Dejar h-full en la seccion Projects cuando haya mas de 3 proyectos
const Home = () => {
  let heightScreen = window.screen.height;
  let classSmallHeight = "md:h-screen";
  if (heightScreen < 600) {
    classSmallHeight = "mt-16";
  }
  return (
    <div>
      <Menu />
      <ScrollUpButton />
      <ScrollDownButton nameIdScroll="sectionProjects" classButton="text-white p-4 flex flex-row" />
      <div id="sectionHome" className="bg-gray-800">
        <div className="container mx-auto pt-4 pb-8 grid grid-cols-1 md:grid-cols-2 items-center justify-items-center h-full md:h-screen w-screen">
          <div className="md:order-2 mb-4 lg:w-4/5 text-white">
            <img src={logoJF} alt="JF" />
          </div>
          <div className="md:order-1">
            <p className="text-4xl text-white font-serif mb-2">Hello, I'm Juan Flores</p>
            <p className="text-xl text-gray-400 font-medium mb-4">Software Developer</p>
            <p className="text-base text-gray-400 mb-4">
              I have great knowledge and years of experience in the computer area, where I have worked with web technologies, in the Frontend and
              Backend field.
            </p>
          </div>
        </div>
      </div>
      <div id="sectionAbout">
        <div
          className={
            "container mx-auto py-8 grid grid-cols-1 auto-rows-min lg:grid-cols-2 lg:auto-rows-auto items-center justify-items-center h-full " +
            classSmallHeight
          }>
          <div className="md:order-1 mb-4 xl:ml-40 sm:w-4/5 md:w-5/12 lg:w-4/5 xl:w-3/5">
            <img className="border-2 border-gray-500 rounded-3xl shadow-sm" src={photoJF} alt="Juan Flores" />
          </div>
          <div className="md:order-2 xl:mr-40">
            <p className="text-4xl font-serif mb-3">I want to help create app with quality based in design and optimization.</p>
            <p className="text-base text-gray-500 mb-4">
              I am a developer with more than 4 years of experience who has worked with web applications, using: <br />
              JavaScript, ReactJS, VueJS, PHP, SQL, C# and .Net Framework.
            </p>
            <p className="text-base text-gray-500 mb-4">
              Before starting on my path as a developer, I was working many years working as a company's accountant, which, I learned a lot about
              income statement processes.
            </p>
            <p className="text-base text-gray-500 mb-4">
              I am a person who takes care of the details, likes challenges and learning new things in the area of IT. In my free time, I play video
              games, so one of my greatest goals, is to develop some professionally.
            </p>
          </div>
        </div>
      </div>
      <div id="sectionProjects" className="bg-gray-800">
        <div className="container mx-auto pt-12 lg:pt-24 pb-12 h-full md:h-screen">
          <div className="mb-10 text-center">
            <p className="text-4xl text-white font-serif mb-1">Projects</p>
            <p className="text-base text-gray-400">My most recent jobs</p>
          </div>
          <div className="grid grid-cols-3 items-center text-center mb-10 md:mx-28 lg:mx-48 xl:mx-96">
            <p className="text-3xl text-white font-serif">04+</p>
            <p className="text-3xl text-white font-serif">06</p>
            <p className="text-3xl text-white font-serif">03</p>
            <p className="text-sm text-gray-400">Years of experience</p>
            <p className="text-sm text-gray-400">Projects worked</p>
            <p className="text-sm text-gray-400">Companies worked</p>
          </div>
          <CardProject />
        </div>
      </div>
      <div id="sectionHistory">
        <div className="container mx-auto pt-12 lg:pt-24 pb-12 h-full xxl:h-screen">
          <div className="mb-10 text-center">
            <p className="text-4xl font-serif mb-1">History</p>
            <p className="text-base text-gray-500">My personal trip</p>
          </div>
          <HistoryGroup />
        </div>
      </div>
      <div id="sectionSkills" className="bg-gray-800">
        <div className="container mx-auto pt-12 lg:pt-24 pb-12 h-full xxl:h-screen">
          <div className="mb-10 text-center">
            <p className="text-4xl text-white font-serif mb-1">Skills</p>
            <p className="text-base text-gray-400">My technical level</p>
          </div>
          <SkillsGroup />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

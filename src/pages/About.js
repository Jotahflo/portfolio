import React from "react";
import Footer from "../components/Footer";
import SkillsGroup from "../components/SkillsGroup";
import HistoryGroup from "../components/HistoryGroup";
import ScrollDownButton from "../components/ScrollDownButton";
import ScrollUpButton from "../components/ScrollUpButton";
import Menu from "../components/Menu";
import photoJF from "../images/photoJF.jpg";

const About = () => {
  let heightScreen = window.screen.height;
  let classSmallHeight = "md:h-screen";
  if (heightScreen < 600) {
    classSmallHeight = "mt-16";
  }

  return (
    <div>
      <Menu />
      <ScrollUpButton />
      <ScrollDownButton nameIdScroll="sectionHistory" classButton="p-4 flex flex-row" />
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
            <p className="text-4xl font-serif mb-3">I'm Juan, a web developer who wants to help create functional and quality.</p>
            <p className="text-base text-gray-500 mb-4">
              During the last two years, I have worked on the creation and maintenance of modules for the Claroline platform, using mainly: Figma, PHP
              and JavaScript. I have more knowledge developing at the Frontend level, but it is also possible for me to develop at the Backend level.
            </p>
            <p className="text-base text-gray-500 mb-4">
              Before starting on my path as a developer, I was working many years working as a company's accountant, which, I learned a lot about
              income statement processes.
            </p>
            <p className="text-base text-gray-500 mb-4">
              In my free time, I play a lot of video games, so one of my greatest goals, is to develop some professionally.
            </p>
          </div>
        </div>
      </div>
      <div id="sectionHistory" className="bg-gray-800">
        <div className="container mx-auto pt-12 lg:pt-24 pb-12 h-full xxl:h-screen">
          <div className="mb-10 text-center">
            <p className="text-4xl text-white font-serif mb-1">History</p>
            <p className="text-base text-gray-400">My personal trip</p>
          </div>
          <HistoryGroup />
        </div>
      </div>
      <div id="sectionSkills">
        <div className="container mx-auto pt-12 lg:pt-24 pb-12 h-full xxl:h-screen">
          <div className="mb-10 text-center">
            <p className="text-4xl font-serif mb-1">Skills</p>
            <p className="text-base text-gray-500">My technical level</p>
          </div>
          <SkillsGroup />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;

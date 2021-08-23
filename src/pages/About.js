import React from "react";
import Footer from "../components/Footer";
import SkillsGroup from "../components/SkillsGroup";
import ScrollDownButton from "../components/ScrollDownButton";
import ScrollUpButton from "../components/ScrollUpButton";
import Menu from "../components/Menu";
import photoJF from "../images/photoJF.jpg";

const About = () => {
  return (
    <div>
      <Menu />
      <ScrollUpButton />
      <ScrollDownButton
        nameIdScroll="sectionHistory"
        classButton="p-4 flex flex-row"
      />
      <div id="sectionAbout">
        <div className="container mx-auto py-8 grid grid-cols-1 auto-rows-min lg:grid-cols-2 lg:auto-rows-auto items-center justify-items-center h-full md:h-screen">
          <div className="md:order-1 pb-4 xl:ml-40 sm:w-4/5 md:w-5/12 lg:w-4/5 xl:w-3/5">
            <img
              className="border-2 border-gray-500 rounded-3xl shadow-sm"
              src={photoJF}
              alt="Juan Flores"
            />
          </div>
          <div className="md:order-2 xl:mr-40">
            <p className="text-4xl font-serif pb-3">
              I'm Juan, a web developer who wants to help create functional and
              quality.
            </p>
            <p className="text-base text-gray-500 pb-4">
              During the last two years, I have worked on the creation and
              maintenance of modules for the Claroline platform, using mainly:
              Figma, PHP and JavaScript. I have more knowledge developing at the
              Frontend level, but it is also possible for me to develop at the
              Backend level.
            </p>
            <p className="text-base text-gray-500 pb-4">
              Before starting on my path as a developer, I was working many
              years working as a company's accountant, which, I learned a lot
              about income statement processes.
            </p>
            <p className="text-base text-gray-500 pb-4">
              In my free time, I play a lot of video games, so one of my
              greatest goals, is to develop some professionally.
            </p>
          </div>
        </div>
      </div>
      <div id="sectionHistory" className="bg-gray-800">
        <div className="container mx-auto pt-12 lg:pt-24 pb-12 h-full lg:h-screen">
          <div className="pb-10 text-center">
            <p className="text-4xl text-white font-serif pb-1">History</p>
            <p className="text-base text-gray-400">My personal trip</p>
          </div>
        </div>
      </div>
      <div id="sectionSkills">
        <div className="container mx-auto pt-12 lg:pt-24 pb-12 h-full lg:h-screen">
          <div className="pb-10 text-center">
            <p className="text-4xl font-serif pb-1">Skills</p>
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
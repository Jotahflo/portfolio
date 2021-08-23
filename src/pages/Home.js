import React from "react";
import ActionButton from "../components/ActionButton";
import Footer from "../components/Footer";
import CardProject from "../components/CardProject";
import ScrollDownButton from "../components/ScrollDownButton";
import ScrollUpButton from "../components/ScrollUpButton";
import Menu from "../components/Menu";
import logoJF from "../images/Jotah2020.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <div>
      <Menu />
      <ScrollUpButton />
      <ScrollDownButton
        nameIdScroll="sectionProjects"
        classButton="text-white p-4 flex flex-row"
      />
      <div id="sectionHome" className="bg-gray-800">
        <div className="container mx-auto pt-4 pb-8 grid grid-cols-1 md:grid-cols-2 items-center justify-items-center h-full md:h-screen w-screen">
          <div className="md:order-2 pb-4 lg:w-4/5">
            <img src={logoJF} alt="JF" />
          </div>
          <div className="md:order-1">
            <p className="text-4xl text-white font-serif pb-s3">
              Hello, I'm Juan
            </p>
            <p className="text-xl text-gray-200 font-medium pb-3">
              Frontend Developer
            </p>
            <p className="text-base text-gray-400 pb-4">
              I have great knowledge in the Area of Informatica and Years of
              Experience, working with Web and Mobile technologies, both in
              Frontend, and Backend.
            </p>
            <ActionButton
              titleButton="What can I offer?"
              iconButton={<FontAwesomeIcon icon="user" size="lg" />}
              styleDivMaster="md:flex"
            />
          </div>
        </div>
      </div>
      <div id="sectionProjects">
        <div className="container mx-auto pt-12 lg:pt-24 pb-12 h-full md:h-screen">
          <div className="pb-10 text-center">
            <p className="text-4xl font-serif pb-1">Projects</p>
            <p className="text-base text-gray-500">My most recent jobs</p>
          </div>
          <div className="grid grid-cols-3 items-center text-center pb-10 md:px-28 lg:px-48 xl:px-96">
            <p className="text-3xl font-serif">02+</p>
            <p className="text-3xl font-serif">05+</p>
            <p className="text-3xl font-serif">01+</p>
            <p className="text-sm text-gray-500">Years of experience</p>
            <p className="text-sm text-gray-500">Complete projects</p>
            <p className="text-sm text-gray-500">Companies worked</p>
          </div>
          <CardProject />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

import React from "react";
import ActionButton from "../components/ActionButton";
import Footer from "../components/Footer";
import CardProject from "../components/CardProject";
import ScrollDownButton from "../components/ScrollDownButton";
import ScrollUpButton from "../components/ScrollUpButton";
import Menu from "../components/Menu";
import logoJF from "../images/Jotah2020.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = (props) => {
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
          <div className="md:order-2 mb-4 lg:w-4/5 text-white">
            <img src={logoJF} alt="JF" />
          </div>
          <div className="md:order-1">
            <p className="text-4xl text-white font-serif mb-2">
              Hello, I'm Juan
            </p>
            <p className="text-xl text-gray-400 font-medium mb-4">
              Frontend Developer
            </p>
            <p className="text-base text-gray-400 mb-4">
              I have great knowledge in the Area of Informatica and Years of
              Experience, working with Web and Mobile technologies, both in
              Frontend, and Backend.
            </p>
            <ActionButton
              titleButton="What can I offer?"
              iconButton={<FontAwesomeIcon icon="user" size="lg" />}
              styleDivMaster="md:flex"
              action={() => props.history.push("/portafolio-jf/about")}
            />
          </div>
        </div>
      </div>
      <div id="sectionProjects">
        <div className="container mx-auto pt-12 lg:pt-24 pb-12 h-full md:h-screen">
          <div className="mb-10 text-center">
            <p className="text-4xl font-serif mb-1">Projects</p>
            <p className="text-base text-gray-500">My most recent jobs</p>
          </div>
          <div className="grid grid-cols-3 items-center text-center mb-10 md:mx-28 lg:mx-48 xl:mx-96">
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

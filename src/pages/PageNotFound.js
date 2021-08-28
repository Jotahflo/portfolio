import React from "react";
import Menu from "../components/Menu";

const Home = (props) => {
  return (
    <div>
      <Menu />
      <div id="sectionPageNotFound">
        <div className="container mx-auto grid grid-cols-1 items-center justify-items-center h-screen w-screen">
          <div className="text-center">
            <p className="text-8xl mb-8">🤔</p>
            <p className="text-5xl font-serif">
              Uff the page has not been found.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

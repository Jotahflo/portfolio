import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function disableScroll() {
  var x = window.scrollX;
  var y = window.scrollY;
  window.onscroll = function () {
    window.scrollTo(x, y);
  };
  document.body.style.overflow = "hidden";
}

function enableScroll() {
  window.onscroll = null;
  document.body.style.overflow = "visible";
}

const Contact = (props) => {
  disableScroll();

  return (
    <Fragment>
      <div
        className="opacity-25 fixed inset-0 z-20 bg-black hidden md:block"
        onClick={() => {
          enableScroll();
          props.setShowModal(false);
        }}></div>
      <div className="md:flex md:justify-center md:items-center inset-0 fixed z-30">
        <div className="md-h-fit-content md-w-fit-content p-4 md:px-4 bg-gray-800 h-full md:rounded-xl">
          <div className="container mx-auto bg-gray-100 flex flex-col p-4 rounded-xl h-full">
            <div className="mb-10 text-center mt-4">
              <p className="text-4xl font-serif mb-1">Contact</p>
              <p className="text-base text-gray-500">My personal data</p>
            </div>
            <div className="h-inherit mb-12">
              <p className="text-base text-gray-500 mb-2">
                If you have a new project, I am always available to talk to you.
                <br /> You can get in touch by sending an email or any of my social networks.
              </p>
              <p className="text-2xl font-serif mb-8">
                <a href="mailto:j.floresvid@gmail.com">j.floresvid@gmail.com</a>
              </p>
              <div className="flex flex-row">
                <a className="mr-4 text-red-600" href="https://www.linkedin.com/in/jfloresvid/">
                  <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />
                </a>
                <a className="mr-4 text-red-600" href="https://github.com/Jotahflo">
                  <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
                </a>
                <a className="mr-4 text-red-600" href="https://gitlab.com/Jotahflo">
                  <FontAwesomeIcon icon={["fab", "gitlab"]} size="lg" />
                </a>
              </div>
            </div>
            <div className="border-t border-solid border-blueGray-200 text-right pt-4 pr-4">
              <button
                className="text-red-600 font-medium"
                type="button"
                onClick={() => {
                  enableScroll();
                  props.setShowModal(false);
                }}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;

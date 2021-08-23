import React from "react";
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
    <>
      <div
        className="opacity-25 fixed inset-0 z-20 bg-black hidden md:block"
        onClick={() => {
          enableScroll();
          props.setShowModal(false);
        }}
      ></div>
      <div className="md:flex md:justify-center md:items-center inset-0 fixed z-30">
        <div className="md-h-fit-content md-w-fit-content p-4 md:px-4 bg-gray-800 h-full md:rounded-xl">
          <div className="container mx-auto bg-gray-100 flex flex-col p-4 rounded-xl h-full">
            <div className="pb-10 text-center pt-4">
              <p className="text-4xl font-serif pb-1">Contact</p>
              <p className="text-base text-gray-500">My personal data</p>
            </div>
            <div className="h-fa pb-12">
              <p className="text-base text-gray-500 pb-2">
                If you have a new project, I am always available to talk to you.
                <br /> You can get in touch by sending an email or any of my
                social networks.
              </p>
              <p className="text-2xl font-serif pb-8">
                <a href="mailto:j.floresvid@gmail.com">j.floresvid@gmail.com</a>
              </p>
              <div className="flex flex-row">
                <a
                  className="pr-4 text-red-600"
                  href="https://www.linkedin.com/in/jfloresvid/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />
                </a>
                <a
                  className="pr-4 text-red-600"
                  href="https://github.com/Jfloresvid"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
                </a>
                <a
                  className="pr-4 text-red-600"
                  href="https://gitlab.com/Jfloresvid"
                  target="_blank"
                >
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
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ScrollUpButton = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <div className={showScroll ? "fixed bottom-20 right-6 lg:bottom-12 lg:right-12" : "hidden"}>
      <button className="rounded bg-red-600 hover:bg-red-700 text-white py-2.5 px-3" title="ScrollUp" onClick={scrollTop}>
        <FontAwesomeIcon icon="arrow-up" size="lg" />
      </button>
    </div>
  );
};

export default ScrollUpButton;

import React, {useState} from "react";

const ScrollUpButton = (props) => {

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  }

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  window.addEventListener('scroll', checkScrollTop)

  return (
    <div className={showScroll ? 'fixed bottom-20 right-6 lg:bottom-12 lg:right-12' : 'hidden'}>
      <button className="border rounded border-red-600 text-red-600 hover:bg-red-600 hover:text-white py-2.5 px-3" onClick={scrollTop}>{props.iconButton}</button>
    </div>
  );
}

export default ScrollUpButton;
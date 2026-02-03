
import { useEffect, useRef,useState } from "react";
import Project from "./Project";
import PropTypes from "prop-types";
import {projectDetails} from "./data/data"



export default function ProjectContainer (props) {
  const { pageIndex, viewList, setCurrentIndex, pageUrls} = props
  const containerRef = useRef(null)
  const scrollTimeout = useRef(null)
  const [isReactScrollActive, setIsReactScrollActive] = useState(false)

   const scrollToProject = (projectIndex) => {
    const container = containerRef.current;
    if (!container) return;

    setIsReactScrollActive(true);
    
    container.scrollTo({
      left: projectIndex * container.clientWidth,
      behavior: "smooth",
    });

    // Reset the flag after scrolling is complete
    setTimeout(() => {
      setIsReactScrollActive(false);
    }, 1000);
  };


  // Expose scrollToProject function globally for React Scroll to use
  useEffect(() => {
    window.scrollToProject = scrollToProject;
    
    return () => {
      delete window.scrollToProject;
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheelScroll = (e) => {
      if (isReactScrollActive) {
        return;
      }

      const scrollLeft = container.scrollLeft;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const direction = e.deltaY > 0 ? 1 : -1;
      const atStart = scrollLeft < 1;
      const atEnd = Math.abs(scrollLeft - maxScrollLeft) < 1;

      if ((atStart && direction === -1) || (atEnd && direction === 1)) {
        return;
      }

      e.preventDefault();

      if (scrollTimeout.current) return; 

      container.scrollTo({
        left: scrollLeft + direction * container.clientWidth,
        behavior: "smooth",
      });

      scrollTimeout.current = setTimeout(() => {
        scrollTimeout.current = null;
      }, 650);
    }

    container.addEventListener("wheel", handleWheelScroll, { passive: false }); 
    return () => { 
      container.removeEventListener("wheel", handleWheelScroll); 
      clearTimeout(scrollTimeout.current); 
    }
  }, [isReactScrollActive])
  
  return (
    <div className="section-snap min-h-dvh">
      <div ref={containerRef} className="w-screen sm:h-dvh overflow-x-scroll flex">
        {projectDetails.map((project, index) => (
          <Project key={index} index={index} pageIndex={pageIndex+index} pageUrls = {pageUrls} projectlength={projectDetails.length} viewList={viewList} setCurrentIndex={setCurrentIndex} {...project} />
        ))}
      </div>
    </div>
  )
}


ProjectContainer.propTypes={
  pageIndex: PropTypes.number.isRequired,
  viewList: PropTypes.array.isRequired,
  setCurrentIndex: PropTypes.func.isRequired,
  pageUrls: PropTypes.array.isRequired,
}

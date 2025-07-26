
import { useEffect, useRef,useState } from "react";
import Project from "./Project";
import LiftMobile from '/Images/Portfolio/LiftMobile.png'
import OSLogistics from '/Images/Portfolio/OSLogistics.png'
import Questlog from '/Images/Portfolio/Questlog.png'
import Conduit from '/Images/Portfolio/Conduit.png'
import OSVid from '/Video/OS logistics.webm'
import ConduitVid from '/Video/Conduit.webm'
import QuestlogVid from '/Video/Questlog.webm'
import LiftVid from '/Video/Liftmobile.webm'
import PropTypes from "prop-types";


const projectDetails = [
    {
    name: "Conduit",
    role: "Fullstack developer",
    skills: ["NextJs","Framer motion","Cloudinary","MongoDB","Axios","Redux","Redux-toolkit","Figma","Typescript","NodeJs","Bcrypt"],
    desc: "Conduit is a Local service Aggregator that connects users with local service providers around them. You can message service providers, book appointments, and handle payment all on Conduit, Additionally, you can offer your own services and get hired through the platform",
    letter: "C",
    message: "Scroll left",
    isMobile:false,
    image: Conduit,
    video:ConduitVid,
    imgPath:'/3D model/screenImg/scissors.png',
    projectPath:'https://conduit-services.vercel.app/',
    githubPath:'https://github.com/Onetyten/conduit'

    },
    {
    name: "OS Logistics",
    role: "Frontend Engineer",
    skills: ["React", "TailwindCSS","WebSocket","Axios","React Router","Map Libre","Recharts"],
    desc: "This here is a responsive that dashboard that displays shipment data for a logistics company. With features like dark/light theme toggle, A map used for the tracking of individual shipments and a collection of charts for better data visualisation while adopting various optimization methods like lazyloading components to reduce initial load time.",
    letter: "O",
    message: "",
    isMobile:false,
    image: OSLogistics,
    video:OSVid,
    imgPath:'/3D model/screenImg/scissors.png',
    projectPath:'https://oslogistics.netlify.app/',
    githubPath:'https://github.com/Onetyten/os-logistics'
  },
  

  {
    name: "Questlog",
    role: "Fullstack developer ",
    skills: ["NextJs","Typescript","NodeJs","ExpressJs","MongoDB","Jsonwebtoken","Jest","Supertest","Bcrypt","Axios","Redux","Redux-toolkit"],
    desc: "This is a task management web app that gamifies doing  by letting users break down large tasks into subtasks, as well as awarding users on the basis of task completion, while rocking a fully-featured backend in the form of a REST API that securely saves user data and tasks.",
    letter: "Q",
    message: "",
    isMobile:false,
    image: Questlog,
    video:QuestlogVid,
    imgPath:'/3D model/screenImg/Questlog.png',
    projectPath:'https://questlog-gamified.vercel.app/',
    githubPath:'https://github.com/Onetyten/questlog'
  },
  {
    name: "Lift mobile",
    role: " FullStack developer",
    skills: ["React native", "Native wind","Axios","Bcrypt","Expo","Expo-router","Express","MongoDB","React","React-dom","react-native-encrypted-storage","TailwindCSS","NodeJS"],
    desc: "This is a full-stack, user-driven car rental platform that allows individuals to rent out their cars when not in use. Built with Express.js and MongoDB, it has a smooth authentication and profile creation system and provides a seamless and secure experience for both car owners and renters",
    letter: "L",
    message: "scroll down",
    isMobile:true,
    image: LiftMobile,
    video:LiftVid,
    imgPath:'/3D model/screenImg/LiftMobile.png',
    projectPath:'https://github.com/Onetyten/Lift-mobile',
    githubPath:'https://github.com/Onetyten/Lift-mobile'
    
  },
];


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
    <div className="section-snap h-screen overflow-y-auto">
      <div
        ref={containerRef}
        className="w-screen h-screen overflow-x-scroll flex"
      >
        {projectDetails.map((project, index) => (
          <Project
            key={index}
            index={index}
            pageIndex={pageIndex+index}
            pageUrls = {pageUrls}
            projectlength={projectDetails.length}
            viewList={viewList}
            setCurrentIndex={setCurrentIndex}
            {...project}
          />
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

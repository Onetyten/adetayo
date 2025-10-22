
import { useEffect, useRef,useState } from "react";
import Project from "./Project";
import OSVid from '/Video/OS logistics.webm'
import ConduitVid from '/Video/Conduit.webm'
import MoriVid from '/Video/mori.webm'
import LiftVid from '/Video/Liftmobile.webm'
import CliqueVid from '/Video/clique.webm'
import PropTypes from "prop-types";


const projectDetails = [
    {
    name: "Conduit",
    role: "Fullstack developer",
    skills: ["NextJs","Framer motion","Cloudinary","MongoDB","Redux","Figma","Typescript","NodeJs"],
    desc: "Conduit is a Local service Aggregator that connects users with local service providers around them. You can message service providers, book appointments, and handle payment all on Conduit, Additionally, you can offer your own services and get hired through the platform.",
    letter: "C",
    message: "Scroll left",
    isMobile:false,
    video:ConduitVid,
    projectPath:'https://conduit-services.vercel.app/',
    githubPath:'https://github.com/Onetyten/conduit'
    },
    {
    name: "OS Logistics",
    role: "Frontend Engineer",
    skills: ["React", "TailwindCSS","WebSocket","Map Libre","React Leaflet","Recharts"],
    desc: "This is a responsive dashboard that displays shipment data for a logistics company. With A global map for the tracking of individual shipments and a collection of charts for better data visualisation while adopting various optimization methods like lazyloading and virtualization to reduce initial load time.",
    letter: "O",
    message: "",
    isMobile:false,
    video:OSVid,
    projectPath:'https://os-logistics.vercel.app/',
    githubPath:'https://github.com/Onetyten/os-logistics'
  },
  
  {
    name: "Mori Cafe",
    role: "Fullstack developer ",
    skills: ["Paystack","ReactJs","Typescript","ExpressJs","MongoDB","Supertest","React to print","Redux"],
    desc: "This is a web application that allows you to seamlessly browse through the Mori Café menu, customise orders, receive personalized food suggestions, handle payment, and explore more, all through an intelligent and friendly chatbot named Mori.",
    letter: "M",
    message: "",
    isMobile:false,
    video:MoriVid,
    projectPath:'https://m-foodie-chatbot.onrender.com',
    githubPath:'https://github.com/Onetyten/m_foodie_chatbot'
  },

  {
    name: "Clique",
    role: "Fullstack developer ",
    skills: ["HTML","CSS","Typescript","ExpressJs","PostgreSQL","Supabase","Jest","Websocket","Redis/caching"],
    desc: "Clique is a social bonding chat and guessing game app that lets you connect with friends, play fun guessing games, and get to know each other better. It features real-time messaging, instant notifications, and an engaging, optimized gameplay experience.",
    letter: "C",
    message: "",
    isMobile:false,
    video:CliqueVid,
    projectPath:'https://clique-1.onrender.com',
    githubPath:'https://github.com/Onetyten/clique'
  },

  {
    name: "Lift mobile",
    role: " FullStack developer",
    skills: ["React native","Expo","Express","MongoDB","React"],
    desc: "This is a full-stack, user-driven car rental platform that allows individuals to rent out their cars when not in use. Built with Express.js and MongoDB, providing a seamless and secure experience for both car owners and renters",
    letter: "L",
    message: "scroll down",
    isMobile:true,
    video:LiftVid,
    projectPath:'https://lift-mobile.vercel.app/',
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

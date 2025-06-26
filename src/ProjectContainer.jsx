import { useEffect, useRef} from "react";
import Project from "./Project";
import StockNinja from '/Images/Portfolio/StockNinja.png'
import LiftMobile from '/Images/Portfolio/LiftMobile.png'
import OSLogistics from '/Images/Portfolio/OSLogistics.png'
import Questlog from '/Images/Portfolio/Questlog.png'




  const projectDetails = [
      {
      name: "OS Logistics",
      role: "Frontend Engineer",
      skills: ["React", "TailwindCSS","WebSocket","Axios","React Router","Map Libre","Recharts"],
      desc: "This here is a responsive that dashboard that displays shipment data for a logistics company. With features like dark/light theme toggle, A map used for the tracking of individual shipments and a collection of charts for better data visualisation while adopting various optimization methods like lazyloading components to reduce initial load time.",
      letter: "O",
      showMessage: false,
      message: "",
      isMobile:false,
      image: OSLogistics,
      imgPath:'/3D model/screenImg/scissors.png',
      projectPath:'https://oslogistics.netlify.app/',
      githubPath:'https://github.com/Onetyten/os-logistics'
    },
    {
      name: "Questlog",
      role: "Fullstack developer ",
      skills: ["NextJs","Typescript","NodeJs","ExpressJs","MongoDB","Jsonwebtoken","Jest","Supertest","Bcrypt","Axios","Redux","Redux-toolkit"],
      desc: "This is a task management web app that gamifies doing. This is done by letting users break down large tasks into subtasks to make them less overwhelming, as well as awarding users on the basis of task completion, while rocking a fully-featured backend in the form of a REST API that securely saves user data and tasks.",
      letter: "Q",
      showMessage: false,
      message: "",
      isMobile:false,
      image: Questlog,
      imgPath:'/3D model/screenImg/Questlog.png',
      projectPath:'https://questlog-gamified.vercel.app/',
      githubPath:'https://github.com/Onetyten/questlog'
    },
    {
      name: "Stock Ninja",
      role: "Frontend Engineer",
      skills: ["Finnhub Stock API", "React","Axios","Recharts","React-router","Vite","Tailwindcss"],
      desc: "Developed a stock market watchlist that uses the Finnhub API to provide real-time financial data, including stock prices, charts, company information and recent news. The site offers users an organized, responsive experience, allowing you to track and analyze market trends",
      letter: "C",
      showMessage: true,
      message: "scroll right",
      isMobile:false,
      image: StockNinja,
      imgPath:'/3D model/screenImg/CodeNinja.png',
      projectPath:'https://stockninjawatchlist.netlify.app/',
      githubPath:'https://github.com/Onetyten/stock-ninja'
    },
    {
      name: "Lift mobile",
      role: " FullStack developer",
      skills: ["React native", "Native wind","Axios","Bcrypt","Expo","Expo-router","Express","MongoDB","React","React-dom","react-native-encrypted-storage","TailwindCSS","NodeJS"],
      desc: "This is a full-stack, user-driven car rental platform that allows individuals to rent out their cars when not in use. Built with Express.js and MongoDB, it has a smooth authentication and profile creation system and provides a seamless and secure experience for both car owners and renters",
      letter: "L",
      showMessage: true,
      message: "scroll down",
      isMobile:true,
      image: LiftMobile,
      imgPath:'/3D model/screenImg/LiftMobile.png',
      projectPath:'https://github.com/Onetyten/Ride-Share-App',
      githubPath:'https://github.com/Onetyten/Ride-Share-App'
      
    },
  ];

export default function ProjectContainer() {
  const containerRef = useRef(null);
  const scrollTimeout = useRef(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheelScroll = (e) => {
      const scrollLeft = container.scrollLeft;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const direction = e.deltaY > 0 ? 1 : -1; // Detect scroll direction
      const atStart = scrollLeft < 1;
      const atEnd = Math.abs(scrollLeft - maxScrollLeft) < 1;

      if ((atStart && direction === -1) || (atEnd && direction === 1)) {
        return; // Let native vertical scrolling happen
      }

      e.preventDefault(); // Prevent default only for horizontal scrolling

      if (scrollTimeout.current) return; 

      container.scrollTo({
        left: scrollLeft + direction * container.clientWidth,
        behavior: "smooth", // Smooth scrolling effect
      });

      scrollTimeout.current = setTimeout(() => {
        scrollTimeout.current = null;
      }, 650); // A longer timeout to ensure animation completes
    };

    container.addEventListener("wheel", handleWheelScroll, { passive: false }); 
    return () => { 
      container.removeEventListener("wheel", handleWheelScroll); 
      clearTimeout(scrollTimeout.current); 
    }; 
  }, []);
  



  return (
    <div className="section-snap h-screen overflow-y-auto">
      <div
        ref={containerRef}
        className="w-screen h-screen overflow-x-scroll flex"
      >
        {projectDetails.map((project, index) => (
          <Project
            key={index}
            {...project}
          />
        ))}
      </div>
    </div>
  );
}

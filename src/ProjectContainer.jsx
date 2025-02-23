import { useEffect, useRef} from "react";
import Project from "./Project";

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

      // Allow vertical scroll if at the first or last project
      if ((scrollLeft === 0 && direction === -1) || (scrollLeft === maxScrollLeft && direction === 1)) {
        return; // Let normal scrolling happen
      }

      e.preventDefault(); // Prevent default only for horizontal scrolling

      if (scrollTimeout.current) return; // Prevent rapid scrolls

      container.scrollTo({
        left: scrollLeft + direction * container.clientWidth,
        behavior: "smooth", // Smooth scrolling effect
      });

      scrollTimeout.current = setTimeout(() => {
        scrollTimeout.current = null;
      }, 200);
    };

    container.addEventListener("wheel", handleWheelScroll, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheelScroll);
      clearTimeout(scrollTimeout.current);
    };
  }, []);
  

  const projectDetails = [
    {
      name: "Stock Ninja",
      role: "Frontend Engineer",
      skills: ["Finnhub Stock API", "React","Axios","Recharts","react-router","vite","tailwindcss"],
      desc: "Developed a stock market watchlist that uses the Finnhub API to provide real-time financial data, including stock prices, charts, company information and recent news. The site offers users an organized, responsive experience, allowing you to track and analyze market trends",
      letter: "C",
      showMessage: true,
      message: "scroll right",
      isMobile:false,
      imgPath:'/3D model/screenImg/CodeNinja.png',
      projectPath:'https://stockninjawatchlist.netlify.app/',
      githubPath:'https://github.com/Onetyten/stock-ninja'
    },
    {
      name: "Moris Recipee",
      role: "Frontend Engineer",
      skills: ["ThemealDB api","React","axios","TailwindCSS","react-dom","vite"],
      desc: "This is a recipe web app developed using React. It implements the MealDB API to deliver a huge selection of recipes from a database. Tailwind CSS is used for modern and responsive styling, ensuring a visually appealing interface",
      letter: "M",
      showMessage: false,
      message: "",
      isMobile:false,
      imgPath:'/3D model/screenImg/MorisRecipee.png',
      projectPath:'https://morisrecipee.netlify.app/',
      githubPath:'https://github.com/Onetyten/moris_recipee'
    },
    {
      name: "Scissors",
      role: "Frontend Engineer",
      skills: ["HTML", "CSS","Javascript"],
      desc: "This is a URL shortener that personalizes your shortened URLs to align with your brand identity. Utilizing custom slugs, branded links, and domain customization options to reinforce your brand presence and enhance user engagement.",
      letter: "S",
      showMessage: false,
      message: "",
      isMobile:false,
      imgPath:'/3D model/screenImg/scissors.png',
      projectPath:'https://onetyten-altschool.vercel.app/Scissors/index.html',
      githubPath:'https://github.com/Onetyten/MyAltschoolProfile/tree/main/Scissors'
    },
    {
      name: "Lift mobile",
      role: "Frontend Engineer",
      skills: ["React native", "Native wind","Axios","Bcrypt","Expo","Expo-router","Express","MongoDB","React","React-dom","react-native-encrypted-storage","TailwindCSS","NodeJS"],
      desc: "This is a full-stack, user-driven car rental platform that allows individuals to rent out their cars when not in use. Built with Express.js and MongoDB, it has a smooth authentication and profile creation system and provides a seamless and secure experience for both car owners and renters",
      letter: "L",
      showMessage: true,
      message: "scroll down",
      isMobile:true,
      imgPath:'/3D model/screenImg/LiftMobile.png',
      projectPath:'https://github.com/Onetyten/Ride-Share-App',
      githubPath:'https://github.com/Onetyten/Ride-Share-App'
      
    },
  ];

  return (
    <div className="section-snap h-screen overflow-y-auto">
      <div
        ref={containerRef}
        className="w-screen h-screen overflow-x-scroll flex snap-x snap-mandatory scroll-smooth"
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

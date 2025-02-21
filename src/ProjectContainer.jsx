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
      skills: ["React", "TailwindCSS"],
      desc: "Stock market watchlist...",
      letter: "C",
      isMobile:false,
      imgPath:'/3D model/screenImg/CodeNinja.png',
      projectPath:'https://stockninjawatchlist.netlify.app/',
      githubPath:'https://github.com/Onetyten/stock-ninja'
    },
    {
      name: "Moris Recipee",
      role: "Frontend Engineer",
      skills: ["React", "TailwindCSS"],
      desc: "Recipe app...",
      letter: "M",
      isMobile:false,
      imgPath:'/3D model/screenImg/MorisRecipee.png',
      projectPath:'https://morisrecipee.netlify.app/',
      githubPath:'https://github.com/Onetyten/moris_recipee'
    },
    {
      name: "Solidus",
      role: "Frontend Engineer",
      skills: ["React", "TailwindCSS"],
      desc: "Portfolio site...",
      letter: "S",
      isMobile:false,
      imgPath:'/3D model/screenImg/solidus.png',
      projectPath:'https://solidusteammanager.netlify.app/',
      githubPath:'https://github.com/Onetyten/solidus_team_manager'
    },
    {
      name: "Lift mobile",
      role: "Frontend Engineer",
      skills: ["React", "TailwindCSS"],
      desc: "Mobile app UI...",
      letter: "L",
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

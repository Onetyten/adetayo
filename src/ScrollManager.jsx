/* eslint-disable react/prop-types */
// import { IoMdArrowDropleftCircle,IoMdArrowDroprightCircle } from "react-icons/io";
import { faCaretLeft, faCaretUp,faCaretRight,faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"


function ScrollIcon(props){
  const {icon,elementUrl} = props
  const handleClick = () => {
    console.log("link to", elementUrl);
    const targetElement = document.getElementById(elementUrl);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
  };
  return(
        <motion.div onClick={handleClick} initial={{rotate:0,opacity:0,y:30}} animate={{y:[0,30,0],opacity:[0,1,1],rotate:[0,90,0]}} transition={{duration:0.5,delay:0.5, ease:'easeOut',times: [0, 0.5, 1] }} className="w-12 navIcon pointer-events-auto cursor-pointer h-12 flex justify-center items-center rounded-full bg-lightgrey/50 text-white/80 md:bg-lightgrey md:text-white">
          <FontAwesomeIcon icon={icon} className=" text-lg md:text-3xl"/>
        </motion.div>
        
  )
}





export default function ScrollManager(props) {

  const {ScrollIconUp ,ScrollIconDown,showScrollIconPos,showScrollIconNeg,currentIndex,pageUrls} = props
  const prevUrl = pageUrls[currentIndex - 1];
  const nextUrl = pageUrls[currentIndex + 1];

  return (
    <div className="fixed w-screen z-30 h-screen pointer-events-none text-white text-7xl hidden sm:flex justify-center items-center">
      <div className="absolute bottom-[15%] md:bottom-5 pointer-events-none md:w-auto w-full justify-between md:right-5 px-3 md:px-0 flex items-center md:justify-center gap-4">
        
        <div className="pointer-events-none" >
          {showScrollIconPos&&prevUrl&&(<div>
            {ScrollIconUp?(
              <ScrollIcon icon={faCaretUp} elementUrl={prevUrl}/>) 
            :
              (<ScrollIcon icon={faCaretLeft} elementUrl={prevUrl} />)}
          </div>)}
        </div>
        
        <div className="pointer-events-none">
          {showScrollIconNeg&&nextUrl&&(<div>
            {ScrollIconDown?( <ScrollIcon icon={faCaretDown} elementUrl={nextUrl} />) 
            :
            (<ScrollIcon icon={faCaretRight} elementUrl={nextUrl} />)}
          </div>)}
        </div>
        
        



      </div>
        
    </div>
  )

}

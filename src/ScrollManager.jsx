/* eslint-disable react/prop-types */
// import { IoMdArrowDropleftCircle,IoMdArrowDroprightCircle } from "react-icons/io";
import { faCaretLeft, faCaretUp,faCaretRight,faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"


function ScrollIcon(props){
  const {icon,viewList,currentIndex,direction,currentLink,pageUrls} = props
function ScrollToView(){
    // Calculate the target index based on the current index and direction
    const targetIndex = currentIndex + direction;

    console.log("Current Index:", currentIndex, "Direction:", direction, "Target Index:", targetIndex);

    // Check if the target index is within the bounds of the viewList array
    if (targetIndex >= 0 && targetIndex < viewList.length) {
      const targetRef = viewList[targetIndex].ref;

      if (targetRef.current) {
        console.log("Mounted")
        targetRef.current.scrollIntoView({ behavior: 'smooth' });
        console.log("Scrolled to:", viewList[targetIndex].name || `Index ${targetIndex}`); // Added name for better logging
      }
      else {
        console.log("Not Mounted")
        console.warn("Attempted to scroll to a ref that is not yet current or mounted:", viewList[targetIndex]);
      }
    }
    else {
      console.log("Cannot scroll: Target index is out of bounds.", targetIndex);
    }
  }

  return(

      <motion.a href={`${direction==1?`#${pageUrls[currentIndex+1]}`:`#${pageUrls[currentIndex+1]}` }` || `#${pageUrls[0]}`}  initial={{rotate:0,opacity:0,y:30}} animate={{y:[0,30,0],opacity:[0,1,1],rotate:[0,90,0]}} transition={{duration:0.5,delay:0.5, ease:'easeOut',times: [0, 0.5, 1] }} className="w-12 navIcon cursor-pointer h-12 flex justify-center items-center rounded-full bg-lightgrey hover:bg-darkgrey text-white">
        <FontAwesomeIcon icon={icon} className=" text-lg md:text-3xl"/>
      </motion.a>
        
  )
}




export default function ScrollManager(props) {
  const {ScrollIconUp ,ScrollIconDown,showScrollIconPos,showScrollIconNeg,viewList,currentIndex,currentLink,pageUrls} = props
  return (
    <div className="fixed w-screen z-30 h-screen pointer-events-none text-white text-7xl flex justify-center items-center">
      <div className="absolute bottom-5 pointer-events-auto right-5 flex items-center justify-center gap-4">
        
        {showScrollIconPos&&(<div>
          {ScrollIconUp?( <ScrollIcon icon={faCaretUp} currentLink={currentLink} direction={-1} viewList={viewList} currentIndex = {currentIndex} pageUrls={pageUrls}/>) 
          :
          (<ScrollIcon icon={faCaretLeft} direction={1} viewList={viewList} currentIndex = {currentIndex}  currentLink={currentLink} pageUrls={pageUrls} />)}
        </div>)}
        
        {showScrollIconNeg&&(<div>
          {ScrollIconDown?( <ScrollIcon icon={faCaretDown} direction={1} viewList={viewList} currentIndex = {currentIndex}  currentLink={currentLink} pageUrls={pageUrls} />) 
          :
          (<ScrollIcon icon={faCaretRight} direction={-1} viewList={viewList} currentIndex = {currentIndex}  currentLink={currentLink} pageUrls={pageUrls} />)}
        </div>)}
        



      </div>
        
    </div>
  )
}

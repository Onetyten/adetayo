
import { faCaretLeft, faCaretUp,faCaretRight,faCaretDown } from "@fortawesome/free-solid-svg-icons"
import ScrollIcon from "./Components/ScrollIcon"
import PropTypes from "prop-types";
import { useEffect } from "react";

export default function ScrollManager(props) {

  const {ScrollIconUp ,ScrollIconDown,showScrollIconPos,showScrollIconNeg,currentIndex,pageUrls} = props
  const prevUrl = pageUrls[currentIndex - 1];
  const nextUrl = pageUrls[currentIndex + 1];

  const handleClick = (elementUrl) => {
    const targetElement = document.getElementById(elementUrl);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
  };

  useEffect(()=>{
    function handleKeyDown(event){
      if((event.key == "ArrowUp" || event.key == "ArrowLeft" )&& prevUrl ){
        handleClick(prevUrl)
      }
      if((event.key == "ArrowDown" || event.key == "ArrowRight" )&& nextUrl ){
        handleClick(nextUrl)
      }
    }
    window.addEventListener("keydown",handleKeyDown)

    return ()=> window.removeEventListener("keydown",handleKeyDown)
  },[prevUrl,nextUrl])



  return (
    <div className="fixed w-screen z-30 h-screen pointer-events-none text-white text-7xl hidden sm:flex justify-center items-center">
      <div className="absolute bottom-[15%] md:bottom-5 pointer-events-none md:w-auto w-full justify-between md:right-5 px-3 md:px-0 flex items-center md:justify-center gap-4">
        
        <div className="pointer-events-none" >
          {showScrollIconPos&&prevUrl&&(<div>
            {ScrollIconUp?(
              <ScrollIcon icon={faCaretUp} handleClick={handleClick} elementUrl={prevUrl}/>) 
            :
              (<ScrollIcon icon={faCaretLeft} handleClick={handleClick} elementUrl={prevUrl} />)}
          </div>)}
        </div>
        
        <div className="pointer-events-none">
          {showScrollIconNeg&&nextUrl&&(<div>
            {ScrollIconDown?( <ScrollIcon icon={faCaretDown} handleClick={handleClick} elementUrl={nextUrl} />) 
            :
            (<ScrollIcon icon={faCaretRight} handleClick={handleClick} elementUrl={nextUrl} />)}
          </div>)}
        </div>
      </div>
        
    </div>
  )
}



ScrollManager.propTypes = {
  ScrollIconUp: PropTypes.bool.isRequired ,
  ScrollIconDown: PropTypes.bool.isRequired,
  showScrollIconPos:PropTypes.bool.isRequired,
  showScrollIconNeg:PropTypes.bool.isRequired,
  currentIndex:PropTypes.number.isRequired,
  pageUrls:PropTypes.array.isRequired
} 
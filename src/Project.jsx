/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
 
import { useState, useRef,useEffect} from "react";
import PropTypes from "prop-types";
import ConsoleText from "./ConsoleText";
import ProjectItem from "./Components/ProjectItem";
import { motion } from "framer-motion";
import { Element } from "react-scroll";



export default function Project(props) {
  const { name,image,letter,isMobile ,showMessage,message,githubPath,projectPath,video,index,projectlength,pageIndex,pageUrls,viewList,setCurrentIndex} = props;
  const imageRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });


  const handleMouseMove = (e) => {
      if (imageRef.current) {
          const rect = imageRef.current.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const mouseX = e.clientX - centerX;
          const mouseY = e.clientY - centerY;

          const rotateX = mouseY / 500; // Adjust sensitivity
          const rotateY = -mouseX / 500; // Adjust sensitivity

          setRotation({ x: rotateX, y: rotateY });
      }
  };


  useEffect(()=>{

      setCurrentIndex(pageIndex)
  },[index, projectlength,viewList[pageIndex].inView])

  return (
    <Element name={pageUrls[pageIndex]} >
      <div ref={viewList[pageIndex].ref} id={pageUrls[pageIndex]} className="min-w-screen min-h-screen relative box-border section-snap flex justify-between items-center bg-white">
        <div className="w-screen min-h-screen flex xl:flex-row flex-col-reverse">
          <div className=" flex-1 xl:flex-[0.6] pb-24 md:p-0 flex justify-center p-2 sm:p-4 xl:p-0 items-center">
            <ConsoleText projectname={name}>
              <ProjectItem {...props} />
            </ConsoleText>
          </div>

          <div className=" xl:flex-1 h-72 sm:h-96 xl:h-auto bg-darkgrey relative" onMouseMove={handleMouseMove}>
            <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center overflow-hidden">
              <p className="text-[65vw] p-32 font-intel head-shadows text-lightgrey">
                {letter}
              </p>
            </div>

            {showMessage&&(<div className="w-full h-full absolute top-0 left-0 p-2 md:p-9 flex justify-end items-start overflow-hidden">
              <div className="bg-lightergrey hover:bg-stone-400 console-shadow2 md:px-9 md:py-5 px-3 py-2 ">
                <p className="text text-xs font-intel text-white font-bold">
                  {message}
                </p> 
              </div>
            </div>)}

            <motion.div initial={{height:'100%'}} whileInView={{height:0}} transition={{duration:0.5,ease:'easeInOut'}} className="w-full z-10 h-full absolute top-0 left-0 bg-gradient-to-b from-myblack to-lightgrey flex justify-center items-center overflow-hidden">
            </motion.div>


            <div className={`h-full w-full absolute top-0 left-0 flex justify-center items-center p-10`}>
                {video?(
                  <a href={projectPath} target='_blank' className="w-full h-full flex justify-center">
                    <video src={video} autoPlay loop muted playsInline className={`${isMobile ? "h-[90%]" : "w-full"} object-contain`} style={{transform: `perspective(600px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,transition: "transform 0.1s ease-out",}}/>
                  </a>
                )
              :(
                <a href={projectPath} target='_blank' className="w-full h-full flex justify-center">
                    <img ref={imageRef} src={image} alt="Portfolio link image" className={`${isMobile ? "h-[80%]" : "w-full"} object-contain`} style={{transform: `perspective(600px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,transition: "transform 0.1s ease-out",}} />
                </a>
                )}
                
                
            </div>

          </div>
        </div>
      </div>
    </Element>
  );
}

Project.propTypes = {
  name: PropTypes.node,
  projectlength:PropTypes.node,
  role: PropTypes.node,
  skills: PropTypes.node,
  desc: PropTypes.node,
  letter: PropTypes.node,
  isMobile: PropTypes.bool,
  showMessage: PropTypes.bool,
  imgPath: PropTypes.node,
  githubPath: PropTypes.node,
  projectPath: PropTypes.node,
  message: PropTypes.node,
  image: PropTypes.node,
  video: PropTypes.node,
  index:PropTypes.node,
};

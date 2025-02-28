/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useState, useEffect, useRef, Suspense } from "react";
import PropTypes from "prop-types";
import ConsoleText from "./ConsoleText";
import ProjectItem from "./Components/ProjectItem";
import { motion } from "framer-motion";




export default function Project(props) {
  const { name,image,letter,isMobile ,showMessage,message} = props;
  const projectRef = useRef(null);
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

  return (
    <div
      ref={projectRef}
      className="min-w-screen h-screen relative box-border section-snap flex justify-between items-center bg-white"
    >
      <div className="w-screen h-screen flex xl:flex-row flex-col-reverse">
        <div className="flex-[0.5] flex justify-center p-4 xl:p-0 items-center">
          <ConsoleText projectname={name}>
            <ProjectItem {...props} />
          </ConsoleText>
        </div>

        <div className="flex-1 bg-darkgrey relative" onMouseMove={handleMouseMove}>
          <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center overflow-hidden">
            <p className="text-[65vw] p-32 font-roboto head-shadows text-lightgrey">
              {letter}
            </p>
          </div>

          {showMessage&&(<div className="w-full h-full absolute top-0 left-0 p-2 md:p-9 flex justify-end items-start overflow-hidden">
            <div className="bg-lightergrey hover:bg-stone-400 console-shadow2 md:px-9 md:py-5 px-3 py-2 ">
              <p className="text text-xs font-roboto text-white font-bold">
                {message}
              </p> 
            </div>
          </div>)}

          <motion.div initial={{height:'100%'}} whileInView={{height:0}} transition={{duration:0.5,ease:'easeInOut'}} className="w-full z-10 h-full absolute top-0 left-0 bg-gradient-to-b from-myblack to-lightgrey flex justify-center items-center overflow-hidden">
          </motion.div>


          <div className={`h-full w-full absolute top-0 left-0 flex justify-center items-center p-10`}>
              <img ref={imageRef} src={image} alt="" className={`${isMobile ? "h-[80%]" : "w-full"} object-contain`} style={{transform: `perspective(600px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,transition: "transform 0.1s ease-out",}} />
          </div>

        </div>
      </div>
    </div>
  );
}

Project.propTypes = {
  name: PropTypes.node,
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
};

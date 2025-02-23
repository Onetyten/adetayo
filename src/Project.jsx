/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useState, useEffect, useRef, Suspense } from "react";
import PropTypes from "prop-types";
import { Canvas } from "@react-three/fiber";
import LaptopModel from "./LaptopModel";
import ConsoleText from "./ConsoleText";
import ProjectItem from "./Components/ProjectItem";
import Loader from "./Components/Loader";
import { motion } from "framer-motion";




export default function Project(props) {
  const { name, role, skills, desc, letter,isMobile ,showMessage,message,imgPath,githubPath,projectPath} = props;
  const [isVisible, setIsVisible] = useState(false);
  const projectRef = useRef(null);

  useEffect(() => {
    if (isVisible) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // Trigger when 30% of the component is visible
    );

    if (projectRef.current) {
      observer.observe(projectRef.current);
    }

    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
    };
  }, []);

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

        <div className="flex-1 bg-darkgrey relative">
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

          <motion.div initial={{height:'100%'}} whileInView={{height:0}} transition={{duration:2,ease:'easeInOut'}} className="w-full z-10 h-full absolute top-0 left-0 bg-gradient-to-b from-myblack to-lightgrey flex justify-center items-center overflow-hidden">
            
          </motion.div>

          {isVisible && (
            <Canvas>
              <directionalLight intensity={4} position={[0, 1, 1]} color={"#fffadb"} />
              <Suspense fallback={<Loader/>}>
                <LaptopModel {...props}/>
              </Suspense>
              
            </Canvas>
          )}
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
};

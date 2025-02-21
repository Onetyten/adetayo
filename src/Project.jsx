/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Canvas } from "@react-three/fiber";
import LaptopModel from "./LaptopModel";
import ConsoleText from "./ConsoleText";
import ProjectItem from "./Components/ProjectItem";

export default function Project(props) {
  const { name, role, skills, desc, letter,isMobile ,imgPath} = props;
  const [isVisible, setIsVisible] = useState(false);
  const projectRef = useRef(null);

  useEffect(() => {
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
      <div className="w-screen h-screen flex flex-row">
        <div className="flex-[0.5] flex justify-center items-center">
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

          {isVisible && (
            <Canvas>
              <directionalLight intensity={4} position={[0, 1, 1]} color={"#fffadb"} />
              <LaptopModel isMobile = {isMobile} imgPath={imgPath} />
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
  isMobile: PropTypes.node,
  imgPath: PropTypes.node,
};

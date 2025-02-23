/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */
import { useAnimations, useCursor, useGLTF,useTexture } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three"; // Import Three.js

// Preload the model
useGLTF.preload("/3D model/Laptop/laptop.gltf");
useGLTF.preload("/3D model/Phone/Phone.gltf");

export default function LaptopModel(props) {
  const [hovered,setHovered] = useState(false)
  useCursor(hovered)
  const {isMobile,imgPath,projectPath} = props
  const group = useRef(null);

  const { animations, scene } = useGLTF(isMobile?"/3D model/Phone/Phone.gltf":"/3D model/Laptop/laptop.gltf");
  const screenTexture = useTexture(imgPath);
  screenTexture.flipY = false;

  const { actions } = useAnimations(animations, scene);


  useEffect(() => {
    const screenMesh = scene.getObjectByName("screen");
    // const mobileMesh = scene.getObjectByName("Phone_screen");
  
    screenTexture.colorSpace = THREE.SRGBColorSpace; // Fix washed-out colors
  
    if (screenMesh) {
      screenMesh.material.map = screenTexture;
      screenMesh.material.needsUpdate = true;
    }
  
    // if (mobileMesh) {
    //   mobileMesh.material.map = screenTexture;
    //   mobileMesh.material.needsUpdate = true;
    // }
  }, [scene, screenTexture]);
  


  

  useEffect(() => {
    if (actions && actions["Take 001"]) {
      const action = actions["Take 001"];
      action.reset();
      action.setLoop(THREE.LoopOnce, 1); // Play only once
      action.clampWhenFinished = true;  // Stop at last frame
      action.play();
    }
  }, []);

  // Track mouse movement and rotate the model slightly
  useFrame((state) => {
    if (!group.current) return;

    const { x, y } = state.pointer; // Normalized mouse position (-1 to 1)
    group.current.rotation.y = x * 0.15; // Rotate left/right
    group.current.rotation.x = y * 0.1; // Rotate up/down
  });
  

  return (
    <group ref={group} position={[0, -0.1, isMobile? 4.83:4.7]} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)} onClick={() => window.open(projectPath, "_blank")}>
      <primitive object={scene} />
    </group>
  );
}

LaptopModel.propTypes={
  isMobile:PropTypes.bool,
  imgPath:PropTypes.node,
  projectPath:PropTypes.node,
}

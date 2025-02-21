import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

// Preload the model
useGLTF.preload("/3D model/voxel_web_development/scene.gltf");

export default function Model() {
  const group = useRef(null);
  const {animations, scene } = useGLTF("/3D model/voxel_web_development/scene.gltf");
  const {actions} = useAnimations(animations, scene);
  useEffect(() => {
    console.log(actions)
    actions['Object_6Action'].play()
    actions['Object_7Action'].play()
  },[])



  return (
    <group ref={group}>
      {/* eslint-disable react/no-unknown-property */}
      <primitive object = {scene}  position={[-0.6, 0, -6]}  rotation={[0.8, 6, 0]} />
    </group>
  );
}

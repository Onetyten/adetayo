import { Html, useProgress } from "@react-three/drei";

export default function Loader(){
    const {progress} = useProgress()
    return <Html className="text-white z-20 w-[30vw] " center><p className="md:text-3xl text-md  font-extrabold text-center">3D project {progress.toFixed(1)}% Loaded</p></Html>
  }
  
import { Html, useProgress } from "@react-three/drei";

export default function Loader(){
    // eslint-disable-next-line no-unused-vars
    const {progress,active} = useProgress()
    return <Html className="text-white z-20 font-roboto w-[30vw] " center><p className="md:text-3xl text-md  font-extrabold text-center">3D project {progress.toFixed(1)}% Loaded</p></Html>
  }
  
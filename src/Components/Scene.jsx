import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Loader } from '../App'
import Model from '../Model'

export default function Scene() {
  return (
        <div className='bg-black min-h-screen flex justify-center items-center flex-col'>
      
      <div className='w-[80%] h-[70vh]'>
        <Canvas gl={{antialias: true}} dpr={[1,1,5]}>
          {/* eslint-disable react/no-unknown-property */}
          <directionalLight position={[1, 1, 1]} intensity={10} color="#9CDBA6" className='bg-transparent' />
          <OrbitControls/>
          <Suspense fallback={<Loader/>}>
            <Model/>
          </Suspense>
        </Canvas>
      </div>


      <p className="text-white text-center mt-4"> 
        Isomatrix
      </p>
    </div>
  )
}

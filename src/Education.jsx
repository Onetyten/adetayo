/* eslint-disable react/no-unknown-property */
import { useEffect, useRef, useState,Suspense } from "react";
import EducationCard from "./EducationCard";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import Loader from "./Components/Loader";


export default function Education() {
    const EduRef = useRef(null)
    const [isVisible,setIsVisible] = useState(false)
    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entry])=>{
                setIsVisible(entry.isIntersecting)
            },{threshold:0.3}
        )

        if (EduRef.current) observer.observe(EduRef.current)
        
        return ()=>{
            // eslint-disable-next-line react-hooks/exhaustive-deps
            if (EduRef.current) observer.unobserve(EduRef.current)    
        }
        

    },[])

  return (
    <div ref={EduRef}  className="min-w-screen min-h-screen overflow-x-hidden relative box-border section-snap flex-col  flex xl:flex-row items-stretch justify-between bg-white">
        <div className='flex-[0.5] flex-col-reverse md:flex-col  bg-darkgrey xl:min-h-screen flex justify-center items-center w-full'>
            
            <div className="w-full p-8">
                <p className="text-center md:text-left  md:text-3xl text-xl font-roboto font-extrabold text-white">Education</p>
            </div>
            <div className="w-full xl:h-screen h-96">
                {isVisible && (<Canvas >
                    <Suspense fallback={<Loader/>}>
                        <Model/>
                    </Suspense>
                    
                    <directionalLight position={[1,2,6]} rotation={[1,2,6]} intensity= {2} color={"#9bc0ce"}/>
                    <directionalLight position={[-1,2,6]} rotation={[1,2,-6]} intensity= {1} color={"#f8ee95"}/>
                    {/* <OrbitControls/> */}
                </Canvas>)}
            </div>
            


            

        </div>

        <div className='flex-1 min-h-screen '>
            <div className="min-h-screen grid grid-cols-[1fr_2px_1fr] gap-4 items-center p-8">
                <div className="grid grid-rows-3 gap-2 w-full justify-items-end ">
                    <div>2019</div>
                    <EducationCard projectname="Aptech computer institute" timeline="2023 - 2024" skills = "Web development, Python programming" desc="In 2023. I expanded my knowledge in Web Development and Python programming at Aptech Computer Institute, located in Adamasingba, Ibadan.This programme gave a solid foundation in front-end web development. During this time, I collaborated with various developers to create functional web apps" />
                    <div>2024</div>
                </div>

                <div className="grid grid-rows-3 h-full">
                    <div className="bg-myblack h-full relative">
                        <div className="w-4 h-4 border-[1px] border-myblack rounded-full bg-white absolute hover:bg-myteal top-0 -left-2">

                        </div>
                    </div>
                    <div className="bg-myblack h-full  relative">
                        <div className="w-4 h-4 border-[1px] border-myblack rounded-full bg-white hover:bg-myteal absolute top-0 -left-2">

                        </div>
                    </div>
                    <div className="bg-myblack  h-full  relative">
                        <div className="w-4 h-4 border-[1px] border-myblack rounded-full bg-white absolute hover:bg-myteal top-0 -left-2">

                        </div>
                    </div>
                    
                </div>

                <div className="grid grid-rows-3 gap-2">
                    <EducationCard projectname="Olabisi Onabanjo University " timeline="2019 - now" skills = "Computer Engineering" desc="Currently, I am pursuing a Bachelor of Engineering in Computer Engineering at Olabisi Onabanjo University, Ibogun. My experience here has exposed me to core principles of computer engineering, including software development, Artificial intelligence, embedded systems, and digital system."/>
                    <div>2023</div>
                    <EducationCard projectname="AltSchool Africa" timeline="2024 - now" skills = "Front-end Engineering" desc="In 2024, I furthered my expertise by becoming a Backend Engineering candidate at AltSchool Africa. This specialized program focuses on developing advanced backend development skills, with a curriculum that covers the MERN JavaScript stack (MongoDB, Express.js, React, Node.js)."/>

                </div>
            </div>
        </div>




        
    </div>
  )
}

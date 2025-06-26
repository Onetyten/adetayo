/* eslint-disable react/no-unknown-property */
import {useRef} from "react";
import EducationCard from "./EducationCard";


export default function Education() {
    const EduRef = useRef(null)

  return (
    <div ref={EduRef}  className="min-w-screen min-h-screen overflow-x-hidden relative box-border section-snap flex-col  flex xl:flex-row items-stretch justify-between bg-white">


        <div className='flex-1 min-h-screen '>
            <div className="min-h-screen grid grid-cols-[1fr_2px_1fr] gap-4 items-center p-8 py-32 xl:py-64">
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

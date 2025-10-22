/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { Element } from "react-scroll";
import EducationCard from "./EducationCard";
import { useEffect } from "react";


export default function Education(props) {
    const {pageIndex,viewList,setCurrentIndex,pageUrls} = props
    useEffect(()=>{
        setCurrentIndex(pageIndex)
    },[viewList[pageIndex].inView])


  return (
    <Element name={pageUrls[pageIndex]}>
        <div ref={viewList[pageIndex].ref} id={pageUrls[pageIndex]}  className="min-w-screen min-h-screen overflow-x-hidden relative box-border section-snap flex-col  flex xl:flex-row items-stretch justify-between py-20 sm:py-12 p-2 pl-10 bg-white">

            <div className='absolute top-16 sm:top-8 left-2'>
                <p className='md:text-2xl text-md font-intel font-extrabold text-darkgrey'>Experience</p>
            </div>


            <div className='flex-1 min-h-screen '>
                <div className="min-h-screen grid grid-cols-[12px_1fr] sm:grid-cols-[1fr_2px_1fr] pl-6 sm:pl-0 gap-1 sm:gap-4 items-center p-1 md:p-8 py-16 xl:py-32">

                    <div className="flex flex-col w-full h-full items-start sm:items-end  gap-10  sm:order-1 order-2">

                        <div className="sm:min-h-96 min-h-80 justify-around items-center flex flex-1 ">
                           <div className="">
                               <EducationCard   projectname="AltSchool Africa" timeline="2024 - now" skills = "Front-end Engineering" desc="In 2024, I furthered my expertise by becoming a Backend Engineering candidate at AltSchool Africa. This specialized program focuses on developing advanced backend development skills, with a curriculum that covers the MERN JavaScript stack (MongoDB, Express.js, React, Node.js)."/> 
                           </div>
                        </div>

                        <div className="sm:min-h-96 min-h-80 justify-around items-center flex">
                           <div className="block sm:hidden">
                               <EducationCard projectname="Aptech computer institute" timeline="2023 - 2024" skills = "Web development, Python programming" desc="In 2023. I expanded my knowledge in Web Development and Python programming at Aptech Computer Institute, located in Adamasingba, Ibadan.This programme gave a solid foundation in front-end web development. During this time, I collaborated with various developers to create functional web apps" /> 
                           </div>
                        </div>

                        <div className="sm:min-h-96 min-h-80 justify-around items-center flex">
                           <div className="">
                                <EducationCard projectname="Olabisi Onabanjo University " timeline="2019 - 2025" skills = "Computer Engineering" desc="I pursued my Bachelors of Engineering in Computer Engineering at Olabisi Onabanjo University, Ibogun. My experience there had exposed me to core principles of computer engineering, including software development, Artificial intelligence, embedded systems, and digital system."/> 
                           </div>
                        </div>
                        
                    </div>

                    <div className="grid grid-rows-3 h-full sm:order-2 order-1">
                        <div className="bg-myblack w-0.5 h-full relative">
                            <div className="w-4 h-4 border-[1px] border-myblack rounded-full bg-white absolute hover:bg-myteal top-0 -left-2">
                                <div className="absolute sm:left-6 sm:-top-1.5 -left-12 -top-1.5">2024</div>
                            </div>
                        </div>
                        <div className="bg-myblack w-0.5 h-full  relative">
                            <div className="w-4 h-4 border-[1px] border-myblack rounded-full bg-white hover:bg-myteal absolute top-5 -left-2">
                                <div className="absolute -left-12 -top-1.5 ">2023</div>
                            </div>
                        </div>
                        <div className="bg-myblack w-0.5 h-full  relative">
                            <div className="w-4 h-4 border-[1px] border-myblack rounded-full bg-white absolute hover:bg-myteal top-6 -left-2">
                                <div className="absolute sm:left-6 sm:-top-1.5 -left-12 -top-1.5">2019</div>
                            </div>
                        </div>
                    </div> 

                    
                    <div  className="sm:flex flex-col w-full h-full items-start hidden gap-10 sm:order-3 ">
                        <div className="sm:min-h-96 min-h-80 justify-around items-center flex">
                           <div className="block sm:hidden">
                               <EducationCard   projectname="AltSchool Africa" timeline="2024 - 2025" skills = "Front-end Engineering" desc="In 2024, I furthered my expertise by becoming a Backend Engineering candidate at AltSchool Africa. This specialized program focuses on developing advanced backend development skills, with a curriculum that covers the MERN JavaScript stack (MongoDB, Express.js, React, Node.js)."/> 
                           </div>
                        </div>

                         <div className="sm:min-h-96 min-h-80 justify-around items-center flex">
                           <div className="hidden sm:block">
                               <EducationCard projectname="Aptech computer institute" timeline="2023 - 2024" skills = "Web development, Python programming" desc="In 2023. I expanded my knowledge in Web Development and Python programming at Aptech Computer Institute, located in Adamasingba, Ibadan.This programme gave a solid foundation in front-end web development. During this time, I collaborated with various developers to create functional web apps" /> 
                           </div>
                        </div>

                        <div className="sm:min-h-96 min-h-80 justify-around items-center flex">
                           <div className="block sm:hidden">
                                <EducationCard projectname="Olabisi Onabanjo University " timeline="2019 - 2025" skills = "Computer Engineering" desc="I pursued my Bachelors of Engineering in Computer Engineering at Olabisi Onabanjo University, Ibogun. My experience there had exposed me to core principles of computer engineering, including software development, Artificial intelligence, embedded systems, and digital system."/> 
                           </div>
                        </div>

                       


                    </div>
                </div>
            </div>




            
        </div>
    </Element>
  )
}

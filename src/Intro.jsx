/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { useEffect, useRef } from "react"

export default function Intro(props) {
    const {pageIndex,pageUrls,viewList,setCurrentIndex} = props

    const iconRef = useRef([])

    useGSAP(()=>{
        gsap.from('.animated-divided',{height:'0%',ease:'power1.out',duration:0.5})
        gsap.from('.background-canvas',{width:'0%',ease:'power1.out',duration:0.5, delay:0.5})
        gsap.from('.inner-animated-divided',{height:'0%',opacity:0,ease:'expo.out',duration:1.5, delay:1})
        gsap.from('.left-span',{opacity:0,ease:'power1.out',x: "-100" ,duration:1,delay:1})
        gsap.from('.right-span',{opacity:0,ease:'power1.out',x: "-100" ,duration:0.5,delay:1.5})
        gsap.from('.slide-in',{width:0,ease:'power1.out' ,duration:0.5,delay:2.0})
        gsap.from('.name-popup',{opacity:0,y:20,ease:'power1.out' ,duration:0.5,delay:2.5})
        gsap.from (iconRef.current,{x:'-200', opacity:0, stagger:0.15,duration:1,delay:0.5})
    })
    

    useEffect(()=>{
        setCurrentIndex(pageIndex)
    },[viewList[pageIndex].inView])
    
  return (
        <div ref={viewList[pageIndex].ref} id={pageUrls[pageIndex]} className='max-w-full h-dvh relative box-border overflow-hidden section-snap'>

            {/* the two backgrounds that are going to scroll in */}
            <div className='max-w-full h-dvh flex  flex-row relative justify-start '>
                <div className="flex-1">
                    <div className='bg-darkgrey background-canvas h-dvh w-[101%]'>

                    </div>
                </div>

                <div className="flex-1">
                    <div className='bg-darkgrey background-canvas h-dvh w-[100%]'>

                    </div>
                </div>
            </div>

            {/* Two hidden hello text */}
            {/* Left side hello */}
            <div className="absolute h-dvh top-0 w-screen flex head-shadows items-center">

            <div className='h-dvh top-0 w-screen absolute box-border flex-1  overflow-hidden flex justify-start  items-center'>
                    <div className="justify-self-start w-[50vw] h-full flex justify-center items-center overflow-hidden">
                        <span className="left-span">
                            <p className="text-[40vw] xl:text-[30vw] uppercase ab font-intel font-bold text-lightgrey text-center left-title">
                                Hello
                            </p>     
                        </span>
                        
                    </div>

                </div>


                {/* right side hello */}
                <div className='h-dvh top-0 w-screen absolute box-border flex-1  overflow-hidden flex justify-end  items-center'>
                    <div className="justify-self-end w-[50vw] h-full flex justify-center items-center overflow-hidden">
                        <span className="right-span">
                            <p className=" text-[40vw] uppercase xl:text-[30vw] ab font-intel font-bold text-lightgrey text-center right-title">
                                Hello 
                            </p>   
                        </span>
                        
                    </div>

                </div>




            </div>


            <div className='animated-divided h-dvh top-0 w-screen absolute box-border flex justify-center items-center'>
                <div className="h-full w-[1px] bg-[#5d5c5c] flex items-center">
                    <div className=" inner-animated-divided h-full w-full bg-white">

                    </div>
                </div>
            </div>
        
            <div className='h-dvh top-0 w-screen absolute box-border flex justify-center items-center'>
                <div className="flex flex-col gap-1">
                    <div className="bg-white h-10 overflow-hidden slide-in uppercase font-intel text-center text-lg xs:text-2xl px-1 sm:px-5 py-1 font-extralight">
                        <p  className="name-popup">
                            &lt; LABAEKA ADETAYO /&gt;
                        </p>
                    </div>
                    <div className="bg-white h-10 slide-in overflow-hidden uppercase text-center font-intel text-lg xs:text-2xl px-1 sm:px-5 py-1 font-extralight">
                        <p className="name-popup">
                            Frontend engineer
                        </p>
                    </div>
                </div>

            </div>


            <div className='h-dvh top-0 w-screen absolute box-content flex justify-center items-end '>
                <div className="w-[80%] xl:w-[50%] h-12 bg-lightgrey  sm:mb-0 flex justify-center gap-5 sm:gap-10 items-center overflow-hidden">



                    <a href="https://github.com/Onetyten" target='_blank' rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="text-white hover:text-lightergrey text-2xl xl:text-3xl link-shadow " ref ={(el)=>{iconRef.current[0] = el}}/>
                    </a>
                    <a href="https://www.linkedin.com/in/labaeka-adetayo-a9681a247" target='_blank' rel="noopener noreferrer" >
                        <FontAwesomeIcon icon={faLinkedin} className="text-white hover:text-lightergrey  text-2xl xl:text-3xl link-shadow" ref ={(el)=>{iconRef.current[1] = el}}/>
                    </a>
                    <a href="mailto:labaekaabdulrazaq@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} className="text-white hover:text-lightergrey  text-2xl xl:text-3xl link-shadow" ref ={(el)=>{iconRef.current[2] = el}}/>
                    </a>
                    <a href="tel:+2349155073769">
                        <FontAwesomeIcon icon={faPhone} className="text-white hover:text-lightergrey text-2xl xl:text-3xl link-shadow" ref ={(el)=>{iconRef.current[3] = el}}/>
                    </a>
                    <a href="https://x.com/Onetyten_exe" target='_blank' rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} className="text-white hover:text-lightergrey text-2xl xl:text-3xl link-shadow" ref ={(el)=>{iconRef.current[4] = el}}/>
                    </a>

                </div>

            </div>

            
        
        </div>
    

  )
}

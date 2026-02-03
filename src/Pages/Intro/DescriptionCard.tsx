import TypescriptLogo from "../../assets/Icons/Typescript_logo.png"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import SlotText from "./SlotText";

interface propType{
    setShowContact:React.Dispatch<React.SetStateAction<boolean>>
}

export default function DescriptionCard({setShowContact}:propType) {
    const [hoveringEmail,setHoveringEmail] = useState(false)
    const [hoveringResume,setHoveringResume] = useState(false)

  return (
    <div className="w-11/12 2xl:w-10/12 py-10 flex flex-col gap-8">
        <p className="text-5xl font-offbit leading-relaxed sm:leading-tight">
            I thrive in the <span className="font-grotesk origin-bottom-left relative inline-block rotate-0 xl:rotate-[-5deg] bg-blue px-2">
                <span className="absolute inline-block -right-3 -top-5 border-darkgrey border-2" > <img src={TypescriptLogo} alt="" className="size-6" /></span>
                    Typescript 
            </span> ecosystem, proficient in technologies like Next.js, React, Node.js, and React Native.
        </p>

        <div className="w-full flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div onMouseEnter={()=>setHoveringEmail(prev=>(prev?prev:true))} onMouseLeave={()=>setHoveringEmail(prev=>(prev?false:prev))} className="border-1 text-text hover:text-darkgrey cursor-pointer border-muted p-[1px] bg-card flex relative items-center transition-all duration-300 h-12">

                <div className={`h-11 absolute bg-text aspect-square flex ${hoveringEmail?"justify-start w-full":"w-11"} pl-2.5 transition-all duration-300 items-center`}>
                    <FontAwesomeIcon icon={faArrowRight} className="h-full x-0 bg-text text-darkgrey size-6" />
                </div>
                <span onClick={()=>setShowContact(true)} className="px-6 pl-14 text-sm font-bold relative z-10">
                    <SlotText text="SEND A MESSAGE" active={hoveringEmail}/>
                </span> 
            </div>

            <div onMouseEnter={()=>setHoveringResume(prev=>(prev?prev:true))} onMouseLeave={()=>setHoveringResume(prev=>(prev?false:prev))}  className="text-text cursor-pointer">
                <span className="text-sm font-bold relative uppercase">
                    <SlotText text="Download Resume" active={hoveringResume}/>
                </span> 
            </div>

        </div>
    </div>
  )
}

import TypescriptLogo from "../../assets/Icons/Typescript_logo.png"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";


export default function DescriptionCard() {
    const [hoveringEmail,setHoveringEmail] = useState(false)

  return (
    <div className="w-10/12">
        <p className="text-5xl font-offbit leading-relaxed">
            I thrive in the <span className="font-grotesk origin-bottom-left relative inline-block rotate-[-5deg] bg-blue px-2">
                <span className="absolute inline-block -right-3 -top-5 border-darkgrey border-2" > <img src={TypescriptLogo} alt="" className="size-6" /></span>
                    Typescript 
            </span> ecosystem, proficient in technologies like Next.js, React, Node.js, and React Native.
        </p>

        <div className="w-full flex items-center gap-6">
            <div onMouseEnter={()=>setHoveringEmail(prev=>(prev?prev:true))} onMouseLeave={()=>setHoveringEmail(prev=>(prev?false:prev))} className="border-1 text-text hover:text-darkgrey cursor-pointer border-muted p-[1px] bg-card flex relative items-center transition-all duration-300 h-12">

                <div className={`h-11 absolute bg-text aspect-square flex ${hoveringEmail?"justify-start w-full":"w-11"} pl-2.5 transition-all duration-300 items-center`}>
                    <FontAwesomeIcon icon={faArrowRight} className="h-full x-0 bg-text text-darkgrey size-6" />
                </div>
                <span className="px-6 pl-14 text-sm font-bold relative z-10">SEND A MESSAGE</span> 
            </div>

            <div className="text-text cursor-pointer">
                <span className="text-sm font-bold relative uppercase">Download Resume</span> 
            </div>

        </div>
    </div>
  )
}

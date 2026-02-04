import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import SlotText from "../Pages/Intro/SlotText";


interface propType{
    setShowContact:React.Dispatch<React.SetStateAction<boolean>>
}

export default function ActionButton({setShowContact}:propType) {
    const [hoveringEmail,setHoveringEmail] = useState(false)
    const [hoveringResume,setHoveringResume] = useState(false)
  return (
        <div className="w-full flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div onMouseEnter={()=>setHoveringEmail(prev=>(prev?prev:true))} onMouseLeave={()=>setHoveringEmail(prev=>(prev?false:prev))} className="border-1 text-text hover:text-darkgrey cursor-pointer border-muted p-[1px] bg-card/20 flex relative items-center transition-all duration-300 h-12">

                <div className={`h-11 absolute bg-text aspect-square flex ${hoveringEmail?"justify-start w-full":"w-11"} pl-2.5 transition-all duration-300 items-center`}>
                    <FontAwesomeIcon icon={faArrowRight} className="h-full x-0 bg-text text-darkgrey size-6" />
                </div>
                <span onClick={()=>setShowContact(true)} className="px-6 pl-14 text-sm font-bold relative z-10">
                    <SlotText text="SEND A MESSAGE" active={hoveringEmail}/>
                </span> 
            </div>

            <div onMouseEnter={()=>setHoveringResume(prev=>(prev?prev:true))} onMouseLeave={()=>setHoveringResume(prev=>(prev?false:prev))}  className="text-text cursor-pointer">
                <a href="https://docs.google.com/document/d/1KOrM3naUz9AZJNoqXWN-EP2jK1UNcRWv5SJQsktESYg/export?format=pdf" className="text-sm font-bold relative uppercase">
                    <SlotText text="Download Resume" active={hoveringResume}/>
                </a> 
            </div>

        </div>
  )
}

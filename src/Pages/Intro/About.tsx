import { useState } from 'react'
import aboutImage from "../../assets/profile.webp"
import ConsoleText from "../../ConsoleText"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import SlotText from './SlotText'


export default function About() {

    const [hoveringGit,setHoveringGit] = useState(false)

  return (
    <div className='flex flex-col flex-grow justify-center gap-12 h-full w-full'>
        <div className="w-full flex justify-center items-center">
            <img src={aboutImage} alt="" className="w-56 hover:shadow-[0px_0px_0px_#292824] transition-all duration-500 shadow-[0px_0px_0px_#292824] rounded-full object-contain" />
        </div> 

        <ConsoleText projectname = 'About' className="w-full">
            <div className='flex flex-col text-base gap-3 sm:gap-4'>
                <div>
                    <p className='text-lg'>Labaeka_Adetayo</p>
                </div>
                <div>
                    <p className='text-muted' >Stack : <span className='text-text'>MERN_STACK</span></p> 
                </div>

                <div>
                    Hi, i&apos;m Adetayo a Fullstack developer with a lifelong obsession for building. Over the years i&apos;ve worked on a diverse range of projects from high performance real-time backend systems to high fidelity frontends.
                </div>

                <a href= "https://github.com/Onetyten" target='_blank' onMouseEnter={()=>setHoveringGit(prev=>(prev?prev:true))} onMouseLeave={()=>setHoveringGit(prev=>(prev?false:prev))} className="border-1 text-text hover:text-darkgrey w-fit cursor-pointer border-muted p-[1px] bg-card flex relative items-center transition-all duration-300 h-12">
                    <div className={`h-11 absolute bg-text aspect-square flex ${hoveringGit?"justify-start w-full":"w-11"} pl-2.5 transition-all duration-300 items-center`}>
                        <FontAwesomeIcon icon={faGithub} className="h-full x-0 bg-text text-darkgrey text-xl" />
                    </div>
                    <span className="px-6 pl-14 text-sm font-bold uppercase relative z-10">
                        <SlotText text="GITHUB" active={hoveringGit}/>
                    </span> 
                </a>

            </div>
        </ConsoleText>
    </div>
  )
}

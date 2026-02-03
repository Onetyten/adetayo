import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import SlotText from "../Intro/SlotText"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"


interface propType{
    role : string,
    skills : string[],
    githubPath : string,
    projectPath : string,
    desc : string,
}

export default function ProjectItem(props:propType) {

    const { role,skills,desc,githubPath,projectPath} = props
    const [hoveringProject,setHoveringProject] = useState(false)
    const [hoveringGit,setHoveringGit] = useState(false)
    
  return (
    <div className='flex flex-col gap-3 lg:gap-4 text-text text-base'>
        <div>
           <p className='text-muted' >Role : <span className="text-text">{role}</span></p> 
        </div>

        <div className='text-lightergrey'>
            <span className='text-muted'>Tools :</span> {skills.join(", ")}.
        </div>

        <div>
            {desc}
        </div>

        <div className=' flex gap-3 items-center'>
            <a href={projectPath} target='_blank' onMouseEnter={()=>setHoveringProject(prev=>(prev?prev:true))} onMouseLeave={()=>setHoveringProject(prev=>(prev?false:prev))} className="border-1 text-text hover:text-darkgrey cursor-pointer border-muted p-[1px] bg-card flex relative items-center transition-all duration-300 h-12">
                <div className={`h-11 absolute bg-text aspect-square flex ${hoveringProject?"justify-start w-full":"w-11"} pl-2.5 transition-all duration-300 items-center`}>
                    <FontAwesomeIcon icon={faArrowRight} className="h-full x-0 bg-text text-darkgrey size-6" />
                </div>
                <span className="px-6 pl-14 text-sm font-bold relative z-10">
                    <SlotText text="VIEW PROJECT" active={hoveringProject}/>
                </span> 
            </a>

            <a href={githubPath} target="_blank" onMouseEnter={()=>setHoveringGit(prev=>(prev?prev:true))} onMouseLeave={()=>setHoveringGit(prev=>(prev?false:prev))}  className="text-text cursor-pointer">
                <span className="text-sm font-bold relative uppercase">
                    <SlotText text="GITHUB" active={hoveringGit}/>
                </span> 
            </a>
            
        </div>
    </div>
    
  )
}


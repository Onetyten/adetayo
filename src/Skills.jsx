import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"


import JsIMG from '../public/Images/Skills/Js.png'
import ReactIMG from '../public/Images/Skills/reactlogo.png'
import ReactNIMG from '../public/Images/Skills/ReactNative.png'
import GitImg from '../public/Images/Skills/GitIMG.png'
import NodeIMG from '../public/Images/Skills/NodeIMG.png'
import HTML from '../public/Images/Skills/Html.png'
import CSS from '../public/Images/Skills/Css.png'
import Mongodb from '../public/Images/Skills/mongodb.png'
import Express from '../public/Images/Skills/Express.png'
import Python from '../public/Images/Skills/Python.png'
import Tailwind from '../public/Images/Skills/tailwind.png'
import ThreeJsIMG from '../public/Images/Skills/threejs.png'
import SkillItem from './Components/skillItem'
import { useRef } from 'react'


export default function Skills() {
    gsap.registerPlugin(ScrollTrigger)
    const skillBoxRef = useRef([])
    const headerRef = useRef()
    const skillContainer = [
        {name:"Javascript", source: JsIMG  },
        {name:"React",source: ReactIMG},
        {name:"React Native", source: ReactNIMG},
        {name:"NodeJS", source: NodeIMG},
        {name:"Git", source: GitImg},
        {name:"HTML5", source: HTML},
        {name:"CSS3", source: CSS},
        {name:"MongoDB", source: Mongodb },
        {name:"ExpressJS", source: Express },
        {name:"React", source: ReactIMG },
        {name:"Python", source: Python },
        {name:"Tailwind", source: Tailwind },
        {name:"ThreeJS", source: ThreeJsIMG},

    ]
    useGSAP(()=>{
        gsap.from(skillBoxRef.current,{y:'50',opacity:0,stagger:0.2,duration:2 ,scrollTrigger:{trigger:skillBoxRef.current,toggleActions:'restart none none none'}})
    })
  return (
    <div className='max-w-full h-screen relative box-border section-snap flex overflow-hidden justify-center flex-wrap items-center' ref={headerRef}>

        <div className=" w-[60%]  relative box-border section-snap flex overflow-hidden justify-center gap-12 flex-wrap items-center">
            {skillContainer.map((skill, index)=>{
                return(
                    <div ref={(el)=>{skillBoxRef.current[index] = el}} key={index}>
                        <SkillItem source = {skill.source} title = {skill.name}/>
                    </div>
                )

            })}
        </div>

       
        


    </div>

  )
}

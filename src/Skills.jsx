import JsIMG from '/Images/Skills/Js.png'
import ReactIMG from '/Images/Skills/reactlogo.png'
import ReactNIMG from '/Images/Skills/ReactNative.png'
import GitImg from '/Images/Skills/GitIMG.png'
import NodeIMG from '/Images/Skills/NodeIMG.png'
import HTML from '/Images/Skills/Html.png'
import CSS from '/Images/Skills/Css.png'
import Mongodb from '/Images/Skills/mongodb.png'
import Express from '/Images/Skills/Express.png'
import Python from '/Images/Skills/Python.png'
import Tailwind from '/Images/Skills/tailwind.png'
import ThreeJsIMG from '/Images/Skills/threejs.png'
import NextJSImg from '/Images/Skills/NextJS.png'
import SkillItem from './Components/SkillItem'
import JestImg from '/Images/Skills/jest.png'
import TypescriptImg from '/Images/Skills/typescript.png'
import { motion } from 'framer-motion' 



export default function Skills() {
    const skillContainer = [
        {name:"Javascript", source: JsIMG  },
        {name:"React",source: ReactIMG},
        {name:"NextJS",source: NextJSImg},
        {name:"React Native", source: ReactNIMG},
        {name:"NodeJS", source: NodeIMG},
        {name:"MongoDB", source: Mongodb },
        {name:"ExpressJS", source: Express },
        {name:"Typescript", source: TypescriptImg },
        {name:"Git", source: GitImg},
        {name:"HTML5", source: HTML},
        {name:"CSS3", source: CSS},
        {name:"Jest", source: JestImg },
        {name:"Python", source: Python },
        {name:"Tailwind", source: Tailwind },
        {name:"ThreeJS", source: ThreeJsIMG},
    ]
  return (
    <div className='max-w-full h-screen relative box-border section-snap flex overflow-hidden justify-center flex-wrap items-center'>

        <div className='absolute top-[3%] left-[4%] md:top-[10%] md:left-[5%]'>
            <p className='md:text-3xl text-xl font-intel font-extrabold text-white'>Skills</p>
        </div>

        <div className=" w-[60%]  relative box-border section-snap flex overflow-hidden justify-center gap-12 flex-wrap items-center">
            {skillContainer.map((skill, index)=>{
                return(
                    <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{duration:2,delay:index/10 }} key={index}>
                        <SkillItem source = {skill.source} title = {skill.name}/>
                    </motion.div>
                )

            })}
        </div>

       
        


    </div>

  )
}

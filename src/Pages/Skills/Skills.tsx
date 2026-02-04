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
import JestImg from '/Images/Skills/jest.png'
import TypescriptImg from '/Images/Skills/typescript.png'
import { motion } from 'framer-motion' 
import Box from '../../Components/Box'
import SkillItem from './SkillItem'



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
    <div className='max-w-full pointer-events-auto xl:min-h-dvh xl:flex-row flex-col gap-0.5 relative p-0.5 flex text-text font-grotesk'>
        <Box className=' xl:min-w-md w-full xl:w-lg flex justify-start items-start flex-shrink-0 max-w-full'>
            <div className="flex justify-center font-semibold items-center  p-1.5 sm:p-3 px-5 border-muted border-1 rounded-full gap-2">
                <span className="size-2 rounded-full bg-blurple"></span>
                SKILLS
            </div>
        </Box>

        <Box className='flex items-center max-w-full justify-center gap-6 flex-col text-text w-full py-32 xl:min-h-dvh'>
            <div className= "w-full md:my-4 relative flex overflow-hidden justify-center gap-14 flex-wrap items-center">
                {skillContainer.map((skill, index)=>{
                    return(
                        <motion.div initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} transition={{duration:0.5,delay:index/10 }} key={index}>
                            <SkillItem source = {skill.source} title = {skill.name}/>
                        </motion.div>
                    )
                })}
            </div>
        </Box>
    </div>
  )
}

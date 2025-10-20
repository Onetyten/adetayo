import PropTypes from 'prop-types'
import { motion } from 'framer-motion'






export default function FixedConsole({children,projectname,isTimeline}) {
  return (
        <div className=' max-w-md xl:min-w-sm xl:max-w-lg border-[1px] border-lightergrey bg-lightgrey flex flex-col console-shadow text-xs '>
          <div className='border-b-[1px] min-h-12 p-2 w-full border-b-lightergrey flex flex-row items-center justify-start'>
            <div className='flex items-center justify-center w-full relative'>
                <div className={` gap-3 ml-4 h-full items-center ${isTimeline?'hidden md:flex':''}`}>
                    <div className='bg-mypurple hover:bg-pink-600 w-3 h-3 rounded-full'></div>
                    <div className='bg-orange-300 hover:bg-orange-400 w-3 h-3 rounded-full'></div>
                    <div className='bg-myteal hover:bg-green-600 w-3 h-3 rounded-full'></div>
                </div>

                <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}}  className='flex-1 text-center w-full flex justify-center'>
                    <p className='font-intel text-white hover:text-lightergrey text-sm md:text-xl'>{projectname}</p>  
                </motion.div>

            </div>

          </div>

          <div className='text-white xl:px-4 xl:py-8 2xl:text-base text-xs p-2 box-border'>
            {children}
          </div> 
        </div>
  )
}

FixedConsole.propTypes = {
    children:PropTypes.node
}
FixedConsole.propTypes = {
    projectname:PropTypes.node
}
FixedConsole.propTypes = {
    isTimeline:PropTypes.bool
}
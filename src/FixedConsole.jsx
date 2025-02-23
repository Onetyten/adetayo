import PropTypes from 'prop-types'
import { motion } from 'framer-motion'






export default function FixedConsole({children,projectname}) {
  return (
        <div className=' max-w-md xl:min-w-xs xl:max-w-lg border-[1px] border-lightergrey bg-lightgrey flex flex-col console-shadow text-xs '>
          <div className='border-b-[1px] h-12 w-full border-b-lightergrey flex flex-row items-center justify-start'>
            <div className='flex items-center justify-center w-full relative'>
                <div className=' hidden md:flex gap-3 ml-4 absolute top-0 left-0'>
                    <div className='bg-mypurple hover:bg-pink-600 w-3 h-3 rounded-full'></div>
                    <div className='bg-orange-300 hover:bg-orange-400 w-3 h-3 rounded-full'></div>
                    <div className='bg-myteal hover:bg-green-600 w-3 h-3 rounded-full'></div>
                </div>

                <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}}  className='flex-1 text-center w-full flex justify-center'>
                    <p className='font-roboto  text-white hover:text-lightergrey xl:text-md text-xs'>{projectname}</p>
                    
                </motion.div>

            </div>

          </div>

          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}} className='text-white xl:px-4 xl:py-8 px-3 py-3 box-border'>
            {children}
          </motion.div>
        </div>
  )
}

FixedConsole.propTypes = {
    children:PropTypes.node
}
FixedConsole.propTypes = {
    projectname:PropTypes.node
}

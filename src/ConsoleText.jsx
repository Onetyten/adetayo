import PropTypes from 'prop-types'






export default function ConsoleText({children,projectname}) {
  return (
        <div className='md:w-[60%] w-[90%] border-[1px] border-lightergrey bg-lightgrey flex flex-col console-shadow text-xs '>
          <div className='border-b-[1px] min-h-12 w-full border-b-lightergrey flex flex-row items-center justify-start'>
            <div className='flex items-center justify-center w-full px-4 relative'>
                <div className=' flex w-14 gap-3 top-0 left-0 h-full items-center'>
                    <div className='bg-mypurple hover:bg-pink-600 w-3 h-3 rounded-full'></div>
                    <div className='bg-orange-300 hover:bg-orange-400 w-3 h-3 rounded-full'></div>
                    <div className='bg-myteal hover:bg-green-600 w-3 h-3 rounded-full'></div>
                </div>

                <div className='flex-1 p-2 sm:r-2  text-center w-full flex justify-center'>
                    <p className='text-white hover:text-lightergrey capitalize text-sm md:text-xl'>{projectname}</p>
                    
                </div>

                <div className='w-14'>

                </div>

            </div>

          </div>

          <div className='text-white p-6 box-border 2xl:text-base text-xs'>
            {children}
          </div>
        </div>
  )
}

ConsoleText.propTypes = {
    children:PropTypes.node
}
ConsoleText.propTypes = {
    projectname:PropTypes.node
}

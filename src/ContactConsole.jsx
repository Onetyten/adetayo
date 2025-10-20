import PropTypes from 'prop-types'






export default function ContactConsole({children,projectname}) {
  return (
        <div className=' md:w-[60%] w-[90%] border-[1px] border-lightergrey bg-lightgrey flex flex-col console-shadow text-xs '>
          <div className='border-b-[1px] h-12 w-full border-b-lightergrey flex flex-row items-center justify-start'>
            <div className='flex items-center justify-center w-full relative'>
                <div className='flex gap-3 ml-4 absolute top-0 left-0 h-full items-center'>
                    <div className='bg-mypurple hover:bg-pink-600 w-3 h-3 rounded-full'></div>
                    <div className='bg-orange-300 hover:bg-orange-400 w-3 h-3 rounded-full'></div>
                    <div className='bg-myteal hover:bg-green-600 w-3 h-3 rounded-full'></div>
                </div>

                <div className='flex-1 text-center w-full flex justify-center text-lg 2xl:text-2xl'>
                    <p className='text-white text-sm md:text-xl'>{projectname}</p>
                    
                </div>

            </div>

          </div>

          <div className='text-white p-5 box-border flex flex-col justify-between'>
            {children}
          </div>
        </div>
  )
}

ContactConsole.propTypes = {
    children:PropTypes.node
}
ContactConsole.propTypes = {
    projectname:PropTypes.node
}

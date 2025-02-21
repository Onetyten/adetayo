import PropTypes from 'prop-types'






export default function ConsoleText({children,projectname}) {
  return (
        <div className='w-[60%] border-[1px] border-lightergrey bg-lightgrey flex flex-col console-shadow text-xs '>
          <div className='border-b-[1px] h-12 w-full border-b-lightergrey flex flex-row items-center justify-start'>
            <div className='flex items-center justify-center w-full relative'>
                <div className='flex gap-3 ml-4 absolute top-0 left-0'>
                    <div className='bg-mypurple w-3 h-3 rounded-full'></div>
                    <div className='bg-orange-300 w-3 h-3 rounded-full'></div>
                    <div className='bg-myteal w-3 h-3 rounded-full'></div>
                </div>

                <div className='flex-1 text-center w-full flex justify-center'>
                    <p className='font-roboto text-white text-md'>{projectname}</p>
                    
                </div>

            </div>

          </div>

          <div className='text-white px-4 py-8 box-border'>
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

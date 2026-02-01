import PropTypes from 'prop-types'
import clsx from 'clsx'


interface propTypes{
    children?:React.ReactNode
    className?:string
    projectname:string
}

export default function ConsoleText({children,className,projectname}:propTypes) {
  return (
        <div className={clsx('border-[1px] transition-all duration-500 border-background flex flex-col hover:shadow-[5px_5px_0px_#292824] shadow-[10px_10px_0px_#292824] text-xs ',className?className:"")}>
          <div className='border-b-[1px] min-h-12 w-full border-b-background flex flex-row items-center justify-start'>
            <div className='flex items-center justify-center w-full px-4 relative'>
                <div className=' flex w-14 gap-3 top-0 left-0 h-full items-center'>
                    <div className='bg-blue hover:bg-blue-800 w-3 h-3 rounded-full'></div>
                    <div className='bg-green-500 hover:bg-green-800 w-3 h-3 rounded-full'></div>
                    <div className='bg-red hover:bg-green-600 w-3 h-3 rounded-full'></div>
                </div>

                <div className='flex-1 p-2 sm:r-2  text-center w-full flex justify-center'>
                    <p className='text-text hover:text-light capitalize text-sm md:text-xl'>{projectname}</p>
                    
                </div>

                <div className='w-14'>

                </div>

            </div>

          </div>

          <div className='text-text p-6 box-border 2xl:text-base text-xs'>
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

import clsx from 'clsx'

interface propTypes{
    children?:React.ReactNode
    className?:string
    projectname:string
}

export default function ConsoleText({children,className,projectname}:propTypes) {
  return (
        <div className={clsx('border-[1px] transition-all duration-500 border-background flex flex-col text-xs ',className?className:"")}>
          <div className='border-b-[1px] min-h-12 w-full border-b-background flex flex-row items-center justify-start'>
            <div className='flex items-center justify-center w-full px-4 relative'>
                <div className=' flex w-14 gap-3 top-0 left-0 h-full items-center'>
                    <div className='bg-blue hover:bg-blue-600 w-3 h-3 rounded-full'></div>
                    <div className='bg-green-400 hover:bg-green-600 w-3 h-3 rounded-full'></div>
                    <div className='bg-red hover:bg-red-600 w-3 h-3 rounded-full'></div>
                </div>

                <div className='flex-1 p-2 sm:r-2  text-center w-full flex justify-center'>
                    <p className='text-text hover:text-light capitalize text-sm md:text-lg'>{projectname}</p>
                    
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
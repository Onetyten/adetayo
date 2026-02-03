import type React from "react"

interface propTypes{
  children: React.ReactNode
  projectName:string
  isTimeline:boolean
}


export default function FixedConsole({children,projectName,isTimeline}:propTypes) {
  return (
        <div className=' max-w-md xl:min-w-sm xl:max-w-lg border-[1px] border-lightergrey bg-lightgrey flex flex-col console-shadow text-xs '>
          <div className='border-b-[1px] min-h-12 p-2 w-full border-b-lightergrey flex flex-row items-center justify-start'>
            <div className='flex items-center justify-center w-full relative'>
                <div className={`flex w-14 gap-3 top-0 left-0 h-full items-center ${isTimeline?'hidden md:flex':''}`}>
                    <div className='bg-blue hover:bg-blue-600 w-3 h-3 rounded-full'></div>
                    <div className='bg-green-400 hover:bg-green-600 w-3 h-3 rounded-full'></div>
                    <div className='bg-red hover:bg-red-600 w-3 h-3 rounded-full'></div>
                </div>

                <div className='flex-1 text-center w-full flex justify-center'>
                    <p className='font-intel text-white hover:text-lightergrey text-sm md:text-xl'>{projectName}</p>  
                </div>

            </div>

          </div>

          <div className='text-white xl:px-4 xl:py-8 2xl:text-base text-xs p-2 box-border'>
            {children}
          </div> 
        </div>
  )
}

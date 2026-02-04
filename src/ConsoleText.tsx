import clsx from 'clsx'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)


interface propTypes{
    children?:React.ReactNode
    className?:string
    projectname:string
    isTimeline?:boolean
    animated?:boolean
}

export default function ConsoleText({children,className,projectname,isTimeline,animated}:propTypes) {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contentRef.current) return
    const rect = contentRef.current.getBoundingClientRect()
    const isInView = rect.top < window.innerHeight * 0.8
    
    if (isInView) {
      gsap.fromTo(
        contentRef.current,
        { height: 0 },
        { height: "auto", duration: 1, ease: "power1.out" }
      )
    } else {
      const st = gsap.fromTo(
        contentRef.current,
        { height: 0 },
        { height: "auto", duration: 1, ease: "power1.out", 
          scrollTrigger: { 
            trigger: contentRef.current, 
            start: "top 80%",
            once: true,
          }
        }
      )
      return () => {
        st.scrollTrigger?.kill()
      }
    }
  }, [animated])

  return (

        <div className={clsx('transition-all duration-500 overflow-hidden  flex flex-col text-xs ',className?className:"")}>
          <div className='border-[1px] min-h-12 w-full border-background flex flex-row items-center justify-start'>
            <div className='flex items-center justify-center w-full px-4 relative'>
                <div className={`flex w-14 gap-3 top-0 left-0 h-full items-center ${isTimeline?'hidden md:flex':''}`}>
                    <div className='bg-blue hover:bg-blue-600 w-3 h-3 rounded-full'></div>
                    <div className='bg-green-400 hover:bg-green-600 w-3 h-3 rounded-full'></div>
                    <div className='bg-red hover:bg-red-600 w-3 h-3 rounded-full'></div>
                </div>

                <div className='flex-1 p-2 sm:r-2 text-left sm:text-center w-full flex justify-center'>
                    <p className='text-text hover:text-light font-semibold uppercase text-base md:text-lg'>{projectname}</p>
                    
                </div>

                <div className='w-14'>

                </div>
            </div>
          </div>

          <div className='relative py-2'>
            <div  ref={contentRef} style={{ height: animated ? 0 : "auto" }} className='text-text border-1 border-background h-0 overflow-hidden absolute inset-0 box-border 2xl:text-base text-xs'>
              <div className='px-6 py-3'>
                {children}
              </div>
            </div>

            <div className='text-text opacity-0 hidd box-border 2xl:text-base text-xs'>
              <div className='px-6 py-3'>
                {children}
              </div>  
            </div>
          </div>


        </div>
  )
}
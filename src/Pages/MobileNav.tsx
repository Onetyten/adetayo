/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react"
import "react-activity/dist/library.css";
import gsap from "gsap";

interface propType{
    setShowNav:React.Dispatch<React.SetStateAction<boolean>>
}

export default function MobileNav({setShowNav}:propType) {
    const navRef = useRef<HTMLDivElement>(null)
    const localLinks = [
        {name:"Work",url:"#work-section"},
        {name:"Experience",url:"#exp-section"},
        {name:"Contact",url:"#contact"},
    ]

    useEffect(()=>{
        gsap.fromTo(navRef.current,
            {opacity:0.7,yPercent:-100},
            {opacity:1,yPercent:0,duration:0.5,ease:"power3.out"}
        )
    },[])

    const closeNav = () => {
        gsap.to(navRef.current, { y: "-100%", opacity: 0.7, duration: 0.4, ease: "power3.in", onComplete: () => setShowNav(false) })
    }

  return (
    <div className='w-screen min-h-dvh z-50 inset-0 text-text fixed box-border flex sm:hidden  justify-center items-start '>
        <div className="inset-0 z-20 absolute bg-card/50" onClick={closeNav}></div>
        
        <div ref={navRef} className="overflow-hidden items-center z-30 w-full bg-card min-h-[50dvh] max-h-[70dvh] flex sm:mb-10 md:mb-0 flex-col justify-between gap-3 p-8 relative">
            <div className="flex flex-col uppercase justify-center items-center gap-6">
                {localLinks.map((item,index) =>
                    <a onClick={()=>setShowNav(false)} className="text-3xl font-offbit" href={item.url} key={index} >
                        {item.name}
                    </a>
                )}
            </div>

            <div onClick={closeNav} className="w-full flex justify-center" >
                <p className="text-4xl cursor-pointer text-text hover:text-blurple hover:bg-text w-14 font-offbit flex justify-center items-center aspect-square bg-blurple rounded-full">x</p>
            </div>
            
        </div>

        

    </div>
  )
}

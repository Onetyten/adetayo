import { useState } from "react"
import SlotText from "./SlotText"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

interface propType{
    setShowNav:React.Dispatch<React.SetStateAction<boolean>>
}

const localLinks = [
    {name:"Work",url:"#work-section"},
    {name:"Experience",url:"#exp-section"},
    {name:"Contact",url:"#contact"},
]


export default function NavBar({setShowNav}:propType) {
    const [hoveredIndex,setHoveredIndex] = useState(-1)
    
  return (
    <div className="gap-2 h-full flex justify-between items-center w-full">
        <p className="text-xl font-poppins font-semibold">Adetayo</p>
        <div className="hidden sm:flex gap-3 uppercase font-semibold font-grotesk text-sm">
            {localLinks.map((item,index) =>
            <a href={item.url} key={index} onMouseEnter={() => setHoveredIndex(index)} >
                <SlotText text={item.name} active={hoveredIndex === index} />
            </a>
        )}
        </div>
        <div className="block sm:hidden">
            <FontAwesomeIcon className="text-2xl cursor-pointer" icon={faBars} onClick={()=>setShowNav(true)}/>
        </div>
        
    </div>
  )
}

import { useState } from "react"
import SlotText from "./SlotText"


const localLinks = [
    {name:"Work",url:""},
    {name:"About",url:""},
    {name:"Contact",url:""},
]

export default function NavBar() {
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
    </div>
  )
}

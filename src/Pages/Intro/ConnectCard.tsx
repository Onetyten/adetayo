import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { useRef } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


export default function ConnectCard() {
    const iconRef = useRef<(SVGSVGElement | null)[]>([])
    useGSAP(()=>{
        gsap.from (iconRef.current,{x:'-200', opacity:0, stagger:0.15,duration:1,delay:1})
    })

    const links = [
        {icon:faGithub,url:"https://github.com/Onetyten"},
        {icon:faLinkedin,url:"https://www.linkedin.com/in/labaeka-adetayo-a9681a247"},
        {icon:faEnvelope,url:"mailto:labaekaabdulrazaq@gmail.com"},
        {icon:faPhone,url:"tel:+2349155073769"},
        {icon:faTwitter,url:"https://x.com/Onetyten_exe"}
    ]

  return (
    <div className='w-full h-full flex flex-col sm:flex-row items-start sm:items-center justify-center gap-6'>
        <div>
            You can reach me on
        </div>
        <div className="flex gap-6 items-center overflow-hidden">
            {links.map((item,index)=><a  key={index}  href={item.url} target='_blank' rel="noopener noreferrer">
                <FontAwesomeIcon icon={item.icon} className="hover:text-text text-2xl" ref ={(el)=>{iconRef.current[index] = el}}/>
            </a>)}
        </div>
    </div>
  )
}

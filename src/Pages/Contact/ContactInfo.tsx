import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationPin } from "@fortawesome/free-solid-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"


export default function ContactInfo() {
    const iconRef = useRef<(SVGSVGElement | null)[]>([])
    useGSAP(()=>{
        gsap.from (iconRef.current,{x:'-200', opacity:0, stagger:0.15,duration:1,delay:0.5})
    })
    const links = [
        {icon:faGithub,url:"https://github.com/Onetyten"},
        {icon:faLinkedin,url:"https://www.linkedin.com/in/labaeka-adetayo-a9681a247"},
        {icon:faEnvelope,url:"mailto:labaekaabdulrazaq@gmail.com"},
        {icon:faPhone,url:"tel:+2349155073769"},
        {icon:faTwitter,url:"https://x.com/Onetyten_exe"}
    ]

    const contacts = [
        {value:"09049667608",url:"tel:+2349049667608",icon:faPhone},
        {value:"09155073769",url:"https://wa.me/+2349155073769",icon:faWhatsapp},
        {value:"labaekaabdulrazaq@gmail.com",url:"mailto:labaekaabdulrazaq@gmail.com",icon:faEnvelope},
        {value:"Lagos Mainland 101245",url:"https://maps.app.goo.gl/BtMczikoAdhF55o27",icon:faLocationPin},
    ]

  return (
    
    <div className="p-5 grey flex-1 flex bg-darkgrey flex-col justify-between items-start">

        <div className="flex-1 w-full text-lg font-medium items-center justify-start py-10 h-full flex flex-col gap-4">

            {contacts.map((item,index)=>
                <a key={index} href={item.url} className="w-full gap-6 flex justify-start items-center">
                    <FontAwesomeIcon icon={item.icon} className="text-white hover:text-lightergrey text-lg md:text-xl"/>
                    <p className="text-muted hover:text-white">{item.value}</p>
                </a>)
            }
        </div>

        <div className='w-full flex text-text items-center justify-center gap-6'>
            <div className="text-muted">
                You can reach me on
            </div>
            <div className="flex gap-6 items-center overflow-hidden">
                {links.map((item,index)=><a  key={index}  href={item.url} target='_blank' rel="noopener noreferrer">
                    <FontAwesomeIcon icon={item.icon} className="hover:text-text text-2xl" ref ={(el)=>{iconRef.current[index] = el}}/>
                </a>)}
            </div>
        </div>
    </div>
  )
}

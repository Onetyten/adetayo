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
    
    <div className=" py-5 sm:p-5 grey flex-1 flex bg-darkgrey gap-20 flex-col justify-between items-start">

        <div className="flex-1 w-full text-base xs:text-xl sm:text-4xl 2xl:text-5xl font-offbit font-medium items-center justify-start py-10 h-full flex flex-col gap-8">

            {contacts.map((item,index)=>
                <a key={index} href={item.url} className="w-full gap-6 flex justify-start items-center">
                    <FontAwesomeIcon icon={item.icon} className="text-white hover:text-lightergrey text-lg md:text-3xl"/>
                    <p className="text-muted text-wrap hover:text-white">{item.value}</p>
                </a>)
            }

            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29956.51623609655!2d3.490501058907608!3d6.628431991713285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bee62d44ab573%3A0x44ddf6ea18edfcb3!2sIkorodu%2C%20Lagos!5e0!3m2!1sen!2sng!4v1770169394890!5m2!1sen!2sng" width="600" height="450" style={{ border: 4,width:"100%",maxHeight:400 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}

        </div>

        <div className='w-full flex sm:flex-row flex-col text-text items-start sm:items-center justify-start gap-6'>
            <div className="text-muted">
                You can reach me on
            </div>
            <div className="flex sm:gap-6 gap-4 flex-wrap items-center overflow-hidden">
                {links.map((item,index)=><a  key={index}  href={item.url} target='_blank' rel="noopener noreferrer">
                    <FontAwesomeIcon icon={item.icon} className="hover:text-text text-2xl" ref ={(el)=>{iconRef.current[index] = el}}/>
                </a>)}
            </div>
        </div>
    </div>
  )
}

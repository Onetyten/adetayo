import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationPin } from "@fortawesome/free-solid-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faMessage } from "@fortawesome/free-solid-svg-icons"
import ContactConsole from "./ContactConsole"
import ContactBox from "./Components/ContactBox"


export default function Contact() {

  return (
    <div className='max-w-full h-screen relative box-border section-snap flex overflow-hidden justify-center gap-8  flex-wrap items-center'>

        <div className="w-4xl h-[500px] flex gap-2" >
            <div className=" p-5  grey flex-1 h-full flex flex-col">
                <div className="flex-1 h-full flex flex-col gap-4">
                    <h2 className="text-3xl font-bold text-white">Contact me</h2>
                    <p className="text-lightergrey text-xs">Fill out the form and i’ll be in touch as soon as possible.</p>
                    <div className="flex gap-4">
                        <div>
                            <FontAwesomeIcon icon={faLocationPin} color="#ffffff"/>
                        </div>
                        <div className="gap-2 flex flex-col">
                            <p className="text-white text-sm font-bold">Address:</p>
                            <p className="text-lightergrey text-xs">Ikeja, Lagos 100001</p>
                        </div>
                    </div>

                    
                    <div className="flex gap-4">
                        <div>
                            <FontAwesomeIcon icon={faPhone} color="#ffffff"/>
                        </div>
                        <div className="gap-2 flex flex-col">
                            <p className="text-white text-sm font-bold">Phone:</p>
                            <p className="text-lightergrey text-xs">09155073769</p>
                        </div>
                    </div>


                    <div className="flex gap-4">
                        <div>
                            <FontAwesomeIcon icon={faWhatsapp} color="#ffffff"/>
                        </div>
                        <div className="gap-2 flex flex-col">
                            <p className="text-white text-sm font-bold">Whatsapp:</p>
                            <p className="text-lightergrey text-xs">07089126752</p>
                        </div>
                    </div>


                    <div className="flex gap-4">
                        <div>
                            <FontAwesomeIcon icon={faEnvelope} color="#ffffff"/>
                        </div>
                        <div className="gap-2 flex flex-col">
                            <p className="text-white text-sm font-bold">Email:</p>
                            <p className="text-lightergrey text-xs">labaekaabdulrazaq@gmail.com</p>
                            <p className="text-lightergrey text-xs">onetyten@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4">

                    <a href="https://github.com/Onetyten" target='_blank'>
                        <FontAwesomeIcon icon={faGithub} className="text-white text-xl link-shadow " />
                    </a>
                    <a href="www.linkedin.com/in/labaeka-adetayo-a9681a247">
                        <FontAwesomeIcon icon={faLinkedin} className="text-white  text-xl link-shadow" />
                    </a>
                    <a href="mailto:labaekaabdulrazaq@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} className="text-white  text-xl link-shadow"/>
                    </a>
                    <a href="tel:+2349155073769">
                        <FontAwesomeIcon icon={faPhone} className="text-white text-xl link-shadow"/>
                    </a>
                    <a href="https://x.com/Onetyten_exe">
                        <FontAwesomeIcon icon={faTwitter} className="text-white text-xl link-shadow"/>
                    </a>
                    
                </div>
            </div>

            <ContactConsole>
                <div className="flex flex-col justify-between gap-6">

                    <div className="flex flex-col gap-4">
                        <ContactBox name="Name" icon = {faUser} placeholder = "e.g. John Doe" isArea = {false}/>
                        <ContactBox name="Email" icon = {faEnvelope} placeholder = "e.g. johndoe@gmail.com" isArea = {false}/>
                        <ContactBox name="Phone" icon = {faPhone} placeholder = "Phone Number" isArea = {false}/>
                        <ContactBox name="Message" icon = {faMessage} placeholder = "Write message..." isArea = {true}/>
                    </div>
                    <div className="text-center bg-white text-darkgrey text-md p-2 font-bold">
                        SEND
                    </div>
                </div>
            </ContactConsole>
            
        </div>



    </div>

  )
}

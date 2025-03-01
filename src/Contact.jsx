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

    const onSubmit = async (event) =>{
        event.preventDefault();
        const formData = new FormData(event.target);
        console.log(formData)
    }

  return (
    <div className='max-w-full h-screen relative box-border section-snap flex overflow-auto justify-center gap-8 p-3 md:p-0 flex-wrap items-center'>

        <div className="w-4xl md:h-[500px] h-screen md:flex-row flex-col flex md:gap-2 gap-8" >
            <div className=" p-5  grey flex-1 xl:h-full flex flex-col h-screen">
                <div className="flex-1 h-full flex flex-col gap-4">
                    <h2 className="text-3xl font-bold text-white">Contact me</h2>
                    <p className="text-lightergrey text-xs">Fill out the form and i’ll be in touch as soon as possible.</p>
                    <div className="flex gap-4">
                        <div>
                            <FontAwesomeIcon icon={faLocationPin} color="#ffffff"/>
                        </div>
                        <div className="gap-2 flex flex-col">
                            <p className="text-white text-sm font-bold">Address:</p>
                            <p className="text-lightergrey hover:text-white text-xs">Ikeja, Lagos 100001</p>
                        </div>
                    </div>

                    
                    <div className="flex gap-4">
                        <div>
                            <FontAwesomeIcon icon={faPhone} color="#ffffff"/>
                        </div>
                        <div className="gap-2 flex flex-col">
                            <p className="text-white text-sm font-bold">Phone:</p>
                            <a  href="tel:+2349155073769"><p className="text-lightergrey text-xs hover:text-white">09155073769</p></a>
                            
                        </div>
                    </div>


                    <div className="flex gap-4">
                        <div>
                            <FontAwesomeIcon icon={faWhatsapp} color="#ffffff"/>
                        </div>
                        <div className="gap-2 flex flex-col">
                            <p className="text-white text-sm font-bold">Whatsapp:</p>
                            <a href="https://wa.me/+2347089126752" ><p className="text-lightergrey hover:text-white text-xs">07089126752</p></a>
                            
                        </div>
                    </div>


                    <div className="flex gap-4">
                        <div>
                            <FontAwesomeIcon icon={faEnvelope} color="#ffffff"/>
                        </div>
                        <div className="gap-2 flex flex-col">
                            <p className="text-white text-sm font-bold">Email:</p>
                            <a href="mailto:labaekaabdulrazaq@gmail.com" target="_blank" rel="noopener noreferrer"><p className="text-lightergrey hover:text-white text-xs">labaekaabdulrazaq@gmail.com</p></a>
                            <a href="mailto:onetyten@gmail.com" target="_blank" rel="noopener noreferrer"><p className="text-lightergrey text-xs hover:text-white">onetyten@gmail.com</p></a>
                            
                            
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 mt-24 md:mt-0">

                    <a href="https://github.com/Onetyten" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="text-white hover:text-lightergrey text-xl link-shadow " />
                    </a>
                    <a href="https://www.linkedin.com/in/labaeka-adetayo-a9681a247" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="text-white hover:text-lightergrey  text-xl link-shadow" />
                    </a>
                    <a href="mailto:labaekaabdulrazaq@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faEnvelope} className="text-white hover:text-lightergrey  text-xl link-shadow"/>
                    </a>
                    <a href="tel:+2349155073769">
                        <FontAwesomeIcon icon={faPhone} className="text-white hover:text-lightergrey text-xl link-shadow"/>
                    </a>
                    <a href="https://x.com/Onetyten_exe" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} className="text-white hover:text-lightergrey text-xl link-shadow"/>
                    </a>
                    
                </div>
            </div>

            <div className="flex-1 w-full  flex justify-center items-center">
                <ContactConsole>
                    <form className="flex mb-10 md:mb-0 flex-col justify-between gap-6" action="" onSubmit={onSubmit}>


                        <div className="flex flex-col gap-4">
                            <ContactBox name="Name" icon = {faUser} placeholder = "e.g. John Doe" isArea = {false}/>
                            <ContactBox name="Email" icon = {faEnvelope} placeholder = "e.g. johndoe@gmail.com" isArea = {false}/>
                            <ContactBox name="Phone" icon = {faPhone} placeholder = "Phone Number" isArea = {false}/>
                            <ContactBox name="Message" icon = {faMessage} placeholder = "Write message..." isArea = {true}/>
                        </div>
                        <button type="submit" className="text-center bg-white hover:bg-lightergrey text-darkgrey hover:text-white text-md p-2 font-bold">
                            SEND
                        </button>
                    </form>
                </ContactConsole>
            </div>

           
            
        </div>



    </div>

  )
}

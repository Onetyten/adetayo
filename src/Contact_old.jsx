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
import { useState } from "react"
import emailjs from '@emailjs/browser'
import { toast } from "react-toastify"
import { Squares } from "react-activity"
import "react-activity/dist/library.css";



export default function Contact() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [message,setMessage] = useState("")
    const [isSubmitting,setIsSubmitting] = useState(false)

    const onSubmit = async (e) => {
        if (isSubmitting) return
        e.preventDefault();
        setIsSubmitting(true)
        const templateParams = {
          to_name: "Adetayo",
          from_name: name,
          message: message,
          from_email: email,
          from_phone: phone,
        };
      
        try {
          const response = await emailjs.send("service_2w95e4n","template_e3omq4a", templateParams,"euD0IpeDBiwmaCHrf");
          console.log("Email sent successfully!", response);
          toast("Email sent successfully!")
        } catch (error) 
        {
            toast("Error sending email")
            console.error("Email send failed:", error);
        }
        finally
        {
            setIsSubmitting(false)
        }
      };

  return (
    <div className='max-w-full h-screen relative box-border section-snap flex overflow-auto justify-center gap-8 p-3 md:p-0 flex-wrap items-center'>

        <div className="w-4xl md:h-[500px] h-screen md:flex-row flex-col flex md:gap-2 gap-8" >
            <div className=" p-5  grey flex-1 flex flex-col justify-start">
                <div className="flex-1 h-full flex flex-col gap-4">
                    <h2 className="text-3xl font-bold text-white">Contact me</h2>
                    <p className="text-lightergrey text-sm">Fill out the form and i’ll be in touch as soon as possible.</p>
                    <div className="flex gap-4">
                        <div>
                            <FontAwesomeIcon icon={faLocationPin} color="#ffffff"/>
                        </div>
                        <div className="gap-2 flex flex-col">
                            <p className="text-white text-md font-bold">Address:</p>
                            <a href="https://maps.app.goo.gl/BtMczikoAdhF55o27" target="_blank" rel="noopener noreferrer" className="text-lightergrey hover:text-white text-sm">Lagos Mainland 101245</a>
                           
                        </div>
                    </div>

                    
                    <div className="flex gap-4">
                        <div>
                            <FontAwesomeIcon icon={faPhone} color="#ffffff"/>
                        </div>
                        <div className="gap-2 flex flex-col">
                            <p className="text-white text-md font-bold">Phone:</p>
                            <a  href="tel:+2349155073769"><p className="text-lightergrey text-sm hover:text-white">09155073769</p></a>
                            
                        </div>
                    </div>


                    <div className="flex gap-4">
                        <div>
                            <FontAwesomeIcon icon={faWhatsapp} color="#ffffff"/>
                        </div>
                        <div className="gap-2 flex flex-col">
                            <p className="text-white text-md font-bold">Whatsapp:</p>
                            <a href="https://wa.me/+2347089126752" ><p className="text-lightergrey hover:text-white text-sm">07089126752</p></a>
                            
                        </div>
                    </div>


                    <div className="flex gap-4">
                        <div>
                            <FontAwesomeIcon icon={faEnvelope} color="#ffffff"/>
                        </div>
                        <div className="gap-2 flex flex-col">
                            <p className="text-white text-md font-bold">Email:</p>
                            <a href="mailto:labaekaabdulrazaq@gmail.com" target="_blank" rel="noopener noreferrer"><p className="text-lightergrey hover:text-white text-sm">labaekaabdulrazaq@gmail.com</p></a>
                            <a href="mailto:onetyten@gmail.com" target="_blank" rel="noopener noreferrer"><p className="text-lightergrey text-sm hover:text-white">onetyten@gmail.com</p></a>
                            
                            
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 mt-24 md:mt-0">

                    <a href="https://github.com/Onetyten" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="text-white hover:text-lightergrey text-2xl link-shadow " />
                    </a>
                    <a href="https://www.linkedin.com/in/labaeka-adetayo-a9681a247" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="text-white hover:text-lightergrey  text-2xl link-shadow" />
                    </a>
                    <a href="mailto:labaekaabdulrazaq@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faEnvelope} className="text-white hover:text-lightergrey  text-2xl link-shadow"/>
                    </a>
                    <a href="tel:+2349155073769">
                        <FontAwesomeIcon icon={faPhone} className="text-white hover:text-lightergrey text-2xl link-shadow"/>
                    </a>
                    <a href="https://x.com/Onetyten_exe" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} className="text-white hover:text-lightergrey text-2xl link-shadow"/>
                    </a>
                    
                </div>
            </div>

            <div className="flex-1 w-full relative flex justify-center items-center">
                <ContactConsole>
                    <form className="flex mb-10 md:mb-0 flex-col h-full justify-between gap-6 relative" action="" onSubmit={onSubmit}>


                        <div className="flex flex-col gap-4">
                            <ContactBox name="Name" isRequired={true} onChange={(e)=>{setName(e.target.value)}} icon = {faUser} placeholder = "e.g. John Doe" isArea = {false}/>
                            <ContactBox name="Email" isRequired={true}  onChange={(e)=>{setEmail(e.target.value)}} icon = {faEnvelope} placeholder = "e.g. johndoe@gmail.com" isArea = {false}/>
                            <ContactBox name="Phone" isRequired={false}  onChange={(e)=>{setPhone(e.target.value)}} icon = {faPhone} placeholder = "Phone Number" isArea = {false}/>
                            <ContactBox name="Message" isRequired={true}  onChange={(e)=>{setMessage(e.target.value)}} icon = {faMessage} placeholder = "Write message..." isArea = {true}/>
                        </div>
                        <button type="submit" className="text-center bg-white cursor-pointer hover:bg-lightergrey text-darkgrey hover:text-white text-md p-2 font-bold">
                            SEND
                        </button>
                        
                    </form>
                </ContactConsole>
                
                {isSubmitting&&(
                    <div className="absolute w-full h-full flex justify-center items-center bg-darkgrey/40">
                        <Squares size={20} animating={true} color='white'/>
                    </div>
                )}
                
            </div>


             {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31713.527194184662!2d3.363557479355735!3d6.497499581915034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c8f121645c5%3A0xf5436090467df795!2sLagos%20Mainland%20101245%2C%20Lagos!5e0!3m2!1sen!2sng!4v1752955714728!5m2!1sen!2sng"
                width="600"
                height="250"
                style={{ border: 0 }} // React uses camelCase for CSS properties
                allowFullScreen={true} // React uses camelCase for attributes like allowfullscreen
                loading="lazy"
                title="Google Map Embed" // Always add a title for accessibility
            ></iframe> */}

           
            
        </div>



    </div>

  )
}

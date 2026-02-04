/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react"
import emailjs from '@emailjs/browser'
import { toast } from "react-toastify"
import { Squares } from "react-activity"
import "react-activity/dist/library.css";
import SlotText from "../Intro/SlotText";
import ContactInput from "./ContactInput";

interface propType{
    setShowContact:React.Dispatch<React.SetStateAction<boolean>>
}

export default function Contact({setShowContact}:propType) {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [message,setMessage] = useState("")
    const [isSubmitting,setIsSubmitting] = useState(false)
    const [hoveringSubmit,setHoveringSubmit] = useState(false)
    const [error,setError] = useState("")
    const serviceKey = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateKey = import.meta.env.VITE_EMAILJS_TEMPLATE_KEY
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY


    const onSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        if (isSubmitting) return
        e.preventDefault();
        const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        if (!isValidEmail){
            setError("Please add a valid email address")
        }
        setIsSubmitting(true)
        const templateParams = {
          to_name: "Adetayo",
          from_name: name,
          message: message,
          from_email: email,
          from_phone: phone,
        };

        try {
            
          const response = await emailjs.send(serviceKey,templateKey, templateParams,publicKey);
          console.log("Email sent successfully!", response);
          toast("Email sent successfully!")
        } catch (error) 
        {
            toast("Error sending email")
            console.error("Email send failed:", error);
        }
        finally
        {
            setShowContact(false)
            setIsSubmitting(false)
            setName("")
            setEmail("")
            setPhone("")
            setMessage("")
            setError("")
        }
      };

  return (
    <div className='w-screen min-h-dvh pointer-events-auto z-30 inset-0 text-text fixed box-border flex justify-center items-center '>
        <div className="inset-0 z-20 absolute bg-card/50" onClick={()=>setShowContact(false)}></div>
        
        <form className="rounded-3xl overflow-hidden z-30 max-w-[95%] bg-card w-3xl flex sm:mb-10 md:mb-0 flex-col justify-between gap-3 p-8 relative" action="" onSubmit={onSubmit}>
            <div onClick={()=>setShowContact(false)} className="w-full flex justify-end" >
                <p className="text-4xl cursor-pointer text-text hover:text-blurple hover:bg-text w-14 font-offbit flex justify-center items-center aspect-square bg-blurple rounded-full">x</p>
            </div>
            <div className="w-full flex justify-start" >
                <p className="text-4xl xs:text-5xl text-text font-offbit">Get in touch</p>
            </div>

            <div className="flex flex-col gap-2">
                <div className="flex w-full flex-col sm:flex-row gap-2 sm:gap-1 items-start">
                    <div className="w-full sm:w-1/2">
                        <ContactInput name="Name" isRequired value={name} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} placeholder="John Doe" isArea={false}/>
                    </div>

                    <div className="w-full sm:w-1/2">
                        <ContactInput name="Email" isRequired value={email} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} placeholder="johndoe@gmail.com" isArea={false} />
                    </div>
                </div>
        
                <ContactInput name="Phone" isRequired={false}  value ={phone} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setPhone(e.target.value)}} placeholder = "Phone Number" isArea = {false}/>
                <ContactInput name="Message" isRequired={true} value={message}  onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setMessage(e.target.value)}} placeholder = "Write message..." isArea = {true}/>
            </div>
            <div className="flex w-full items-center justify-between">
                <button onMouseEnter={()=>setHoveringSubmit(prev=>(prev?prev:true))} onMouseLeave={()=>setHoveringSubmit(prev=>(prev?false:prev))} type="submit" className="text-center flex justify-center rounded-sm bg-blurple cursor-pointer text-lg hover:bg-lightergrey text-white p-2 px-6 w-full sm:w-fit">
                    <SlotText text="SUBMIT" active={hoveringSubmit} />
                </button>
                {error.length>0&&<p className="text-sm">*{error}</p>}
            </div>
            

            {isSubmitting&&(
                <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-darkgrey/40">
                    <Squares size={20} animating={true} color='#3D57FF'/>
                </div>
            )}
            
        </form>

        

    </div>
  )
}

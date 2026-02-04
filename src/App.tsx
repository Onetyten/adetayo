import { ToastContainer } from "react-toastify"
import Intro from "./Pages/Intro/Intro"
import Project from "./Pages/Project/Project" 
import { useEffect, useState } from "react"
import Contact from "./Pages/Contact/Contact"
import MobileNav from "./Pages/MobileNav"
import ContactPage from "./Pages/Contact/ContactPage"
import Experience from "./Pages/Experience/Experience"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Skills from "./Pages/Skills/Skills"
import DottedBackground from "./Components/DottedBackground"
gsap.registerPlugin(ScrollTrigger)

function App() {
  const [showContact,setShowContact] = useState(false)
  const [showNav,setShowNav] = useState(false)
    useEffect(() => {
      const timer = setTimeout(() => {
        ScrollTrigger.refresh()
      }, 100)
      return () => clearTimeout(timer)
    }, [])
  
  
  return (
    <DottedBackground>
      <main id="main-container" className="overflow-x-hidden gap-8 flex flex-col relative">
          <Intro setShowNav={setShowNav} setShowContact={setShowContact}/>
          <Project />
          <Skills/>
          <Experience/>
          <ContactPage setShowContact={setShowContact}/>
      </main>
      {showContact && <Contact setShowContact={setShowContact}/>}
      {showNav && <MobileNav setShowNav={setShowNav}/>}
      <ToastContainer autoClose={5000}/>  

    </DottedBackground>
    

  )
}

export default App

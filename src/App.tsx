import { ToastContainer } from "react-toastify"
import Intro from "./Pages/Intro/Intro"
import Project from "./Pages/Project/Project" 
import { useEffect, useState } from "react"
import Contact from "./Pages/Contact/Contact"
import ContactPage from "./Pages/Contact/ContactPage"
import Experience from "./Pages/Experience/Experience"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Skills from "./Pages/Skills/Skills"
gsap.registerPlugin(ScrollTrigger)

function App() {
  const [showContact,setShowContact] = useState(false)
    useEffect(() => {
      const timer = setTimeout(() => {
        ScrollTrigger.refresh()
      }, 100)
      return () => clearTimeout(timer)
    }, [])
    

  return (
    <div className="w-full flex flex-col">
      <main id="main-container" className="overflow-x-hidden  gap-8 flex flex-col relative">
          <Intro setShowContact={setShowContact}/>
          <Project />
          <Skills/>
          <Experience/>
          <ContactPage setShowContact={setShowContact}/>
      </main>
      {showContact && <Contact setShowContact={setShowContact}/>}
      <ToastContainer autoClose={5000}/>  

    </div>
    

  )
}

export default App

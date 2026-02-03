import { ToastContainer } from "react-toastify"
import Intro from "./Pages/Intro/Intro"
import Project from "./Pages/Project/Project" 
import { useEffect, useState } from "react"
import Contact from "./Pages/Contact/Contact"
import Skills from "./Pages/Skills/Skills"
import Experience from "./Pages/Experience/Experience"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
    <div className="w-full">
      <main id="main-container" className="overflow-x-hidden  gap-8 flex flex-col relative">
          
          <Intro setShowContact={setShowContact}/>
          <Project />
          <Skills/>
          <Experience/>
          
          {showContact && <Contact setShowContact={setShowContact}/>}
          <div id="pin-stop"></div>

          {/* <Education pageIndex={8}pageUrls={pageUrls}viewList={viewList}setCurrentIndex={setCurrentIndex} /> */}
          {/* <Contact pageIndex={9}  pageUrls={pageUrls}  viewList={viewList} setCurrentIndex={setCurrentIndex} /> */}
          
      </main>
      <ToastContainer autoClose={5000}/>  

    </div>
    

  )
}

export default App

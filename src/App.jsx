import { ToastContainer } from "react-toastify"
import Intro from "./Pages/Intro/Intro"
import Project from "./Pages/Project/Project" 
import { useState } from "react"
import Contact from "./Pages/Contact/Contact"
import Skills from "./Pages/Skills/Skills"


function App() {
  const [showContact,setShowContact] = useState(false)

  return (
    <div className="w-full">
      <main id="main-container" className="overflow-x-hidden gap-8 flex flex-col relative scroll-snap-y font-intel">
          
          <Intro setShowContact={setShowContact}/>
          <Project />
          <Skills/>
          {showContact && <Contact setShowContact={setShowContact}/>}

          {/* <Education pageIndex={8}pageUrls={pageUrls}viewList={viewList}setCurrentIndex={setCurrentIndex} /> */}
          {/* <Contact pageIndex={9}  pageUrls={pageUrls}  viewList={viewList} setCurrentIndex={setCurrentIndex} /> */}
          
      </main>
      <ToastContainer autoClose={5000}/>  

    </div>
    

  )
}

export default App

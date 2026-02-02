import { ToastContainer } from "react-toastify"
import Intro from "./Pages/Intro/Intro"
import { useState } from "react"
import Contact from "./Pages/Contact/Contact"


function App() {
  const [showContact,setShowContact] = useState(false)

  return (
    <main id="main-container" className="overflow-x-hidden relative scroll-snap-y font-intel">  
        <Intro setShowContact={setShowContact}/>
        {showContact && <Contact setShowContact={setShowContact}/>}
 
        {/* <About pageIndex={1}pageUrls={pageUrls} viewList={viewList} setCurrentIndex={setCurrentIndex} /> */}
        {/* <ProjectContainer pageUrls={pageUrls} pageIndex={2}viewList={viewList} setCurrentIndex={setCurrentIndex}/>     */}
        {/* <Skills pageIndex={7}pageUrls={pageUrls}viewList={viewList}setCurrentIndex={setCurrentIndex} /> */}
        {/* <Education pageIndex={8}pageUrls={pageUrls}viewList={viewList}setCurrentIndex={setCurrentIndex} /> */}
        {/* <Contact pageIndex={9}  pageUrls={pageUrls}  viewList={viewList} setCurrentIndex={setCurrentIndex} /> */}
        <ToastContainer autoClose={5000}/>
    </main>

  )
}

export default App

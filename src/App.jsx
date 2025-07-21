 
import { ToastContainer } from "react-toastify"
import About from "./About"
import Contact from "./Contact"
import Education from "./Education"
import Intro from "./Intro"
import ProjectContainer from "./ProjectContainer"
import Skills from "./Skills"
import ScrollManager from "./ScrollManager"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

function App() {
  const {ref:introRef,inView:IntroInView} = useInView({threshold:1})
  const {ref:aboutRef,inView:AboutInView} = useInView({threshold:1})
  const {ref:projectRef1,inView:ProjectInView1} = useInView({threshold:0.9})
  const {ref:projectRef2,inView:ProjectInView2} = useInView({threshold:0.9})
  const {ref:projectRef3,inView:ProjectInView3} = useInView({threshold:0.9})
  const {ref:projectRef4,inView:ProjectInView4} = useInView({threshold:0.9})
  const {ref:skillRef, inView:skillIsInView} = useInView({threshold:0.9})
  const {ref:eduRef,inView:EduInView} = useInView({threshold:0.3})
  const {ref:contactRef, inView:contactIsInView} = useInView({threshold:0.9})

  const pageUrls = ["Intro","About","Project1","project2","project3","project4","Skills","Education","Contact"]
  
  const [currentLink,setCurrentLink] = useState('Intro')


  const viewList = [
    {ref:introRef,inView:IntroInView},
    {ref:aboutRef,inView:AboutInView},
    {ref:projectRef1,inView:ProjectInView1},
    {ref:projectRef2,inView:ProjectInView2},
    {ref:projectRef3,inView:ProjectInView3},
    {ref:projectRef4,inView:ProjectInView4},
    {ref:skillRef, inView:skillIsInView},
    {ref:eduRef,inView:EduInView},
    {ref:contactRef, inView:contactIsInView}
  ]
  const [currentIndex,setCurrentIndex] = useState(0)
  const [ScrollIconUp,setScrollIconUp]= useState(true)
  const [ScrollIconDown,setScrollIconDown]= useState(true)
  const [showScrollIconPos,setShowScrollIconPos] = useState(true)
   const [showScrollIconNeg,setShowScrollIconNeg] = useState(true)


   useEffect(()=>{
    console.log("CurrentIndex",currentIndex," ","currentLink",currentLink)
   },[currentIndex,currentLink])

  return (
    <main className="overflow-x-hidden relative scroll-snap-y font-intel">
      
        <ScrollManager currentLink={currentLink} pageUrls={pageUrls} viewList={viewList} currentIndex={currentIndex} ScrollIconUp = {ScrollIconUp} ScrollIconDown={ScrollIconDown} showScrollIconPos= {showScrollIconPos} showScrollIconNeg={showScrollIconNeg}/>


        <Intro pageIndex={0} pageUrls={pageUrls} setCurrentLink={setCurrentLink}  viewList={viewList} setCurrentIndex={setCurrentIndex} setShowScrollIconNeg={setShowScrollIconNeg} setShowScrollIconPos={setShowScrollIconPos}/>
 
        <About pageIndex={1} pageUrls={pageUrls} setCurrentLink={setCurrentLink} viewList={viewList} setCurrentIndex={setCurrentIndex} setShowScrollIconPos={setShowScrollIconPos} setScrollIconUp={setScrollIconUp} setScrollIconDown={setScrollIconDown} />

        <ProjectContainer pageUrls={pageUrls}  pageIndex={2} setCurrentLink={setCurrentLink} viewList={viewList} setCurrentIndex={setCurrentIndex} setScrollIconUp={setScrollIconUp} setScrollIconDown = {setScrollIconDown}/>    

        <Skills pageIndex={6} pageUrls={pageUrls} setCurrentLink={setCurrentLink} viewList={viewList} setCurrentIndex={setCurrentIndex}  setScrollIconUp={setScrollIconUp} setScrollIconDown = {setScrollIconDown} />

        <Education pageIndex={7} pageUrls={pageUrls} setCurrentLink={setCurrentLink} viewList={viewList} setCurrentIndex={setCurrentIndex} setShowScrollIconNeg = {setShowScrollIconNeg} />

        <Contact pageIndex={8} pageUrls={pageUrls} setCurrentLink={setCurrentLink} viewList={viewList} setCurrentIndex={setCurrentIndex} setShowScrollIconNeg = {setShowScrollIconNeg}/>

        <ToastContainer autoClose={5000}/>
    </main>

  )
}

export default App

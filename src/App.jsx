/* eslint-disable react-hooks/exhaustive-deps */
 
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
  const {ref:projectRef5,inView:ProjectInView5} = useInView({threshold:0.9})
  const {ref:skillRef, inView:skillIsInView} = useInView({threshold:0.9})
  const {ref:eduRef,inView:EduInView} = useInView({threshold:0.3})
  const {ref:contactRef, inView:contactIsInView} = useInView({threshold:0.9})

  const pageUrls = ["Intro","About","Project1","project2","project3","project4","project5","Skills","Education","Contact"]
  


  const viewList = [
    {ref:introRef,inView:IntroInView},
    {ref:aboutRef,inView:AboutInView},
    {ref:projectRef1,inView:ProjectInView1},
    {ref:projectRef2,inView:ProjectInView2},
    {ref:projectRef3,inView:ProjectInView3},
    {ref:projectRef4,inView:ProjectInView4},
    {ref:projectRef5,inView:ProjectInView5},
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
    if (currentIndex==0){
      setShowScrollIconPos(false)
      setShowScrollIconNeg(true)
    }
    else if (currentIndex==pageUrls.length){
      setShowScrollIconPos(true)
      setShowScrollIconNeg(false)
    }
    else{
      setShowScrollIconPos(true)
      setShowScrollIconNeg(true)
    }


    // set scroll icon direction based on index
    if (currentIndex ==2){
      setScrollIconUp(true)
      setScrollIconDown(false)
    }
    else if (currentIndex == 3 || currentIndex == 4 || currentIndex == 5 ){
      setScrollIconUp(false)
      setScrollIconDown(false)
    }
    else if (currentIndex == 6 ){
      setScrollIconUp(false)
      setScrollIconDown(true)
    }
    else{
      setScrollIconUp(true)
      setScrollIconDown(true)
    }
    
   },[currentIndex])

  return (
    <main id="main-container" className="overflow-x-hidden relative scroll-snap-y font-intel">
      
        <ScrollManager pageUrls={pageUrls} viewList={viewList} currentIndex={currentIndex} ScrollIconUp = {ScrollIconUp} ScrollIconDown={ScrollIconDown} showScrollIconPos= {showScrollIconPos} showScrollIconNeg={showScrollIconNeg}/>
        
        <Intro 
        pageIndex={0}
        pageUrls={pageUrls}
        viewList={viewList}
        setCurrentIndex={setCurrentIndex}/>
 

        <About 
        pageIndex={1}
        pageUrls={pageUrls} 
        viewList={viewList} 
        setCurrentIndex={setCurrentIndex}
        />

        <ProjectContainer 
        pageUrls={pageUrls} 
        pageIndex={2}
        viewList={viewList}
        setCurrentIndex={setCurrentIndex}
        />    

        <Skills 
        pageIndex={7}
        pageUrls={pageUrls}
        viewList={viewList}
        setCurrentIndex={setCurrentIndex} 
        />

        <Education 
        pageIndex={8}
        pageUrls={pageUrls}
        viewList={viewList}
        setCurrentIndex={setCurrentIndex}
        />

        <Contact
        pageIndex={9} 
        pageUrls={pageUrls} 
        viewList={viewList}
        setCurrentIndex={setCurrentIndex}
        />

        <ToastContainer autoClose={5000}/>
    </main>

  )
}

export default App

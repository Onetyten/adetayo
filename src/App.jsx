import { ToastContainer } from "react-toastify"
import About from "./About"
import Contact from "./Contact"
import Education from "./Education"
import Intro from "./Intro"
import ProjectContainer from "./ProjectContainer"
import Skills from "./Skills"
// import ContactDeprecated from "./Contact_old"

function App() {

  return (
    <main className="overflow-x-hidden scroll-snap-y font-intel">
        <Intro/>
        <About/>
        <ProjectContainer/>        
        <Skills/>
        <Education/>
        <Contact/>
        {/* <ContactDeprecated/> */}
        <ToastContainer autoClose={5000}/>
    </main>

  )
}

export default App

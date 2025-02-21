import About from "./About"
import Contact from "./Contact"
import Education from "./Education"
import Intro from "./Intro"
import ProjectContainer from "./ProjectContainer"
import Skills from "./Skills"

function App() {

  return (
    <main className="overflow-x-hidden scroll-snap-y">
        <Intro/>
        <About/>
        <ProjectContainer/>        
        <Skills/>
        <Education/>
        <Contact/>
        
    </main>

  )
}

export default App

import Box from "../../Components/Box";
import DescriptionCard from "./DescriptionCard";
import ConnectCard from "./ConnectCard";
import About from "./About"
import NavBar from "./NavBar"

interface propType{
    setShowContact:React.Dispatch<React.SetStateAction<boolean>>
    setShowNav:React.Dispatch<React.SetStateAction<boolean>>
}

export default function Intro({setShowContact,setShowNav}:propType) {

  return (
        <section className='max-w-full min-h-dvh relative p-0.5 overflow-hidden flex flex-col lg:flex-row text-text gap-0.5 font-grotesk'>
            <div className="lg:min-h-dvh gap-0.5 lg:min-w-md w-full lg:w-lg flex-shrink-0  max-w-full flex flex-col">
                <Box className="min-h-[110px] flex items-center w-full">
                    <NavBar setShowNav={setShowNav}/>
                </Box>

                <Box className="flex flex-grow py-24 flex-col justify-center items-center h-full w-full">
                    <About/> 
                </Box>
            </div>

            <div className="lg:min-h-dvh gap-0.5 w-full flex flex-col">
                <Box className="flex flex-col flex-grow justify-center relative items-center gap-8 w-full">
                    <DescriptionCard  setShowContact={setShowContact} /> 
                </Box>

                <Box className="min-h-[110px] flex-shrink-0 text-lg flex items-center text-muted w-full">
                    <ConnectCard/> 
                </Box>
            </div>
        </section>
)}

import Box from "../../Components/Box";
import DescriptionCard from "./DescriptionCard";
import ConnectCard from "./ConnectCard";
import About from "./About"
import NavBar from "./NavBar"

interface propType{
    setShowContact:React.Dispatch<React.SetStateAction<boolean>>
}

export default function Intro({setShowContact}:propType) {

  return (
        <div className='max-w-full min-h-dvh  relative p-0.5 overflow-hidden flex text-text gap-0.5 font-grotesk'>
                <div className="h-full min-h-dvh gap-0.5 w-2xl max-w-full flex flex-col">
                    <Box className="min-h-[110px] flex items-center w-full">
                        <NavBar/>
                    </Box>

                    <Box className="flex flex-grow justify-center items-center h-full w-full">
                        <About/>
                    </Box>
                </div>

                <div className="h-full min-h-dvh gap-0.5 w-full flex flex-col">
                    <Box className="flex flex-col flex-grow justify-center items-center gap-8 h-full w-full">
                        <DescriptionCard setShowContact={setShowContact} /> 
                    </Box>

                    <Box className="min-h-[110px] text-lg flex items-center text-muted w-full">
                        <ConnectCard/> 
                    </Box>
                </div>
        </div>
)}

import Box from "../../Components/Box";
import aboutImage from "../../assets/profile.webp"
import TypescriptLogo from "../../assets/Icons/Typescript logo.png"
import ConsoleText from "../../ConsoleText"

const localLinks = [
    {name:"Work",url:""},
    {name:"About",url:""},
    {name:"Contact",url:""},
]

export default function Intro() {
  return (
        <div className='max-w-full min-h-dvh  relative p-0.5 overflow-hidden flex text-text gap-0.5 font-grotesk'>
                <div className="h-full min-h-dvh gap-0.5 w-2xl max-w-full flex flex-col">
                    <Box className="min-h-[110px] gap-2 flex justify-between items-center w-full">
                        <p className="text-xl font-poppins font-semibold">Adetayo</p>
                        <div className="flex gap-3 uppercase font-medium font-grotesk text-sm">
                            {localLinks.map((item,index) => <a key={index} href={item.url}>{item.name}</a>)}
                        </div>
                    </Box>

                    <Box className="flex flex-col flex-grow justify-center gap-12 h-full w-full">
                        <div className="w-full flex justify-center items-center">
                                <img src={aboutImage} alt="" className="w-56 hover:shadow-[5px_0px_0px_#292824] transition-all duration-500 shadow-[7px_0px_0px_#292824] rounded-full object-contain" />
                        </div> 

                        <ConsoleText projectname = 'About' className="w-full">
                            <div className='flex flex-col text-lg gap-3 sm:gap-4'>
                                <div>
                                    <p className='text-xl'>Labaeka_Adetayo</p>
                                </div>
                                <div>
                                    <p className='text-muted' >Stack : <span className='text-text'>MERN_STACK</span></p> 
                                </div>

                                <div>
                                    Hi, i&apos;m Adetayo a Fullstack developer with a lifelong obsession for building. Over the years i&apos;ve worked on a diverse range of projects from high performance real-time backend systems to high fidelity frontends.
                                </div>

                                <div className="text-center bg-card w-full hover:bg-lightergrey rounded-sm border-1 border-muted text-text p-3 font-medium">
                                        <a href= "https://github.com/Onetyten" target='_blank' > GITHUB </a>
                                </div>

                            </div>
                        </ConsoleText>
                    </Box>
                </div>

                <div className="h-full min-h-dvh gap-0.5 w-full flex flex-col">
                    <Box className="flex flex-col flex-grow justify-center items-center gap-8 h-full w-full">
                        <div className="w-10/12">
                            <p className="text-5xl font-offbit leading-relaxed">
                                I thrive in the <span className="font-grotesk origin-bottom-left relative inline-block rotate-[-5deg] bg-[#3178C6] px-2">
                                    <span className="absolute inline-block -right-3 -top-5 border-darkgrey border-2" > <img src={TypescriptLogo} alt="" className="size-6" /></span>
                                     Typescript 
                                </span> ecosystem, proficient in technologies like Next.js, React, Node.js, and React Native.
                            </p>
                        </div>
                        
                    </Box>
                    <Box className="min-h-[110px] text-lg text-muted flex items-center w-full">
                        <div>
                            You can reach me on: 
                        </div>

                    </Box>
                </div>
        </div>
)}

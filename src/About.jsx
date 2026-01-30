/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import Aboutpic from '/Images/aboutpic.webp'
import ConsoleText from './ConsoleText'
import AboutpicMobile from '/Images/aboutpicmobile.webp'
import {useEffect} from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';






export default function About(props) {
  const {pageIndex,viewList,setCurrentIndex,pageUrls} = props




  useEffect(()=>{
      setCurrentIndex(pageIndex)
  },[viewList[pageIndex].inView])
  

  return (
      <div ref={viewList[pageIndex].ref} id={pageUrls[pageIndex]} className='min-h-dvh relative box-border flex-col lg:flex-row  flex overflow-x-hidden section-snap '>
        <div className="bg-darkgrey h-full flex justify-center items-center flex-[0.45] min-h-72  lg:min-h-dvh lg:flex-[0.62] relative ">
          <div className='w-full h-full flex justify-center items-center flex-1'>
            <LazyLoadImage alt="About me"src={Aboutpic} effect="blur" className='lg:block hidden  2xl:translate-x-64 xl:translate-x-48  border-4 lg:w-xs w-60 h-auto object-contain grayscale-0 hover:grayscale transition duration-400'/>
          </div>


          <div className='lg:hidden flex justify-center items-center h-full w-full overflow-hidden'>
                <LazyLoadImage alt="About me"src={AboutpicMobile} effect="blur" className='object-center object-contain grayscale-0 hover:grayscale transition duration-400 max-w-64'/>
          </div>
        </div>
        <div className="bg-white h-full lg:min-h-dvh flex-1 flex justify-center p-2 lg:p-4 pb-4 items-center">
          <ConsoleText projectname = 'About'>


            <div className='flex flex-col gap-3 sm:gap-4'>
            
              <div>
                  <p className='text-xl'>Adetayo</p>
              </div>
              <div>
              <p className='text-lightergrey' >Stack : <span className='text-white'>MERN_STACK</span></p> 
              </div>

              <div className='text-lightergrey'>
                Skills : 
                  <span className='text-myteal'>  HTML, CSS, Javascript, React, React_Native, NodeJS, ExpressJS, MongoDB, TailwindCSS, Python, ThreeJS, Git</span>
              </div>

              <div>
                Fullstack developer with a lifelong obsession for building. From early childhood experiments wiring motors to toy cars to architecting robust web, mobile, and backend systems.<br/><br/> I thrive in the Typescript ecosystem, proficient in technologies like Next.js, React, Node.js, and React Native. Over the years i&apos;ve worked on a diverse range of projects from high performance real-time backend systems to high fidelity frontends.<br/><br/>
                Outside of tech, I enjoy drawing and video games, which often spark creative ideas I later bring to life through code.
              </div>

              <div className="text-center bg-white hover:bg-lightergrey w-32 text-darkgrey hover:text-white text-sm lg:text-sm p-1 lg:p-2   font-bold">
                    <a href= "https://github.com/Onetyten" target='_blank' > GITHUB </a>
              </div>

            </div>

          </ConsoleText>
        </div>
      </div>
  )
}

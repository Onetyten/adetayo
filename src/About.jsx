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
      <div ref={viewList[pageIndex].ref} id={pageUrls[pageIndex]} className=' min-h-screen relative box-border flex-col lg:flex-row  flex overflow-x-hidden section-snap '>
        <div className="bg-darkgrey h-full flex justify-center items-center flex-[0.45] min-h-72  lg:min-h-screen lg:flex-[0.62] relative ">
          <div className='w-full h-full flex justify-center items-center flex-1'>
            <LazyLoadImage alt="About me"src={Aboutpic} effect="blur" className='lg:block hidden  2xl:translate-x-64 xl:translate-x-48  border-4 lg:w-xs w-60 h-auto object-contain grayscale-0 hover:grayscale transition duration-400'/>
          </div>


          <div className='lg:hidden flex justify-center items-center h-full w-full overflow-hidden'>
                <LazyLoadImage alt="About me"src={AboutpicMobile} effect="blur" className='object-center object-contain grayscale-0 hover:grayscale transition duration-400 max-w-64'/>
          </div>
        </div>
        <div className="bg-white h-full lg:min-h-screen flex-1 flex justify-center pb-20 p-2 lg:p-4 lg:pb-4 items-center">
          <ConsoleText projectname = 'About'>


          <div className='flex flex-col gap-3'>
          
            <div>
                <p className='text-xl 2xl:text-xl'>Adetayo</p>
            </div>
            <div>
            <p className=' 2xl:text-lg text-lightergrey' >Stack : <span className='text-white'>MERN_STACK</span></p> 
            </div>

            <div className='2xl:text-lg text-lightergrey'>
              Skills : 
                <span className='text-myteal'>  HTML, CSS, Javascript, React, React_Native, NodeJS, ExpressJS, MongoDB, TailwindCSS, Python, ThreeJS, Git</span>
            </div>

            <div className=' 2xl:text-lg'>
              I specialize in the JavaScript stack, including HTML, CSS, JavaScript, React, React Native, and more, as detailed below. I invite you to explore my portfolio and discover the passion and dedication that fuels my craft. Whether you are here to check out my latest project or learn more about my expertise in the world of web development and programming in general, I hope you find inspiration in my projects and feel the passion I felt while making them.
            </div>

            <div className="text-center bg-white hover:bg-lightergrey w-32 text-darkgrey hover:text-white text-sm lg:text-base p-1 lg:p-2   font-bold">
                  <a href= "https://github.com/Onetyten" target='_blank' > GITHUB </a>
            </div>

          </div>

          </ConsoleText>
        </div>
      </div>
  )
}



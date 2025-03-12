import Aboutpic from '/Images/aboutpic.png'
import ConsoleText from './ConsoleText'
import AboutpicMobile from '/Images/aboutpicmobile.png'
import placMobilePic from '/Images/placeholderImage/plac-aboutpicmobile.png'
import { useState } from 'react'






export default function About() {
  const [mobileLoaded,setMobileLoaded] = useState(false)
  return (
    <div className=' h-screen relative box-border flex-col md:flex-row  flex overflow-x-hidden section-snap '>
      <div className="bg-darkgrey h-full flex-[0.52] relative">
        <div>
          <img src={Aboutpic} alt="" loading='lazy' className='absolute md:-right-[32%] md:block hidden v-align md:w-xs w-60 object-contain grayscale-0 hover:grayscale transition duration-300'/>
        </div>


    <div className='md:hidden right-[12%] flex justify-center items-center h-full w-full'>
        <div className='md:w-xs min-h-96 w-[60%] bg-cover bg-center' style={{backgroundImage: mobileLoaded? "" : `url(${placMobilePic})`}}>
          <img src={AboutpicMobile} loading='lazy' onLoad={()=>{setMobileLoaded(true)}} alt="" className='md:w-xs w-full object-contain grayscale-0 hover:grayscale transition duration-300'/>
        </div>
    </div>
      </div>
      <div className="bg-white h-full flex-1 flex justify-center p-4 items-center">
        <ConsoleText projectname = 'About'>


        <div className='flex flex-col gap-3'>
        
          <div className=''>
              <p className='text-lg 2xl:text-2xl'>Adetayo</p>
          </div>
          <div className='ml-4'>
          <p className=' 2xl:text-lg text-lightergrey' >Stack : <span className='text-white'>MERN_STACK</span></p> 
          </div>

          <div className='ml-4 2xl:text-lg text-lightergrey'>
            Skills : 
              <span className='text-myteal'>  HTML , CSS , Javascript , React , React_Native , NodeJS , ExpressJS , MongoDB , TailwindCSS , Python , ThreeJS , Git  </span>
          </div>

          <div className='ml-4 2xl:text-lg'>
            I specialize in the JavaScript stack, including HTML, CSS, JavaScript, React, React Native, and more, as detailed below. I invite you to explore my portfolio and discover the passion and dedication that fuels my craft. Whether you are here to check out my latest project or learn more about my expertise in the world of web development and programming in general, I hope you find inspiration in my projects and feel the passion I felt while making them.
          </div>

          <div className="text-center bg-white hover:bg-lightergrey w-32 text-darkgrey ml-4 mt-10 hover:text-white text-md p-2 font-bold">
                <a href= "https://github.com/Onetyten" target='_blank'> GITHUB </a>
            </div>

        </div>




          {/* <div className='ml-0'>
              <CodeText> const </CodeText> <span>newDeveloper</span> 
              <CodeText> = new <BoolText>Developer</BoolText> </CodeText> <span className='text-orange-300'> {'('} </span><GreyText>{"{"}</GreyText>
            </div>
            <div className='ml-4'>
              name : <StringText> &quot;Adetayo&quot;</StringText><GreyText> ,</GreyText>
            </div>
            <div className='ml-4'>
              stack : <StringText> &quot;MERN_STACK&quot;</StringText><GreyText> ,</GreyText>
            </div>
            <div className='ml-4'>
              skills : 
       
                <GreyText>{' ['}</GreyText> 
                <StringText> &apos;HTML&apos;</StringText><GreyText> ,</GreyText>
                <StringText> &apos;CSS&apos;</StringText><GreyText> ,</GreyText>
                <StringText> &apos;Javascript&apos;</StringText><GreyText> ,</GreyText>
                <StringText> &apos;React&apos;</StringText><GreyText> ,</GreyText>
                <StringText> &apos;React_Native&apos;</StringText><GreyText> ,</GreyText>
                <StringText> &apos;NodeJS&apos;</StringText><GreyText> ,</GreyText>
                <StringText> &apos;ExpressJS&apos;</StringText><GreyText> ,</GreyText>
                <StringText> &apos;MongoDB&apos;</StringText><GreyText> ,</GreyText>
                <StringText> &apos;TailwindCSS&apos;</StringText><GreyText> ,</GreyText>
                <StringText> &apos;Python&apos;</StringText><GreyText> ,</GreyText>
                <StringText> &apos;ThreeJS&apos;</StringText><GreyText> ,</GreyText>
                <StringText> &apos;Git&apos;</StringText>
                <GreyText>{' ]'}</GreyText> 

            </div>
            <div className='ml-4'>
              Hardworker : <BoolText> True </BoolText><GreyText> ,</GreyText>
            </div>
            <div className='ml-4'>
                Passionate : <BoolText> True </BoolText><GreyText> ,</GreyText>
            </div>
            <span className='text-orange-300'> {')'} </span><GreyText>{"}"}</GreyText>
            <div className='ml-0'>
                <span>newDeveloper.</span><BoolText> save </BoolText> <span className='text-orange-300'> {' ( ) '} </span>  
            </div>
            <div className='ml-4'>
              . <BoolText> then  </BoolText><span className='text-orange-300'> {' ( '} </span><GreyText>{"dev "}</GreyText><CodeText>{'=>'}</CodeText> console.<BoolText>log  </BoolText><GreyText>{"("}</GreyText> <StringText>&quot; Developer saved &quot;</StringText><GreyText>{")"}</GreyText><span className='text-orange-300'> {' ) '} </span>
            </div> */}
        </ConsoleText>
      </div>
    </div>
  )
}

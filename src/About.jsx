import Aboutpic from '/Images/aboutpic.png'
import CodeText from './Components/CodeText'
import GreyText from './Components/GreyText'
import StringText from './Components/StringText'
import BoolText from './Components/BoolText'
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
        <ConsoleText projectname = 'About.js'>

          <div className='ml-0'>
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
            </div>
        </ConsoleText>
      </div>
    </div>
  )
}

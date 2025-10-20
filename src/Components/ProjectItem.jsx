/* eslint-disable no-unused-vars */

import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export default function ProjectItem(props) {
    const { name,role,skills,desc,githubPath,projectPath} = props
    
   

    
  return (
    <div className='flex flex-col gap-2 sm:gap-3 text-xs 2xl:text-base'>
        <div>
           <p className='text-lightergrey' >Role : <span className='text-white'>{role}</span></p> 
        </div>

        <div className='text-lightergrey'>
            Tools : { " "}
                {
                    skills.map((item,index)=>{
                        return( 
                            <span key={index} className='text-myteal'>
                                {item},{ " "}
                            </span>
                            
                        )
                    })
                }
                <span className='text-myteal'> Git</span>
        </div>

        <div>
            {desc}
        </div>

        <div className=' flex gap-3'>
            <div className="text-center bg-white hover:bg-lightergrey text-darkgrey hover:text-white text-sm p-1 md:p-2 font-bold">
                <a href={githubPath} target='_blank'> GITHUB </a>
            </div>

            <div className="text-center bg-white hover:bg-lightergrey text-darkgrey hover:text-white text-sm p-1 md:p-2  font-bold">
                <a href={projectPath} target='_blank'>VIEW PROJECT </a>
            </div>
        </div>
    </div>
    
  )
}

ProjectItem.propTypes={
    name : PropTypes.node,
    role : PropTypes.node,
    skills : PropTypes.node,
    githubPath : PropTypes.node,
    projectPath : PropTypes.node,
    desc : PropTypes.node,
}
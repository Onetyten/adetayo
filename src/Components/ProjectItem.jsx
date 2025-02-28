
import PropTypes from 'prop-types'

export default function ProjectItem(props) {
    const { name,role,skills,desc,githubPath,projectPath} = props
  return (
    <div className='flex flex-col gap-3'>
        
        <div className=''>
            <p className='text-lg 2xl:text-2xl'>{name}</p>
        </div>
        <div className='ml-4'>
           <p className=' 2xl:text-lg text-lightergrey' >Role : <span className='text-white'>{role}</span></p> 
        </div>

        <div className='ml-4 2xl:text-lg text-lightergrey'>
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

        <div className='ml-4 2xl:text-lg'>
            {desc}
        </div>

        <div className=' flex gap-3 ml-4'>
            <div className="text-center bg-white hover:bg-lightergrey text-darkgrey hover:text-white text-md p-2 font-bold">
                <a href={githubPath} target='_blank'> GITHUB </a>
            </div>

            <div className="text-center bg-white hover:bg-lightergrey text-darkgrey hover:text-white text-md p-2 font-bold">
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
    desc : PropTypes.node
}
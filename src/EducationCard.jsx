
import FixedConsole from "./FixedConsole";
import PropTypes from "prop-types";

export default function EducationCard(props) {
    const {projectname,timeline,skills,desc}  = props
  return (
    <div>
        <FixedConsole projectname={projectname} className='xl:text-md text-xs' >

        <div className='flex flex-col gap-3'>
        
            <div className=''>
                <p className='text-lg 2xl:text-2xl'>{projectname}</p>
            </div>
            <div className='ml-4'>
            <p className=' 2xl:text-lg text-lightergrey' >Timeline : <span className='text-white'>{timeline}</span></p> 
            </div>

            <div className='ml-4 2xl:text-lg text-lightergrey'>
                Skills learnt : { " "}
                <span className='text-myteal'>
                    {skills}{ " "}
                </span>
            </div>

            <div className='ml-4 2xl:text-lg'>
                {desc}
            </div>

        </div>

        </FixedConsole>

    </div>
  )
}
EducationCard.propTypes = {
    projectname:PropTypes.node,
    timeline:PropTypes.node,
    skills:PropTypes.node,
    desc:PropTypes.node,
}

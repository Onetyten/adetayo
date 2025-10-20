
import FixedConsole from "./FixedConsole";
import PropTypes from "prop-types";

export default function EducationCard(props) {
    const {projectname,timeline,skills,desc}  = props
  return (
    <div>
        <FixedConsole projectname={projectname} isTimeline={true} >

        <div className='flex pl-1 md:pl-4 flex-col gap-3 py-2 pb-6'>
            <div className=' '>
                <p className='text-lightergrey' >Timeline : <span className='text-white'>{timeline}</span></p> 
            </div>

            <div className='text-lightergrey'>
                Skills learnt : { " "}
                <span className='text-myteal'>
                    {skills}{ " "}
                </span>
            </div>

            <div>
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

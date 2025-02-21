import BoolText from "./Components/BoolText";
import CodeText from "./Components/CodeText";
import GreyText from "./Components/GreyText";
import StringText from "./Components/StringText";
import FixedConsole from "./FixedConsole";
import PropTypes from "prop-types";

export default function EducationCard(props) {
    const {projectname,timeline,skills,desc}  = props
  return (
    <div>
        <FixedConsole projectname={projectname} className='xl:text-md text-xs' >
            <div className='ml-0'>
                <CodeText> const </CodeText> <span>newTraining</span> 
                <CodeText> = new <BoolText>Training</BoolText> </CodeText> <span className='text-orange-300'> {'('} </span><GreyText>{"{"}</GreyText>
            </div>
            <div className=' ml-2 xl:ml-4'>
                Institution : <StringText> &quot;{projectname}
                &quot;</StringText><GreyText> ,</GreyText>
            </div>
            <div className='ml-2 xl:ml-4'>
                Timeline : <StringText> &quot;{timeline}
                &quot;</StringText><GreyText> ,</GreyText>
            </div>
            <div className='ml-2 xl:ml-4'>
                Skills_learnt : <StringText> &quot;{skills}&quot;</StringText><GreyText> ,</GreyText>
            </div>

            <div className='ml-2 xl:ml-4 xl:block hidden'>
                Description : <StringText> &quot;{desc}&quot;</StringText><GreyText> ,</GreyText>
            </div>
            <span className='text-orange-300'> {')'} </span><GreyText>{"}"}</GreyText>
            <div className='ml-0'>
                <span className="text-xs">newTraining.</span><BoolText> save </BoolText> <span className='text-orange-300'> {' ( ) '} </span>  
            </div>
            <div className='ml-2 xl:ml-4 xl:block hidden '>
            . <BoolText> then  </BoolText><span className='text-orange-300'> {' ( '} </span><GreyText>{"dev "}</GreyText><CodeText>{'=>'}</CodeText> console.<BoolText>log  </BoolText><GreyText>{"("}</GreyText> <StringText>&quot; Training saved &quot;</StringText><span className='text-orange-300'> {' ) '} </span><GreyText>{")"}</GreyText>
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

import CodeText from './CodeText'
import GreyText from './GreyText'
import BoolText from './BoolText'
import StringText from './StringText'
import PropTypes from 'prop-types'

export default function ProjectItem(props) {
    const { name,role,skills,desc,githubPath,projectPath} = props
  return (
    <div>
        <div className='ml-0'>
            <CodeText> const </CodeText> <span>newProject</span> 
            <CodeText> = new <BoolText>Project</BoolText> </CodeText> <span className='text-orange-300'> {'('} </span><GreyText>{"{"}</GreyText>
        </div>
        <div className='ml-4'>
            Project_Name : <StringText> &quot;{name}&quot;</StringText><GreyText> ,</GreyText>
        </div>
        <div className='ml-4'>
            My_Role : <StringText> &quot;{role}&quot;</StringText><GreyText> ,</GreyText>
        </div>
        <div className='ml-4'>
            Tools :
                <GreyText>{' ['}</GreyText> 
                {
                    skills.map((item,index)=>{
                        return( 
                            <span key={index}>
                                <StringText> &apos;{item}&apos;</StringText><GreyText> ,</GreyText>  
                            </span>
                            
                        )
                    })
                }
                <StringText> &apos;Git&apos;</StringText>
                <GreyText>{' ]'}</GreyText> 

        </div>

        <div className='ml-4'>
            Description : <StringText> &quot;{desc}.&quot;</StringText><GreyText> ,</GreyText>
        </div>
        <div className='ml-4'>
            Github Link : <a href={githubPath} target='_blank'><BoolText> Click here </BoolText></a><GreyText> ,</GreyText>
        </div>
        <div className='ml-4'>
            Project Link : <a href={projectPath} target='_blank'><BoolText> Click here </BoolText></a><GreyText> ,</GreyText>
        </div>
        <span className='text-orange-300'> {')'} </span><GreyText>{"}"}</GreyText>
        <div className='ml-0'>
            <span>newDeveloper.</span><BoolText> save </BoolText> <span className='text-orange-300'> {' ( ) '} </span>  
        </div>
        <div className='ml-4'>
        . <BoolText> then  </BoolText><span className='text-orange-300'> {' ( '} </span><GreyText>{"dev "}</GreyText><CodeText>{'=>'}</CodeText> console.<BoolText>log  </BoolText><GreyText>{"("}</GreyText> <StringText>&quot; Developer saved &quot;</StringText><span className='text-orange-300'> {' ) '} </span><GreyText>{")"}</GreyText>
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
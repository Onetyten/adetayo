import ConsoleText from "../../ConsoleText"



interface propTypes {
    projectname: string,
    timeline: string,
    skills:string,
    desc:string,
}

export default function Card(props:propTypes) {
    const {projectname,timeline,skills,desc}  = props
  return (
    <div className="max-w-md xl:min-w-sm xl:max-w-lg ">
        <ConsoleText projectname={projectname} isTimeline={true} >
            <div className='flex pl-1 text-text md:pl-4 flex-col gap-3 py-2 pb-6'>
                <div className=' '>
                    <p className='text-muted' >Timeline : <span className='text-text'>{timeline}</span></p> 
                </div>

                <div className='text-muted'>
                    Skills learnt : { " "}
                    <span className='text-text'>
                        {skills}{ " "}
                    </span>
                </div>

                <div>
                    {desc}
                </div>
            </div>
        </ConsoleText>

    </div>
  )
}


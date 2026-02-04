
interface propTypes{
  source:string,
  title:string
}

export default function SkillItem(props:propTypes) {
    const {source,title} = props
  return (
        <div className='flex flex-col md:gap-4 gap-1.5 hover:opacity-45'>
            <img src={source}  loading='lazy' alt="" className='md:h-12 opacity-75 h-8 object-contain .link-shadow' />
            <p className='text-center font-semibold text-text text-sm uppercase'>{title}</p>
        </div>
  )
}




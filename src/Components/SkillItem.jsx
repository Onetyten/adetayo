

export default function SkillItem(props) {
    const {source,title} = props
  return (
        <div className='flex flex-col gap-0.5'>
            <img src={source} alt="" className='h-16 object-contain .link-shadow' />
            <p className='text-center text-white'>{title}</p>
        </div>
  )
}

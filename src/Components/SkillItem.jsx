import PropTypes from "prop-types"

export default function SkillItem(props) {
    const {source,title} = props
  return (
        <div className='flex flex-col md:gap-3 gap-1.5'>
            <img src={source} alt="" className='md:h-16 hover:opacity-45 h-8 object-contain .link-shadow' />
            <p className='text-center font-roboto text-white hover:text-lightergrey text-xs md:text-sm'>{title}</p>
        </div>
  )
}

SkillItem.propTypes ={
  source:PropTypes.node,
  title:PropTypes.node
}



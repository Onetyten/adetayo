import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PropTypes from "prop-types"

export default function ContactBox(props) {
    const {name,icon,placeholder,isArea,onChange,isRequired,value} = props
  return (
    <div className="flex flex-col gap-3">
        <p className="text-white text-sm md:text-base font-bold">{name}</p>
        <div className="w-full relative">
            {!isArea&&(<input type={`${name=="Email"?'email':'text'}`} value={value} required={isRequired}  className="bg-darkgrey w-full pl-12 text-white h-10 2xl:h-14 text-xs md:text-sm placeholder:text-lightergrey" onChange={onChange} placeholder={placeholder}/>)}


            {isArea&&(<textarea rows={5} value={value} required className="bg-darkgrey text-xs md:text-sm  w-full pl-12 text-white min-h-10 h-20 2xl:min-h-14 max-h-24 2xl:max-h-36 p-2 2xl:pt-4 placeholder:text-lightergrey"  onChange={onChange}  placeholder={placeholder}/>)}
            <FontAwesomeIcon icon={icon} className="text-white text-sm md:text-base absolute left-3 2xl:top-5 top-3 link-shadow"  color={" #5d5c5c"}/>
        </div>
    </div>
  )
}

ContactBox.propTypes={
    name:PropTypes.node,
    icon:PropTypes.object,
    placeholder:PropTypes.node,
    value:PropTypes.node,
    onChange:PropTypes.func,
    isArea:PropTypes.bool,
    isRequired:PropTypes.bool
}

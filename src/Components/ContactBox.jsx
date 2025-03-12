import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PropTypes from "prop-types"

export default function ContactBox(props) {
    const {name,icon,placeholder,isArea,onChange} = props
  return (
    <div className="flex flex-col gap-2">
        <p className="text-white text-xs font-bold">{name}</p>
        <div className="w-full relative">
            {!isArea&&(<input type="text" className="bg-darkgrey w-full pl-8 text-white h-9 placeholder:text-lightergrey" onChange={onChange} placeholder={placeholder}/>)}
            {isArea&&(<textarea className="bg-darkgrey w-full pl-8 text-white h-16 p-2 placeholder:text-lightergrey"  onChange={onChange}  placeholder={placeholder}/>)}
            <FontAwesomeIcon icon={icon} className="text-white absolute left-3 top-2.5 link-shadow"  color={" #5d5c5c"}/>
        </div>
    </div>
  )
}

ContactBox.propTypes={
    name:PropTypes.node,
    icon:PropTypes.node,
    placeholder:PropTypes.node,
    onChange:PropTypes.node,
    isArea:PropTypes.bool,
}

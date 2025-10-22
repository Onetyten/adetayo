import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import PropTypes from "prop-types";


export default function ScrollIcon(props){
  const {icon,elementUrl,handleClick} = props
  return(
        <motion.div onClick={() => handleClick(elementUrl)} initial={{rotate:0,opacity:0,y:30}} animate={{y:[0,30,0],opacity:[0,1,1],rotate:[0,90,0]}} transition={{duration:0.5,delay:0.5, ease:'easeOut',times: [0, 0.5, 1] }} className="w-12 navIcon pointer-events-auto cursor-pointer h-12 flex justify-center items-center rounded-full bg-lightgrey/50 text-white/80 md:bg-lightgrey md:text-white">
          <FontAwesomeIcon icon={icon} className=" text-lg md:text-3xl"/>
        </motion.div>
  )
}

ScrollIcon.propTypes = {
    elementUrl:PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired
}
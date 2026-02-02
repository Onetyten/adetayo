
interface propTypes {
  name: string
  placeholder: string
  value: string
  isArea: boolean
  isRequired: boolean
  onChange: React.ChangeEventHandler<HTMLInputElement> | React.ChangeEventHandler<HTMLTextAreaElement>
}



export default function ContactInput(props:propTypes) {
    const {name,placeholder,isArea,onChange,isRequired,value} = props

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const filtered = e.target.value.replace(/[^0-9+-]/g, "")
      onChange({ ...e, target: { ...e.target, value: filtered } } as any)
    }
  return (
    <div className="flex text-text flex-col font-grotesk relative flex-1 gap-3">
      <p className="text-[4px] absolute md:text-base top-1.5 font-semibold left-5">{name}*</p>
      
      {!isArea&&(<input type={`${name=="Email"?'email':'text'}`} value={value} required={isRequired}  className="w-full px-5 pb-3 pt-9 border-1 border-muted focus:outline-0 focus:border-blurple rounded-sm flex-1 text-base placeholder:text-lightergrey" onChange = {name === "Phone" ? handlePhoneChange : onChange as React.ChangeEventHandler<HTMLInputElement>} pattern={name === "Phone" ? "[0-9+-]*" : undefined} placeholder={placeholder}/>)}

      {isArea&&(<textarea rows={5} value={value} required className="px-5 pb-3 pt-9 border-1 border-muted focus:outline-0 focus:border-blurple rounded-sm w-full h-28 min-h-18 max-h-36 placeholder:text-lightergrey"  onChange={onChange as React.ChangeEventHandler<HTMLTextAreaElement>}  placeholder={placeholder}/>)}
    </div>
  )
}


import clsx from 'clsx'

interface propTypes {
    children?:React.ReactNode
    className?:string
    projectName:string

}



export default function ContactConsole({children,className,projectName}:propTypes) {
  return (
      <div className={clsx('rounded-3xl transition-all duration-500 bg-card flex flex-col text-xs ',className?className:"")}>
        <div className='flex-1 text-center w-full flex justify-center text-lg 2xl:text-2xl'>
            <p className='text-white text-sm md:text-xl'>{projectName}</p>    
        </div>

        <div className='text-white p-5 box-border flex flex-col justify-between'>
          {children?children:""}
        </div>
      </div>
  )
}
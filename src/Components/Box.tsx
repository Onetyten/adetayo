import React from 'react'
import clsx from 'clsx'


interface propTypes{
    children?:React.ReactNode
    className?:string
}

export default function Box({children,className}:propTypes) {
  return (
    <div className={clsx('p-8 bg-darkgrey relative rounded-md',className?className:"")}>
        <div className="top-2 left-2 absolute size-2 border-[0.5px] border-text/20 bg-background rounded-full"></div>
        <div className="bottom-2 left-2 absolute size-2 border-[0.5px] border-text/20 bg-background rounded-full"></div>
        <div className="top-2 right-2 absolute size-2 border-[0.5px] border-text/20 bg-background rounded-full"></div>
        <div className="bottom-2 right-2 absolute size-2 border-[0.5px] border-text/20 bg-background rounded-full"></div>

        {children}

    </div>
  )
}
